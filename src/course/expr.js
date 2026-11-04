// Safe arithmetic expression evaluator for course activities.
// Supports numbers (incl. 1.2e-3), variables, + - * / ^, unary -, parentheses,
// comparisons (< <= > >= == !=), && ||, ternary ?:, and a whitelist of functions.
// No access to globals: expressions come from course data, never from users.

const FUNCTIONS = {
  log10: Math.log10, log: Math.log10, ln: Math.log, exp: Math.exp, sqrt: Math.sqrt,
  abs: Math.abs, min: Math.min, max: Math.max, pow: Math.pow, round: (x, d = 0) => {
    const f = 10 ** d; return Math.round(x * f) / f;
  }, floor: Math.floor, ceil: Math.ceil, sin: Math.sin, cos: Math.cos
};
const CONSTANTS = { pi: Math.PI, e: Math.E };

function tokenize(src) {
  const tokens = [];
  let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (/\s/.test(c)) { i++; continue; }
    const num = /^(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?/.exec(src.slice(i));
    if (num) { tokens.push({ t: "num", v: Number(num[0]) }); i += num[0].length; continue; }
    const id = /^[A-Za-z_][A-Za-z0-9_]*/.exec(src.slice(i));
    if (id) { tokens.push({ t: "id", v: id[0] }); i += id[0].length; continue; }
    const op = /^(<=|>=|==|!=|&&|\|\||[-+*/^()<>?:,!])/.exec(src.slice(i));
    if (op) { tokens.push({ t: "op", v: op[0] }); i += op[0].length; continue; }
    throw new Error(`Carácter no permitido «${c}» en «${src}»`);
  }
  return tokens;
}

export function parseExpression(src) {
  const tokens = tokenize(String(src));
  let pos = 0;
  const peek = () => tokens[pos];
  const isOp = v => peek()?.t === "op" && peek().v === v;
  const expect = v => { if (!isOp(v)) throw new Error(`Se esperaba «${v}» en «${src}»`); pos++; };

  function ternary() {
    const cond = or();
    if (isOp("?")) { pos++; const a = ternary(); expect(":"); const b = ternary(); return { k: "?", cond, a, b }; }
    return cond;
  }
  function binary(next, ops) {
    return function parse() {
      let left = next();
      while (peek()?.t === "op" && ops.includes(peek().v)) { const op = tokens[pos++].v; left = { k: "bin", op, left, right: next() }; }
      return left;
    };
  }
  function unary() {
    if (isOp("-")) { pos++; return { k: "neg", x: unary() }; }
    if (isOp("+")) { pos++; return unary(); }
    if (isOp("!")) { pos++; return { k: "not", x: unary() }; }
    return power();
  }
  function power() {
    const base = primary();
    if (isOp("^")) { pos++; return { k: "bin", op: "^", left: base, right: unary() }; }
    return base;
  }
  function primary() {
    const tok = tokens[pos++];
    if (!tok) throw new Error(`Expresión incompleta «${src}»`);
    if (tok.t === "num") return { k: "num", v: tok.v };
    if (tok.t === "id") {
      if (isOp("(")) {
        if (!(tok.v in FUNCTIONS)) throw new Error(`Función no permitida «${tok.v}»`);
        pos++;
        const args = [];
        if (!isOp(")")) { args.push(ternary()); while (isOp(",")) { pos++; args.push(ternary()); } }
        expect(")");
        return { k: "call", f: tok.v, args };
      }
      return { k: "var", v: tok.v };
    }
    if (tok.v === "(") { const e = ternary(); expect(")"); return e; }
    throw new Error(`Token inesperado «${tok.v}» en «${src}»`);
  }
  const mul = binary(unary, ["*", "/"]);
  const add = binary(mul, ["+", "-"]);
  const cmp = binary(add, ["<", "<=", ">", ">=", "==", "!="]);
  const and = binary(cmp, ["&&"]);
  const or = binary(and, ["||"]);

  const ast = ternary();
  if (pos !== tokens.length) throw new Error(`Sobra «${tokens[pos].v}» en «${src}»`);
  return ast;
}

export function variablesOf(ast, acc = new Set()) {
  if (!ast) return acc;
  if (ast.k === "var" && !(ast.v in CONSTANTS)) acc.add(ast.v);
  for (const key of ["x", "left", "right", "cond", "a", "b"]) if (ast[key]) variablesOf(ast[key], acc);
  if (ast.args) ast.args.forEach(a => variablesOf(a, acc));
  return acc;
}

function run(ast, scope) {
  switch (ast.k) {
    case "num": return ast.v;
    case "var": {
      if (Object.prototype.hasOwnProperty.call(scope, ast.v)) return Number(scope[ast.v]);
      if (ast.v in CONSTANTS) return CONSTANTS[ast.v];
      throw new Error(`Variable no definida «${ast.v}»`);
    }
    case "neg": return -run(ast.x, scope);
    case "not": return run(ast.x, scope) ? 0 : 1;
    case "?": return run(ast.cond, scope) ? run(ast.a, scope) : run(ast.b, scope);
    case "call": return FUNCTIONS[ast.f](...ast.args.map(a => run(a, scope)));
    case "bin": {
      const l = run(ast.left, scope);
      if (ast.op === "&&") return l ? (run(ast.right, scope) ? 1 : 0) : 0;
      if (ast.op === "||") return l ? 1 : (run(ast.right, scope) ? 1 : 0);
      const r = run(ast.right, scope);
      switch (ast.op) {
        case "+": return l + r; case "-": return l - r; case "*": return l * r; case "/": return l / r;
        case "^": return l ** r;
        case "<": return l < r ? 1 : 0; case "<=": return l <= r ? 1 : 0;
        case ">": return l > r ? 1 : 0; case ">=": return l >= r ? 1 : 0;
        case "==": return l === r ? 1 : 0; case "!=": return l !== r ? 1 : 0;
      }
    }
  }
  throw new Error("Nodo desconocido");
}

const cache = new Map();
export function evaluate(src, scope = {}) {
  let ast = cache.get(src);
  if (!ast) { ast = parseExpression(src); cache.set(src, ast); }
  return run(ast, scope);
}

/** Evaluates calculator outputs in order so later outputs can use earlier ones. */
export function evaluateOutputs(outputs, scope) {
  const values = { ...scope };
  for (const out of outputs) values[out.id] = evaluate(out.expr, values);
  return values;
}

export function formatNumber(value, digits = 3) {
  if (!Number.isFinite(value)) return "—";
  const abs = Math.abs(value);
  if (abs !== 0 && (abs < 1e-3 || abs >= 1e6)) {
    const [m, e] = value.toExponential(Math.max(0, digits - 1)).split("e");
    return `${m} × 10${toSuperscript(Number(e))}`;
  }
  // Punto decimal, como en el material del curso (p. ej., 35.45 u).
  return String(Number(value.toFixed(digits)));
}

const SUP = { "-": "⁻", 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" };
export function toSuperscript(n) { return String(n).split("").map(c => SUP[c] ?? c).join(""); }

export function withinTolerance(value, target, tolerance) {
  const tol = tolerance ?? Math.max(Math.abs(target) * 0.01, 1e-12);
  return Math.abs(value - target) <= tol + 1e-12;
}
