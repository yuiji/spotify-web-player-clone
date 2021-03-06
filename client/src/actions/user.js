import * as api from 'api'
import { userActions } from 'store/user-slice'

export const getUser = () => async dispatch => {
  const accessToken = sessionStorage.getItem('access_token')

  try {
    const { data } = await api.fecthUser(accessToken)
    dispatch(userActions.replaceUser(data))
  } catch (error) {
    console.log(error.message)
  }
}

export const getUsersPlaylists = () => async dispatch => {
  const accessToken = sessionStorage.getItem('access_token')

  try {
    const { data } = await api.fetchUsersPlaylists(accessToken) 
    dispatch(userActions.replacePlaylists(data))
  } catch (error) {
    console.log(error)
  }
}

export const getUsersTops = (type) => async dispatch => {
  const accessToken = sessionStorage.getItem('access_token')

  try {
    const { data } = await api.fetchUsersTops(accessToken, type) 
    dispatch(userActions.replaceTops({data, type: type}))
  } catch (error) {
    console.log(error)
  }
}

export const getFeatured = () => async dispatch => {
  const accessToken = sessionStorage.getItem('access_token')

  try {
    const { data } = await api.fetchFeatured(accessToken) 
    dispatch(userActions.replaceFeatured(data))
  } catch (error) {
    console.log(error)
  }
}

export const getRecentTrack = () => async dispatch => {
  const accessToken = sessionStorage.getItem('access_token')

  try {
    const { data } = await api.fetchRecentTrack(accessToken)
    dispatch(userActions.replaceRecentTrack(data))
  } catch (error) {
    console.log(error)
  }
}

