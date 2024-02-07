import {Link} from 'react-router-dom'
import {
  VideosList,
  ThumbnailUrl,
  Title,
  Name,
  Views,
  Published,
  VideosDiv,
  Dot,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, name, title, viewCount, publishedAt} = videoDetails
  const published =
    new Date().getFullYear() - new Date(publishedAt).getFullYear()

  return (
    <VideosList>
      <VideosDiv>
        <div>
          <Link to={`/videos/${id}`}>
            <ThumbnailUrl src={thumbnailUrl} alt={title} />
          </Link>
        </div>
        <VideosDiv>
          <div>
            <Title>{title}</Title>
            <Name>{name}</Name>
            <VideosDiv>
              <Views>{viewCount} views</Views>
              <Dot />
              <Published>{published} years ago</Published>
            </VideosDiv>
          </div>
        </VideosDiv>
      </VideosDiv>
    </VideosList>
  )
}

export default VideoItem
