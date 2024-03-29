import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.svg';
import styles from './sidebar.module.scss';

import Navigation from './components/Navigation';
import Menu from './components/Menu';
import Playlists from './components/Playlists';

const Sidebar = () => {
  const [size, setSize] = useState();
  const [isMouseDown, setIsMouseDown] = useState(false);

  const downHandler = () => setIsMouseDown(true);

  useEffect(() => {
    if (!isMouseDown) return;

    const moveHandler = e => {
      setSize(e.clientX);
    };

    const upHandler = () => {
      setIsMouseDown(false);
    };

    document.addEventListener('mousemove', moveHandler);
    document.addEventListener('mouseup', upHandler);

    return () => {
      document.removeEventListener('mousemove', moveHandler);
      document.removeEventListener('mouseup', upHandler);
    };
  });

  return (
    <div className={styles.sidebar} style={{ width: `${size}px` }}>
      <div className={styles.wrapper}>
        {
          <Link to='/' className={styles.logo}>
            <img src={logo} alt='logo' />
          </Link>
        }

        <Navigation />
        <Menu />
        <Playlists />
      </div>
      <div
        className={`${styles.resizebar} ${isMouseDown ? styles.active : ''}`}
        onMouseDown={downHandler}></div>
    </div>
  );
};

export default Sidebar;
