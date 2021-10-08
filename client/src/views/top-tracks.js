import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersTops } from 'actions/user'
import Track from 'components/track'

import styles from 'assets/styles/container.module.scss'


const Tracks = () => {
  const { tops } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersTops('tracks'))
  }, [dispatch])

  console.log(tops.tracks)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your most listened tracks</h1>
      {tops.tracks.map((track, index) => <Track key={index} track={track} index={index} />)}
    </div>
  )
}

export default Tracks