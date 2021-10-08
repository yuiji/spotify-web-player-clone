import { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Sidebar from 'components/sidebar/sidebar'
import Content from 'components/content'
import Player from 'components/player'
import Login from 'views/login'
import useAuth from 'hooks/useAuth'

import { useDispatch } from 'react-redux'
import { getUser, getUsersPlaylists } from 'actions/user'

import styles from 'assets/styles/app.module.scss'

function App() {
  const dispatch = useDispatch()

  const authorizationCode = new URLSearchParams(window.location.search).get(
    'code'
  )
  const isAuth = useAuth(authorizationCode)

  useEffect(() => {
    if(isAuth) {
      dispatch(getUser())
      dispatch(getUsersPlaylists())
    }
  }, [dispatch, isAuth])

  
  return (
    <div className={styles.app}>
      {!isAuth ? (
        <Login />
      ) : (
        <Router>
          <div className={styles.main}>
            <Sidebar />
            <Content />
          </div>
          <Player />
        </Router>
      )}
    </div>
  )
}

export default App