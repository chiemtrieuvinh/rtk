import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { rootReducers } from "./rootReducer";
import { pokemonApi } from "../api/pokemon/pokemonAPI";

export const store = configureStore({
  reducer: rootReducers,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// npm install --save-dev @types/webpack-env to use this feature && create a webpack.config file
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./rootReducer", () => store.replaceReducer(rootReducers));
}
