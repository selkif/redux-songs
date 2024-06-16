import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { produce } from "immer";

const songSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchSong: (state) => {
      state.isLoading = true;
    },
    addSong: (state, action) => {
      // Use produce from immer to update the state immutably
      return produce(state, (draftState) => {
        draftState.songs.push({
          ...action.payload,
          id: uuidv4(),
        });
      });
    },
    updateSong: (state, action) => {
      // Use produce from immer to update the state immutably
      return produce(state, (draftState) => {
        const index = draftState.songs.findIndex(
          (song) => song.id === action.payload.id
        );
        if (index !== -1) {
          draftState.songs[index] = action.payload;
        }
      });
    },
    deleteSong: (state, action) => {
      // Use produce from immer to update the state immutably
      return produce(state, (draftState) => {
        draftState.songs = draftState.songs.filter(
          (song) => song.id !== action.payload
        );
      });
    },
    fetchsongSuccess: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchsongFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSong,
  addSong,
  updateSong,
  deleteSong,
  fetchsongSuccess,
  fetchsongFailure,
} = songSlice.actions;

export default songSlice.reducer;
