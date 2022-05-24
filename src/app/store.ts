import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter-slice'

// configureStore - wrapper around createStore
// configureStore automatically does the following:
//  - sets up the store with the right defaults
//  - turns on dev tools extension
//  - adds thunk middleware
//  - turns on development checks which catch stuff like accidental mutations

export const store = configureStore({
  // you can pass whether an entire reducer function here OR
  // you can pass an object with a bunch of reducers which are gonna be combined under the hood
  reducer: {
    counter: counterReducer,
  },
})

// here we export a type of the dispatch function so that we can use it later on in our app
export type AppDispatch = typeof store.dispatch
// hover over the RootState and see what it is, TS inferred what the exact type is
export type RootState = ReturnType<typeof store.getState>
