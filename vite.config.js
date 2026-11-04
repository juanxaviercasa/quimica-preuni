import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const hasCustomDomain = existsSync("CNAME") || existsSync("public/CNAME");
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/").pop();
const base = hasCustomDomain || !repositoryName ? "/" : `/${repositoryName}/`;

function githubPagesFallback() {
  return {
    name: "github-pages-fallback",
    closeBundle() {
      const outputDir = resolve("dist");
      mkdirSync(outputDir, { recursive: true });
      copyFileSync(resolve(outputDir, "index.html"), resolve(outputDir, "404.html"));
    }
  };
}

export default defineConfig({
  base,
  // Cloudflare Pages serves index.html for SPA routes when there is no root 404.html.
  plugins: [react(), ...(process.env.CF_PAGES === "1" ? [] : [githubPagesFallback()])],
  build: {
    rollupOptions: {
      input: {
        main: "index.html"
      }
    }
  }
});
