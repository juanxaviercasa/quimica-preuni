# ⚛️ Química PreUNI · Plataforma Web Interactiva

> **Plataforma educativa completa de Química Preuniversitaria (Academia Zenit) con 18 módulos interactivos, simuladores conceptuales, tabla periódica oficial IUPAC, visor 3D, autodiagnóstico y exámenes acumulativos de estilo admisión.**

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![Education](https://img.shields.io/badge/Domain-Química%20PreUNI-10B981?style=flat-square)
![Domain](https://img.shields.io/badge/URL-quimica.sistemazenit.com-8B4DB0?style=flat-square)

---

## 🎯 Arquitectura y Contenidos

1. 📚 **Curso Completo de 18 Módulos (197 Lecciones)**:
   - Cobertura integral desde Materia y Medición hasta Metalurgia, Contaminación y Química Verde.
   - Cada lección cuenta con objetivo observable, fundamentos clave, simulador interactivo, ejemplo resuelto modelo admisión, práctica guiada con retroalimentación inmediata y mini examen conceptual.
   - Evaluaciones acumulativas integradoras por módulo (8+ preguntas rigurosamente revisadas).
2. 🔬 **Simuladores y Actividades Interactivas por Tema**:
   - Conversor exacto de temperaturas e intervalos térmicos ($\Delta T$) con cero absoluto y punto de congelación $273.15\text{ K}$ (BIPM).
   - Laboratorio de isótopos y masa atómica promedio ponderada con abundancia natural IUPAC / CIAAW.
   - Comparador y visualizador de tendencias periódicas (radio, $EI_1$, electronegatividad de Pauling y afinidad electrónica) contrastado con datos experimentales NIST ASD.
   - Balanza estequiométrica con conservación de masa y carga en reacciones químicas.
   - Simuladores paramétricos de gases ($PV=nRT$), disoluciones ($M, N$), cinética y equilibrio químico ($K_c, K_p, \text{pH}$).
3. 🧪 **Herramientas de Apoyo Integradas**:
   - **Tabla Periódica Dinámica**: 118 elementos IUPAC y vista focalizada de 38 elementos esenciales PreUNI.
   - **Visor 3D de Orbitales y Átomos**: Modelado atómico interactivo con Three.js / React Three Fiber.
   - **Diagnóstico y Práctica Adaptativa**: Test de entrada con mapa de fortalezas y repaso espaciado.

---

## 💻 Ejecución Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción y previsualizar
npm run build
npm run preview

# Ejecutar suite de pruebas unitarias y validación del curso
npm test

# Ejecutar verificación completa en navegador (Playwright)
npm run test:browser
```

---

## 👨‍💻 Autor y Proyecto

**Juan Xavier Cabello** — Educación en Ciencias y Desarrollo Web Full-Stack.  
Academia Zenit · [Comunidad en Skool](https://www.skool.com/academia-zenit-3587/about) · [quimica.sistemazenit.com](https://quimica.sistemazenit.com)
