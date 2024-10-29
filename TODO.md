## TODO:
- [ ] <NotFound /> component for being re-usable and add it to AppRouter file
- [ ] Check this UI tips - https://dev.to/harimanok/make-your-app-feel-better-11-ui-tips-for-beginnermid-level-developers-1e1n
- [ ] SORT desde el Backend (`GET /posts?_sort=id,-views`) [Link](https://github.com/typicode/json-server?tab=readme-ov-file#sort)
- [ ] Have a look to these Tailwind inputs. They're supposed to be ready to use https://originui.com/inputs
- [ ] Sustituir fetch por Axios? - Pros y contras - https://dev.to/doccaio/axios-vs-fetch-1k1k
- [ ] [UDEMY] We should use useMemo when fetching pets list and pet details. We are making request in the root of their components (`PetProvider.tsx` and `PetDetail.tsx`). Every time their states change the components are re-rendered so that a new request is done. By using `useMemo` we memorize the values retrieved and the performance would be improved.
- [ ] [UDEMY] FILTROS. Filtrar por kind, y por alguna cosa más. Los filtros hay que aprender a hacerlos! Have a look to the ReadMe file https://github.com/typicode/json-server#filter
- [ ] [UDEMY] Lanzarlo con GitHub pages (sección 7 en Udemy React)
- [ ] [UDEMY] Implementar Redux y useReducer
- [ ] Stash: Ejemplo sobre diccionarios. Usarlos cuando venga la ocasión
- [ ] Hamburguesa para las opciones del navbar cuando se hace tamaño móvil
- [ ] Check Audit/Lighthouse
- [X] Pagination
- [X] the absence of adapters for the API data model highlights an issue with flexibility and scalability, potentially making future development and maintenance more difficult. This also raises concerns about compatibility with different data sources or changes in the API structure. ESTO ES SIMPLEMENTE METER UN ARCHIVO ADAPTADOR PARA TIPIFICAR LAS RESPUESTAS DE LA API. ES ALGO SIMILAR A LO QUE HAY HECHO EN LA CARPETA TYPES/INDEX
- [X] Alias for the imports (See Readme)
- [X] Stash: sobre el package y cómo cambiar el puerto para servir la app en package.json
- [X] Hacerlo responsivo. Métodos:
    - [X] https://www.lambdatest.com/lt-browser -> Navegador LT Browser
    - [X] https://developer.chrome.com/docs/lighthouse/overview/ -> DevTools / Lighthouse
    - [X] responsively.app
- [X] Persistir el sorting (avoid refreshing) y con él el estado
- [X] Arreglar la clase activa en el navBar
- [X] Sustituir Bootstrap por Tailwind. Meter Tailwind en un proyecto Vite (# [Oficial doco:'](https://tailwindcss.com/docs/guides/vite)


