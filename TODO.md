## TODO:

- [x] Stash: sobre el package y cómo cambiar el puerto
- [X] Hacerlo responsivo. Métodos:
    - [X] https://www.lambdatest.com/lt-browser -> Navegador LT Browser
    - [X] https://developer.chrome.com/docs/lighthouse/overview/ -> DevTools / Lighthouse
    - [X] responsively.app
- [ ] We should use useMemo when fetching pets list and pet details. We are making request in the root of their components (`PetProvider.tsx` and `PetDetail.tsx`). Every time their states change the components are re-rendered so that a new request is done. By using `useMemo` we memorize the values retrieved and the performance would be improved.
- [ ] Lanzarlo con GitHub pages (sección 7 en Udemy React)
- [ ] Persistir el sorting (avoid refreshing) y con él el estado
- [ ] Paginación. (See approach in Readme file)
- [ ] Filtrar por kind, y por alguna cosa más. Los filtros hay que aprender a hacerlos!
- [ ] <NotFound /> component for being re-usable and add it to AppRouter file
- [ ] Alias for the imports (See Readme)
- [ ] Stash: sobre diccionarios.
- [ ] Sustituir Bootstrap por Tailwind
- [ ] Que pase los tests tras las modificaciones
