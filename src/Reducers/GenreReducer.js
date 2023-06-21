import { createSlice } from "@reduxjs/toolkit"
let initialState = {
    genre: {text: ''}
  }
  
  // Use the initialState as a default value
  export const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
      genreSelected: (state, action) => {
        const text = action.payload;
        
        state.genre.text = text;
      
      },
    },
  });
  export const {genreSelected} = genreSlice.actions;
  export default genreSlice
