import { useSelector } from 'react-redux'
import { PlayerHeartIcon, PlayerComputerIcon } from 'assets/icons/icons'
import styles from 'assets/styles/components/song.module.scss'

const Song = () => {
  const { recentTrack } = useSelector(state => state.user)
  console.log(recentTrack)
  return (
    <div className={styles.song}>
      <img src={recentTrack.album ? recentTrack.album.images[0].url : null} alt='' />
      <div className={styles.info}>
        <span>{recentTrack.name}</span>
        <span>{recentTrack.artists ? recentTrack.artists[0].name : null}</span>
      </div>
      <PlayerHeartIcon />
      <PlayerComputerIcon />
    </div>
  )
}

export default Song
