import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: {},
    playlists: [],
    tops: {
      artists: [],
      tracks: [],
    },
    featured: [],
    recentTrack: {}
  },
  reducers: {
    replaceUser(state, action) {
      state.info = action.payload
    },
    replacePlaylists(state, action) {
      state.playlists = action.payload.items
    },
    replaceTops(state, action) {
      const type = action.payload.type
      state.tops[type] = action.payload.data.items
    },
    replaceFeatured(state, action) {
      state.featured = action.payload.playlists.items
    },
    replaceRecentTrack(state, action){
      state.recentTrack = action.payload.items[0].track
    }
  },
})

export const userActions = userSlice.actions
export default userSlice.reducer
