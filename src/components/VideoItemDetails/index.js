import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoContext from '../../context/VideoContext'
import {
  ReactPlayerVideo,
  Failure,
  FailureDesc,
  FailureDes,
  RetryButton,
  TryAgain,
  Progress,
  VideoContainer,
  VideoCard,
  VideoTitle,
  VideoViews,
  VideoPublished,
  VideoProfileImage,
  ChannelSubscribersCount,
  VideoDiv,
  Like,
  DisLike,
  Save,
  LikeText,
  DisLikeText,
  SaveText,
  VideoDot,
  Description,
  ChannelName,
} from './styledComponents'

const videosApiStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetailsList: [],
    videosApiUrlStatus: videosApiStatus.initial,
    isLike: false,
    isDisLike: false,
  }

  componentDidMount() {
    this.getVideoDetailsData()
  }

  getVideoDetailsData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    this.setState({videosApiUrlStatus: videosApiStatus.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videoItemDetailsApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedVideoDetailsData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        videoDetailsList: updatedVideoDetailsData,
        videosApiUrlStatus: videosApiStatus.success,
      })
    } else {
      this.setState({videosApiUrlStatus: videosApiStatus.failure})
    }
  }

  onClickLike = () => {
    const {isLike} = this.state
    this.setState({isLike: !isLike, isDisLike: false})
  }

  onClickDisLike = () => {
    const {isDisLike} = this.state
    this.setState({isDisLike: !isDisLike, isLike: false})
  }

  successView = (savedVideo, savedVideosList) => {
    const {videoDetailsList, isLike, isDisLike} = this.state
    const {
      title,
      videoUrl,
      name,
      profileImageUrl,
      subscriberCount,
      viewCount,
      publishedAt,
      description,
    } = videoDetailsList
    const published =
      new Date().getFullYear() - new Date(publishedAt).getFullYear()

    // If savedVideosList array is empty then isSave is false otherwise isSave is true
    const isSave =
      savedVideosList.filter(eachId => eachId.id === videoDetailsList.id)
        .length !== 0
    console.log(isSave)

    const onClickSave = () => {
      savedVideo(videoDetailsList)
    }

    const likeColor = isLike ? '#3b82f6' : ''
    const dislikeColor = isDisLike ? '#3b82f6' : ''
    const saveText = isSave ? 'Saved' : 'Save'
    const saveColor = isSave ? '#3b82f6' : ''

    return (
      <div>
        <ReactPlayerVideo url={videoUrl} height="300px" />
        <VideoTitle>{title}</VideoTitle>
        <VideoDiv>
          <VideoContainer>
            <VideoViews>{viewCount} views</VideoViews>
            <VideoDot />
            <VideoPublished>{published} years ago</VideoPublished>
          </VideoContainer>
          <VideoContainer>
            <VideoContainer>
              <Like onClick={this.onClickLike} color={likeColor} />
              <LikeText color={likeColor} onClick={this.onClickLike}>
                Like
              </LikeText>
            </VideoContainer>
            <VideoContainer>
              <DisLike onClick={this.onClickDisLike} color={dislikeColor} />
              <DisLikeText color={dislikeColor} onClick={this.onClickDisLike}>
                Dislike
              </DisLikeText>
            </VideoContainer>
            <VideoContainer>
              <Save onClick={onClickSave} color={saveColor} />
              <SaveText color={saveColor}>{saveText}</SaveText>
            </VideoContainer>
          </VideoContainer>
        </VideoDiv>
        <hr />
        <VideoContainer>
          <VideoProfileImage
            src={profileImageUrl}
            alt={name}
            height="50px"
            width="50px"
          />
          <div>
            <ChannelName>{name}</ChannelName>
            <ChannelSubscribersCount>
              {subscriberCount} subscribers
            </ChannelSubscribersCount>
            <Description>{description}</Description>
          </div>
        </VideoContainer>
      </div>
    )
  }

  inProgressView = () => (
    <div className="loader-container" data-testid="loader">
      <Progress type="ThreeDots" height="25" width="25" />
    </div>
  )

  failureView = () => (
    <Failure>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure"
        height="200px"
        width="200px"
      />
      <FailureDesc>Oops! Something Went Wrong</FailureDesc>
      <FailureDes>
        We are having some trouble to complete Your request.
      </FailureDes>
      <TryAgain>Please try again.</TryAgain>
      <RetryButton type="button" onClick={() => this.getVideoDetailsData()}>
        Retry
      </RetryButton>
    </Failure>
  )

  getVideoDataResult = (savedVideo, savedVideosList) => {
    const {videosApiUrlStatus} = this.state

    switch (videosApiUrlStatus) {
      case videosApiStatus.success:
        return this.successView(savedVideo, savedVideosList)
      case videosApiStatus.failure:
        return this.failureView()
      case videosApiStatus.inProgress:
        return this.inProgressView()
      default:
        return null
    }
  }

  render() {
    return (
      <VideoContext.Consumer>
        {value => {
          const {savedVideo, savedVideosList, isDark} = value
          const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'
          const color = isDark ? '#f9f9f9' : '#0f0f0f'
          return (
            <div>
              <Header />
              <VideoContainer>
                <SideBar />
                <VideoCard bgColor={bgColor} color={color}>
                  {this.getVideoDataResult(savedVideo, savedVideosList)}
                </VideoCard>
              </VideoContainer>
            </div>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default VideoItemDetails
