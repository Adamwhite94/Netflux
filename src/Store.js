import { configureStore } from "@reduxjs/toolkit";
import { fetchMovies } from "./Services/GetMovies";
import { genreSlice } from './Reducers/GenreReducer';


const Store = configureStore({
  reducer: {
    [fetchMovies.reducerPath]: fetchMovies.reducer,
    genreSlice: genreSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchMovies.middleware),
});

export default Store