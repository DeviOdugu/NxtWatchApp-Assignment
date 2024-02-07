import {Link} from 'react-router-dom'
import {
  VideosList,
  ThumbnailUrl,
  ProfileImageUrl,
  Title,
  Name,
  Views,
  Published,
  VideosDiv,
  Dot,
} from './styledComponents'

const HomeItem = props => {
  const {videoDetails} = props
  const {
    id,
    thumbnailUrl,
    channel: {profileImageUrl, name},
    title,
    viewCount,
    publishedAt,
  } = videoDetails
  const published =
    new Date().getFullYear() - new Date(publishedAt).getFullYear()

  return (
    <VideosList>
      <Link to={`/videos/${id}`}>
        <ThumbnailUrl src={thumbnailUrl} alt={title} />
      </Link>
      <VideosDiv>
        <div>
          <ProfileImageUrl src={profileImageUrl} alt={name} />
        </div>
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
    </VideosList>
  )
}

export default HomeItem
