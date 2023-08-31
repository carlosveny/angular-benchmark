# angular-benchmark
Scripts para probar el rendimiento del ordenador durante el despliegue de un proyecto Angular Universal en local.

### Entorno
Node
```
v.14.18.1
```

Npm
```
v.6.14.15
```

### Uso
1. Clonar el repo en local
2. Instalar las dependencias necesarias `npm i`.
3. Crear un archivo `/src/config/config.json` (es recomendable duplicar el de ejemplo y modificar el nombre) que contenga la URL del repo donde se va a ejecutar el benchmark.
4. Lanzar el benchmark `npm run benchmark`.
5. Los resultados se mostrarán una vez finalizado el benchmark.

### Angular sin SSR
Si se desea ejecutar el benchmark en proyectos que NO son SSR, modificar el comando del archivo `startApplication.js` para que se use `ng run serve` en vez de `npm run dev:ssr`
