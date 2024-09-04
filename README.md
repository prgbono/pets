# Frontend Code Challenge

Fever's Code Challenge for Front End job applicants

## Fever Pets

Welcome to our awesome project, _Fever Pets! Together_, we are gonna build the best place for our pets to be, so we can show them to the world. Isn't it fantastic?
We are thrilled to start working with you and we would like you to perform a few tasks, but first let us introduce the Fever Pets® project.
Fever Pets will be the main place for our users to see data about pets. What pets you say? Well, ALL pets of course, we don't care about the owners, where those pets are based, or anything. In fact, we don't even have that information!

### What will Fever Pets® do on its first version?

1. It will have a home page that will list the pets returned by the list endpoint, with the name of the pet and it's basic traits, as well as the pet's thumbnail. This won't display the description inside the pet structure
2. Home page will allow to sort the pets based on the quantifiable criteria: weight, length, height, name, or kind.
3. There will be a detail page that will be accessible from the home page, by tapping on the cell/row for a particular pet
4. The detail page will display the photo of the pet in a bigger size, and all the data, including the description
5. Navigation back and forth between detail and home should be possible
6. If any kind of sorting is applied, and detail is opened, navigating to home should preserve this order.
7. There should be a button that gives us the "pet of the day" in the home page. For every calendar day there should be a favourite pet. The pet should not change during the navigation and will remain the same for the whole day.
   - Example: If the user clicks on the 'pet of the day button' at 3 pm the favourite pet is 'Bingo', and if the user clicks on the 'pet of the day button' at 8 pm the pet should still be 'Bingo'

That's basically our glorious Fever Pets® v1.0, and I'm sure you are already thrilled to start dealing with it!
In order for us to be able to see the progress, and give you feedback, we would ask for it to be done by making several PRs to the project, doing each PR after the previous one has been approved and merged:

- PR #1: Create the project basic structure, this is just the skeleton of the project for whichever framework you have chosen to use (Angular, Vue, or whichever you fancy using). This PR should not contain any logic related to Fever Pets®
- After that, create as many pull requests as you want for the desired features. As we cannot review the PRs on time, just merge them to development or master and continue your code test, no need to wait for us. Every decision made during the development, should be written either on the body of the pull request or on the README.md

### Technical details

In order to have Fever pets working, we already had our backend team working, and they are offering two endpoints you can consume:

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
- Fever Pets can have users in different countries

# My CONSIDERATIONS :)

# File structure

We have considered 3 ways of structuring:
![File structure](/file_structure.png)

1. First one is organised by type. You can see here all the components and custom hooks are in the same src/folder. This can work for small projects.
2. Second one is the one we have chosen for this project. It is pretty similar except that we are organising also by features, besides types. In that way, we add a new level in the folders matching each feature. For example, Fever Pets may have the folders `src/components/owners` and `src/hooks/owners`shortly.
3. Third one is the most scalable approach. This architecture practically screams us what the app is. Notice is organised by modules being each module like a microservice with its own components, hooks, services and so on. We can always jump from 2 to 3.

# [Commit 'Initial Commit (link)'](https://github.com/FeverCodeChallenge/Francisco_Rios/commit/90a374a5d2701a7892b89d6dd56186f674735cdd)

### Why ViteJS?

1. Instant Start: Fast development server with near-instant startup.
2. Faster HMR: Super fast Hot Module Replacement for quick updates.
3. Optimized Build: Uses esbuild for faster production builds.
4. Minimal Configuration: Easy setup with flexible configuration options.
5. Multi-Framework Support: Works with Vue, React, Svelte, and more.
6. Modern Technology: Leverages ES modules and modern browser features.
7. Lightweight: Reduced complexity and better performance compared to traditional bundlers like Webpack.

# [Commit 'Sorting' (link)](https://github.com/FeverCodeChallenge/Francisco_Rios/commit/040fefcd6b4564f031f805d4e2ebd4d773caac1d)

In the function `onSortOptionChange` of the file `Home.tsx` we have used the array method [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) to sort the pets. This wasn't our first choice because this method modify the original array of data. They were:

- [array.ToSorted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted). This method is equal to `sort` except that it returns a new array sorted (without modifying the original) so this was the best way to proceed. Why did,'t we use? This method is quite new and there is no guarantee it will work properly in all browsers and devices. Besides, for avoiding typo errors, we would need to extend the prototype in the types which we could but not with such a short time available.
- Create a second state. Discarded because it is not a good practice (we need to have in mind a render is done everytime a state changes)
- Clone the original array of data with [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone). This method provides a really deep clone, not only the first level but all of them.
  We finally did it by making a superficial clone of the original array of data. You can see that by using the spread operator in line 28 `[...pets].sort`

# [Commit 'Added router (link)'](https://github.com/FeverCodeChallenge/Francisco_Rios/commit/aa26aa29cf8df9be927b68f11d100b7850ef3eec)

- [React Router](https://reactrouter.com/en/main) is just one router that can be used. The reason why this has been chosen is because is the most extensively used.
- The route `<Route path="/*" element={<Navigate to="/" />} />` given in the file `AppRouter.tsx` is just to redirect all not valid routes to the main page.
- The instruction `return <Navigate to="" />` in file `PetDetail.tsx` is just for reaching a valid url in case that the pet doesn't exist (undefined).

# [Commit 'Added UI for PetDetails (link)'](https://github.com/FeverCodeChallenge/Francisco_Rios/commit/2d9b10e40ef4eb435e606908e8822d56c0fea070)

- We are using in the file `PetDetail.tsx` two ways of redirecting the user to another url, they are [Navigate](https://reactrouter.com/en/main/components/navigate#navigate) and [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate#usenavigate), both of them from react-router-dom library. Why is not enough with just one? This is because of the context where we are using them. While Navigate is a component used in JSX to automatically do the redirection when it is rendered, useNavigate is a hook used in the component's logic to make the redirection in response to events or actions.
- TODO: - We should use useMemo when fetching pets list and pet details. We are making request in the root of their components (`Home.tsx` and `PetDetail.tsx`). Every time their states change the components are re-rendered so that a new request is done. By using useMemo we memorize the values retrieved and the performance would be improved.

# [Commit 'Fetch data in context provider so that sorting persist (link)'](https://github.com/FeverCodeChallenge/Francisco_Rios/commit/82b78244e446587e7dacea8da686789c2ad609ac)

From this commit the way pets are sorted is persisted. This could have been done in 2 ways:

- By saving the sort in the url as a param. For that, we would have used [useSearchParams and query parameters](https://reactrouter.com/en/main/hooks/use-search-params#usesearchparams)
- By saving the sort in a context. In this case, we have chosen this option because:

  1. Context is in reac api itself.
  2. By using context we don't need to change the router, as it would be in case of query parameters.

  Besides, we've included the use of [useCallback](https://react.dev/reference/react/useCallback) in the file `PetProvider.tsx` for improving the performance and memorize the function that applies to `onSortOptionChange`. By using _useCallback_ we ensure that the function is not created in every render unless a change on its dependencies happens. It is also used in the custom hook `useFetch` and more files.

# [Commit 'Add i18n (link)'](https://github.com/FeverCodeChallenge/Francisco_Rios/commit/dc3628035e58de11d6b5927e9f194077de9e3cae)

We just did some translations mainly in the navbar. This implementation is just to show how it would be and check that it works.

# About styling and animations

Not being these issues the most important things in this test, we have decided to incorporate them by their CDN's (see links in file `/root/index.html`). I am aware Bootstrap is not the most motivating UI material :)

# About Responsiveness

This topic hasn't been even mentioned in the documentation so that we haven't had an eye on it. In case it would be needed we should go with media queries mostly, moreover some styling library and its responsiveness classes to make the work easier.
