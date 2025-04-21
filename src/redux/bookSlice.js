import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create async thunks
export const fetchBooks = createAsyncThunk("fetchBooks", async () => {
  const response = await axios.get(
    "https://openlibrary.org/search.json?q=javascript"
  );
  return response.data;
});

const initialState = {
  books: [],
  loading: false,
  error: null,
  bookDetails: {},
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        (state.loading = false), (state.books = action.payload.docs);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});

export default bookSlice.reducer;
