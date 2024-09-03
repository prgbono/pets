# CONSIDERATIONS

# [Commit 'Initial Commit'](https://github.com/FeverCodeChallenge/Francisco_Rios/commit/90a374a5d2701a7892b89d6dd56186f674735cdd)

### Why ViteJS?

1. Instant Start: Fast development server with near-instant startup. 2. Faster HMR: Super fast Hot Module Replacement for quick updates. 3. Optimized Build: Uses esbuild for faster production builds. 4. Minimal Configuration: Easy setup with flexible configuration options. 5. Multi-Framework Support: Works with Vue, React, Svelte, and more. 6. Modern Technology: Leverages ES modules and modern browser features. 7. Lightweight: Reduced complexity and better performance compared to traditional bundlers like Webpack.

# [Commit 'Sorting']()

In the function `handleSortOptionChange` of the file `Home.tsx` we have used the array method [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) to sort the pets. This wasn't our first choice because this method modify the original array of data. They were:

- [array.ToSorted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted). This method is equal to `sort` except that it returns a new array sorted (without modifying the original) so this was the best way to proceed. Why did,'t we use? This method is quite new and there is no guarantee it will work properly in all browsers and devices. Besides, for avoiding typo errors, we would need to extend the prototype in the types which we could but not with such a short time available.
- Create a second state. Discarded because it is not a good practice (we need to have in mind a render is done everytime a state changes)
- Clone the original array of data with [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone). This method provides a really deep clone, not only the first level but all of them.
  We finally did it by making a superficial clone of the original array of data. You can see that by using the spread operator in line 28 `[...pets].sort`

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname
    }
  }
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules
  }
})
```
