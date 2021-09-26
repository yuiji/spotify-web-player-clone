import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from 'assets/styles/nav.module.scss'
import {
  HomeIcon,
  HomeIconActive,
  SearchIcon,
  SearchIconActive,
  CollectionIcon,
  CollectionIconActive,
} from 'assets/icons/icons'

const Nav = () => {
  const [activeIcon, setActiveIcon] = useState(0)

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            exact
            to='/'
            activeClassName={styles.active}
            isActive={(match, location) => {
              match && setActiveIcon(0)
              return match
            }}>
            <span>{activeIcon === 0 ? <HomeIconActive /> : <HomeIcon />}</span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/search'
            activeClassName={styles.active}
            isActive={(match, location) => {
              match && setActiveIcon(1)
              return match
            }}>
            <span>
              {activeIcon === 1 ? <SearchIconActive /> : <SearchIcon />}
            </span>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/collection/playlists'
            activeClassName={styles.active}
            isActive={(match, location) => {
              match && setActiveIcon(2)
              return match
            }}>
            <span>
              {activeIcon === 2 ? <CollectionIconActive /> : <CollectionIcon />}
            </span>
            Your Library
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
