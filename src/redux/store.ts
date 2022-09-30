import { combineReducers } from 'redux';
import type { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import type { Action } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type ThunkAppDispatch = ThunkDispatch<AppState, void, Action>;

export const useAppThunkDispatch = (): ThunkAppDispatch => useDispatch<ThunkAppDispatch>();
