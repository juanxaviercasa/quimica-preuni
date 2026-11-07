# Visor atómico interactivo de la portada

## Qué cambió
- Se reemplazó la ilustración CSS estática (O) por el componente ya existente `AtomViewer3D.jsx` de las fichas de elementos.
- Selector de **oxígeno (O)**, **carbono (C)** y **oro (Au)**, usando el mismo catálogo de `src/elementsData.js`. Los electrones por capas y los datos del átomo se leen del registro, no están inventados en la portada.
- Se conservan las capacidades del visor original: orbitar el modelo con arrastre, zoom, pausa/reanudación, etiquetas de capas, vista de Bohr y representación de nube cuántica.
- Se añadió `compact` opcional al visor para reducir la escala y la resolución en el hero sin modificar su comportamiento por defecto en las fichas.
- La carga del módulo de Three.js es diferida, al entrar en el área visible. Si el dispositivo pide reducción de movimiento/ahorro de datos, se ofrece activación manual. Si WebGL no está disponible, hay representación estática y un mensaje; no se simula interactividad.
- La ficha completa de cada elemento se abre desde el enlace inferior del hero.
- Nota pedagógica: **representación de capas didáctica, no trayectorias físicas reales de los electrones**.

## Verificación recomendada
1. Ejecutar `npm install` y `npm run build`, `npm test` y `npm run test:browser`.
2. En `/`, comprobar el selector O/C/Au; números de protones, electrones y capas; pausa, etiquetas, reinicio de cámara y cambio Bohr/nube cuántica.
3. Comprobar que la ficha `/elemento/au` sigue mostrando el visor sin cambios adversos.
4. En móvil (390 px) y desktop (1440 px), comprobar el tamaño del canvas y que los controles no se superpongan con los textos. Probar arrastre y pellizcar para acercar en Android/iOS.
5. Probar WebGL bloqueado, conexión con ahorro de datos y `prefers-reduced-motion`.
6. Este cambio está en `redesign/experiencia-educativa-2026`: el despliegue específico de Cloudflare Pages que enviaste no cambiará hasta que se genere una nueva vista previa desde esa rama.

No se ha realizado una prueba de navegador real en esta sesión: el enlace público de Cloudflare y el de la ficha atómica no se pudieron cargar con las herramientas de lectura disponibles; se revisó el código conectado por GitHub y las capturas facilitadas.
