import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {vansApi} from '@/vansApi.ts';

const rootReducer = combineReducers({
  [vansApi.reducerPath]: vansApi.reducer
});

export const store= configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(vansApi.middleware)
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch:()=>AppDispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;


