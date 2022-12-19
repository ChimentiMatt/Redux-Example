# Redux example for React

### This example shows a counter in global state or "store" being used on the base level of the app as well as a component. 
#### In order for Redux to make a global  state the index.js has a "store" and wraps the entire app in the store with "Provider"/
#### In the src there are directories for actions and reducers. Actions tell what kind of action the reducers should perform. Reducers take the state and the action and return a newly updated state.

#### In the reducers directory, there is an index.js. As your app grows more complex, you'll want to split your reducing function into separate functions, each managing independent parts of the state.

```
cd Redux-Example
```

```
npm install @reduxjs/toolkit
```

```
npm start
```



