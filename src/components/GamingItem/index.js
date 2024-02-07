import {Link} from 'react-router-dom'
import {GamingVideosList, ThumbnailUrl, Title, Views} from './styledComponents'

const GamingItem = props => {
  const {gamingVideoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = gamingVideoDetails

  return (
    <GamingVideosList>
      <Link to={`/videos/${id}`}>
        <ThumbnailUrl src={thumbnailUrl} alt={title} />
      </Link>
      <Title>{title}</Title>
      <Views>{viewCount} Watching Worldwide</Views>
    </GamingVideosList>
  )
}

export default GamingItem
