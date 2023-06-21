import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const prepHeaders = (headers) => {
  headers.set('X-RapidAPI-Key', '19db6e4c9amshada909db64b6ff9p1cbf5djsn6f1436cfbb65');
  headers.set('X-RapidAPI-Host', 'moviesminidatabase.p.rapidapi.com');
  return headers;
}
export const fetchMovies = createApi({
  reducerPath: "fetchMovies",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://moviesminidatabase.p.rapidapi.com/movie/",
    prepareHeaders: prepHeaders
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getMoviesByGenre: builder.query({
      query: (genre) => `byGen/${genre}`,
    }),
  }),
});

export const { useGetMoviesByGenreQuery } = fetchMovies
