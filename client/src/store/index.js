import { configureStore } from '@reduxjs/toolkit'

import authSlice from 'store/auth-slice'
import userSlice from 'store/user-slice'
import profileSlice from 'store/profile-slice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    profile: profileSlice
  }
})

export default store