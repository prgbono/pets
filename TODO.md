## TODO:
- [ ] Sustituir Bootstrap por Tailwind (# [Oficial doco:'](https://tailwindcss.com/docs/guides/vite))
    - [X] Meter Tailwind en un proyecto Vite.
    - [X] Quitar las referencias a bootstrap en index.html
    - [X] Identificar los componentes e ir haciendo la sustitución de arriba a abajo (en la extensión React Developer tools    del inspector del browser puedes ver este árbol). Componentes afectados: PetProvider, Home, LanguageSwitcher, SortingBar, PetCard, Link, Footer, PetOfTheDay y PetDetails
    - [X] Comprobar toda la funcionalidad (para ello lee el Readme)
    - [X] poner el fondo blanco
    - [ ] Check these FIXMEs:
        [X] --> NavBar a la derecha!
        [X] --> clase activa del navbar/sortingBar
        [X] --> Texto en PetDetail
        [X] --> Separacion imágen - texto en PetDetail
        [X] --> Los colores de HEALTY y UNHEALTHY
        [X] --> Estilo del modal pet of the day. Close button y líneas horizontales grises
        [X] --> Todas las tarjetas con el mismo tamaño sea cual sea el tamaño de la pantalla (agrandarla para comprobarlo)
        [X] --> Todas las fotos thumbnails de las tarjetas iguales en tamaño y posicion
        [X] --> Todas las fotos del PetDetail del mismo tamaño
        [X] --> El efecto relieve/sombra de las tarjetas en bootstrap y del modal Pet of the day no lo tiene con Tailwind
    - [X] --> PRobar la responsiveness. Programa ResponsivelyApp.app    
    - [ ] --> Hamburguesa para las opciones del navbar cuando se hace tamaño móvil
    - Commits, 2: [X] 1. Configuración de TAilwind y eliminación de Bootstrap.
                  [ ] 2. Sustitución de clases Tailwind reemplazando las clases bootstrap.
                        Atomizar los commits.
- [ ] FILTROS. Filtrar por kind, y por alguna cosa más. Los filtros hay que aprender a hacerlos!
- [ ] Paginación. (See approach in Readme file)
- [ ] Check this UI tips - https://dev.to/harimanok/make-your-app-feel-better-11-ui-tips-for-beginnermid-level-developers-1e1n
- [ ] <NotFound /> component for being re-usable and add it to AppRouter file
- [ ] Sustituir fetch por Axios? - Pros y contras - https://dev.to/doccaio/axios-vs-fetch-1k1k
- [ ] [UDEMY] We should use useMemo when fetching pets list and pet details. We are making request in the root of their components (`PetProvider.tsx` and `PetDetail.tsx`). Every time their states change the components are re-rendered so that a new request is done. By using `useMemo` we memorize the values retrieved and the performance would be improved.
- [ ] [UDEMY] Lanzarlo con GitHub pages (sección 7 en Udemy React)
- [ ] Stash: Ejemplo sobre diccionarios. Usarlos cuando venga la ocasión
- [ ] Check Audit/Lighthouse
- [ ] Tests
- [X] the absence of adapters for the API data model highlights an issue with flexibility and scalability, potentially making future development and maintenance more difficult. This also raises concerns about compatibility with different data sources or changes in the API structure. ESTO ES SIMPLEMENTE METER UN ARCHIVO ADAPTADOR PARA TIPIFICAR LAS RESPUESTAS DE LA API. ES ALGO SIMILAR A LO QUE HAY HECHO EN LA CARPETA TYPES/INDEX
- [X] Alias for the imports (See Readme)
- [X] Stash: sobre el package y cómo cambiar el puerto
- [X] Hacerlo responsivo. Métodos:
    - [X] https://www.lambdatest.com/lt-browser -> Navegador LT Browser
    - [X] https://developer.chrome.com/docs/lighthouse/overview/ -> DevTools / Lighthouse
    - [X] responsively.app
- [X] Persistir el sorting (avoid refreshing) y con él el estado
- [X] Arreglar la clase activa en el navBar

