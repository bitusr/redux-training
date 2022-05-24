// - react-redux has hooks, but these hooks don't know anything about the state of our app or dispatch capabilities of
// our app
// - so we need to create our own version for react-redux hooks that will know our app's state and dispatch

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';

// we're gonna use these hooks everywhere in our app
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
