import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import allReducer from './reducers' // automatically looks for an index.js
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

// A store is an immutable object tree in Redux. A store is a state container which holds the application's state.
export const store = configureStore({
  reducer: allReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.
    <Provider store={store}> 
      <App />
    </Provider>
);

