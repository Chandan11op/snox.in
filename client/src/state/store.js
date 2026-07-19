import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import globalReducer from './index';

export const store = configureStore({
    reducer: {
        global: globalReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(api.middleware),
});

export default store;