## Pets

Welcome to our awesome project, _Pets! Together_, we are gonna build the best place for our pets to be, so we can show them to the world. Isn't it fantastic?
We are thrilled to start working with you and we would like you to perform a few tasks, but first let us introduce the Pets® project.
Pets will be the main place for our users to see data about pets. What pets you say? Well, ALL pets of course, we don't care about the owners, where those pets are based, or anything. In fact, we don't even have that information!

### What will Pets® do on its first version?

1. It will have a home page that will list the pets returned by the list endpoint, with the name of the pet and it's basic traits, as well as the pet's thumbnail. This won't display the description inside the pet structure
2. Home page will allow to sort the pets based on the quantifiable criteria: weight, length, height, name, or kind.
3. There will be a detail page that will be accessible from the home page, by tapping on the cell/row for a particular pet
4. The detail page will display the photo of the pet in a bigger size, and all the data, including the description
5. Navigation back and forth between detail and home should be possible
6. If any kind of sorting is applied, and detail is opened, navigating to home should preserve this order.
7. There should be a button that gives us the "pet of the day" in the home page. For every calendar day there should be a favourite pet. The pet should not change during the navigation and will remain the same for the whole day.
   - Example: If the user clicks on the 'pet of the day button' at 3 pm the favourite pet is 'Bingo', and if the user clicks on the 'pet of the day button' at 8 pm the pet should still be 'Bingo'

That's basically our glorious Pets® v1.0, and I'm sure you are already thrilled to start dealing with it!

### Technical details

In order to have Pets working, we already had our backend team working, and they are offering two endpoints you can consume:

- `https://my-json-server.typicode.com/Feverup/fever_pets_data/pets` To fetch the list of pets on the server
- `https://my-json-server.typicode.com/Feverup/fever_pets_data/pets/<pet_id>` To fetch the details about a particular pet with id <pet_id>
- Here you have some interesting links about the API:
  - [Pagination](https://github.com/typicode/json-server#paginate)
  - [Sorting](https://github.com/typicode/json-server#sort)
  - [Filtering](https://github.com/typicode/json-server#filter)

The details endpoint will return a Pet object, with the following structure:

- `id` Int the pet's unique id
- `name` String The pet's name
- `kind` String The pet's kind (dog or cat on the first version)
- `weight` Int The pet's weight, in grams
- `height` Int The pet's height in centimeters
- `length` Int The pet's length, in centimeters
- `photo_url` String The pet's picture url
- `description` String A small text about the pet
- `number_of_lives` Int between 1 and 7, only for Cats
- ...and more in the future

The pets have a `health` assigned, `weight / (height * length)`. The health has three tiers:

- `unhealthy` below 2 or over 5
- `healthy` between 3 and 5
- `very healthy` between 2 and 3
- If the pet is a cat and the number of lives is 1, the pet is always `unhealthy`
- Take into account that more pets are coming and they could have different health calculations

### Considerations

- More pets and pets' type can be added in the future
- We could have millions of pets registered in the near future and we need to take into account performance
- Pets can have users in different countries

# My considerations :)

# File structure

We have considered 3 ways of structuring:
![File structure](/src/assets/file_structure.png)

1. First one is organised by type. You can see here all the components and custom hooks are in the same folder `src`. This can work for small / medium projects.
2. Second one is the one we have chosen for this project. It is pretty similar to previous one except that we are organising items also by features, besides types. In that way, we add a new level in the folders matching each feature. For example, Pets may have the folders `src/components/owners` and `src/hooks/owners` in a shortly future.
3. Third one is the most scalable approach. This architecture practically screams us what the app is and do. Notice is organised by modules being each module like a microservice with its own components, hooks, services and so on. We can always jump from 2 to 3.

# [Commit 'build: 🌱 Create the project basic structure with ViteJS (link)'](https://github.com/prgbono/pets/commit/5ef273ea1ad917dedd58b7b68697149581e2fd8a)

### Why ViteJS over Create React App or even Next?

Next is discarded because we are not needding good SEO in this test.
In case of Create React App, we think Vite is quite more slightly and fast. The reasons:

1. Instant Start: Fast development server with near-instant startup.
2. Faster HMR: Super fast Hot Module Replacement for quick updates.
3. Optimized Build: Uses esbuild for faster production builds.
4. Minimal Configuration: Easy setup with flexible configuration options.
5. Multi-Framework Support: Works with Vue, React, Svelte, and more.
6. Modern Technology: Leverages ES modules and modern browser features.
7. Lightweight: Reduced complexity and better performance compared to traditional bundlers like Webpack.

# [Commit 'Sorting' (link)](https://github.com/prgbono/pets/commit/040fefcd6b4564f031f805d4e2ebd4d773caac1d)

In the function `onSortOptionChange` of the file `PetProvider.tsx` we have used the array method [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) to sort the pets. This wasn't our first choice because this method modify the original array of data. They were:

- [array.ToSorted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted). This method is equal to `sort` except that it returns a new array sorted (without modifying the original) so this was the best way to proceed. Why did,'t we use? This method is quite new and there is no guarantee it will work properly in all browsers and devices. Besides, for avoiding typo errors, we would need to extend the prototype in the types which we could but not with such a short time available.
- Create a second state. Discarded because it is not a good practice (we need to have in mind a render is done everytime a state changes)
- Clone the original array of data with [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone). This method provides a really deep clone, not only the first level but all of them.
  We finally did it by making a superficial clone of the original array of data. You can see that by using the spread operator in line 20 `[...pets].sort`

# [Commit 'Added router (link)'](https://github.com/prgbono/pets/commit/aa26aa29cf8df9be927b68f11d100b7850ef3eec)

- [React Router](https://reactrouter.com/en/main) is just one router that can be used. The reason why this has been chosen is because is the most extensively used.
- The route `<Route path="/*" element={<Navigate to="/" />} />` given in the file `AppRouter.tsx` is just to redirect all not valid routes to the main page.
- The instruction `return <Navigate to="" />` in file `PetDetail.tsx` is just for reaching a valid url in case that the pet doesn't exist (undefined).

# [Commit 'Added UI for PetDetails (link)'](https://github.com/prgbono/pets/commit/2d9b10e40ef4eb435e606908e8822d56c0fea070)

- We are using in the file `PetDetail.tsx` two ways of redirecting the user to another url, they are [Navigate](https://reactrouter.com/en/main/components/navigate#navigate) and [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate#usenavigate), both of them from react-router-dom library. Why is not enough with just one? This is because of the context where we are using them. While Navigate is a component used in JSX to automatically do the redirection when it is rendered, useNavigate is a hook used in the component's logic to make the redirection in response to events or actions.

# [Commit 'Fetch data in context provider so that sorting persist (link)'](https://github.com/prgbono/pets/commit/82b78244e446587e7dacea8da686789c2ad609ac)

From this commit the way pets are sorted is persisted. This could have been done in 2 ways:

- By saving the sort in the url as a param. For that, we would have used [useSearchParams and query parameters](https://reactrouter.com/en/main/hooks/use-search-params#usesearchparams)
- By saving the sort in a context. In this case, we have chosen this option because:

  1. Context is in react api itself.
  2. By using context we don't need to change the router, as it would be in case of query parameters.

  Besides, we've included the use of [useCallback](https://react.dev/reference/react/useCallback) in the file `PetProvider.tsx` (and others) to improve the performance and memorize the function that applies to `onSortOptionChange`. By using _useCallback_ we ensure that the function is not created in every render unless a change on its dependencies happens. It is also used in the custom hook `useFetch` and `Home` file.

# [Commit 'Add i18n (link)'](https://github.com/prgbono/pets/commit/dc3628035e58de11d6b5927e9f194077de9e3cae)

We just did some translations mainly in the navbar. This implementation is just to show how it would be and check that it works.
TODO: - Translations files are incomplete.

# [Commit 'Add some tests (link)'](https://github.com/prgbono/pets/commit/5382e86ec03007a30ff1853317fdabf40d8063da)

Tests are a must. There is no doubt of that in order to keep the code maintainable and scalable. We have added some test for some of the more importants issues under my opinion. These are:

- useFetch
- Context (Home)
- AppRouter
- Types (simple but important test)
- Function calls
  There's never enough tests. We should add more and tests more intensively the files and features that are already tested.

Regarding the location of the tests files, we normally make a new folder called **tests** at the same level of the folder **src** and try to do the folder `tests` as a mirror of `src` being the files in `test` only test files. In this case, I just dropped the file test next to the file what is being tested.

# [Commit 'Persist state when refreshing - sessionStorage'](https://github.com/prgbono/pets/commit/575dbe94d0aba96bd95a45694851ad016b01d7a7)
To persist the sort done by the user when refreshing the browser we have choosen `sessionStarage` over `localStorage` because of `sessionStorage` is less aggresive. I mean, `sessionStarage` is only available in the tab the use is using, it is removed automatically when browser or tab is closed or browser session finished, while `localStorage` must be removed manually.

# [Commit 'Add config for better organisation of imports by setting aliases'](https://github.com/prgbono/pets/commit/a334b4c1f1d1e3f823300b643fc6e09de1698ff2)
Modify config files to have these kind of imports `import { useFetch } from '@/hooks/useFetch'` instead of `import { useFetch } from '../../hooks/useFetch'`

# [Commit 'Replace Bootstrap classes with Tailwind ones'] (https://github.com/prgbono/pets/commit/a400adab104644e265a01270ccb57d48dbd40337)
Changed UI styles. From CDN Bootstrap to Tailwind CSS.

# About the pagination.
- TODO: - I haven't had the time to implement the pagination but I'd like to comment how I would do that:

1. Manage pagination state in the `<Home />` component
   We must keep the pagination state in the state of the `<Home />` component. This includes current page, number of items per page and total number of pages
   ```
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10)
    const [totalPages, setTotalPages] = useState<number>(1)
   ```
   In our call to the api, we should include url params `_page`and `_per_page`
   We also need to know the index of the first and the last item fetched.
2. Button for `Next Page` and `Previous Page`
3. It is a good idea a component just for pagination which would receive props like `itemsPerPage`, `toatlItems` and `pageNumber`
4. It is needed to handle errors and loading time.
5. Optionally, we can address optimization issues with lazy loading (server) and manage several ways to present the items (for instance infinitive scrolling)
