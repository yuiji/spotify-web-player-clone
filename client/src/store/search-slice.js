import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    albums: [],
    artists: [],
    tracks: [],
  },
  reducers: {
    replaceSearch(state, action) {
      state.albums = action.payload.albums.items
      state.artists = action.payload.artists.items
      state.tracks = action.payload.tracks.items
    },
    removeSearch(state, action) {
      state.albums = []
      state.artists = []
      state.tracks = []
    }
  },
})

export const searchActions = searchSlice.actions
export default searchSlice.reducer
