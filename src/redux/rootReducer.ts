import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import finderReducer from "./finder/finderSlice";
import numberOfResultsReducer from "./numberOfResults/numberOfResultSlice";
import { pokemonApi } from "../api/pokemon/pokemonAPI";

// hot module replacement, instead of update full application state, it just update the neccessary reducer
export const rootReducers = combineReducers({
  counter: counterReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  finder: finderReducer,
  numberOfResults: numberOfResultsReducer,
});
