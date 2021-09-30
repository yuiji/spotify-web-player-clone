import { NavLink, useLocation } from 'react-router-dom'
import styles from 'assets/styles/navigation.module.scss'
import {
  HomeIcon,
  HomeIconActive,
  SearchIcon,
  SearchIconActive,
  CollectionIcon,
  CollectionIconActive,
} from 'assets/icons/icons'

const Navigation = () => {
  const location = useLocation()

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            exact
            to='/'
            activeClassName={styles.active}>
            <span>{location.pathname === '/' ? <HomeIconActive /> : <HomeIcon />}</span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/search'
            activeClassName={styles.active}>
            <span>
              {location.pathname === '/search' ? <SearchIconActive /> : <SearchIcon />}
            </span>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/collection/playlists'
            activeClassName={styles.active}>
            <span>
              {location.pathname === '/collection/playlists' ? <CollectionIconActive /> : <CollectionIcon />}
            </span>
            Your Library
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
