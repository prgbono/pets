## TODO:

- [ ] Hay dos stash: sobre el package (puerto) y sobre diccionarios. Aplicarlos.
- [ ] We should use useMemo when fetching pets list and pet details. We are making request in the root of their components (`PetProvider.tsx` and `PetDetail.tsx`). Every time their states change the components are re-rendered so that a new request is done. By using `useMemo` we memorize the values retrieved and the performance would be improved.
- [ ] Lanzarlo con GitHub pages (sección 7 en Udemy React)
- [ ] Persistir el sorting (avoid refreshing) y con él el estado
- [ ] Paginación. (See approach in Readme file)
- [ ] Filtrar por kind, y por alguna cosa más. Los filtros hay que aprender a hacerlos!
- [ ] Hacerlo responsivo
- [ ] Ver TODOs del código y hacer un TODO del proyecto (añadido al gitIgnore)
- [ ] <NotFound /> component for being re-usable and add it to AppRouter file
- [ ] Alias for the imports (See Readme)
