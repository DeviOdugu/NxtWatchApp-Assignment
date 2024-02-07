import {Component} from 'react'
import Cookies from 'js-cookie'
import {MdWhatshot} from 'react-icons/md'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import VideoContext from '../../context/VideoContext'
import {
  TrendingContainer,
  TrendingContainerDiv,
  TrendingCard,
  SymbolDiv,
  TrendingVideosLists,
  Failure,
  FailureDesc,
  FailureDes,
  RetryButton,
  TryAgain,
  Progress,
  TrendingHeading,
} from './styledComponents'

const trendingVideosApiStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingVideosApiUrlStatus: trendingVideosApiStatus.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideosData()
  }

  getTrendingVideosData = async () => {
    const jwtToken = Cookies.get('jwt_token')

    this.setState({
      trendingVideosApiUrlStatus: trendingVideosApiStatus.inProgress,
    })

    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingVideosApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedTrendingVideosData = data.videos.map(eachData => ({
        id: eachData.id,
        title: eachData.title,
        thumbnailUrl: eachData.thumbnail_url,
        name: eachData.channel.name,
        profileImageUrl: eachData.channel.profile_image_url,
        viewCount: eachData.view_count,
        publishedAt: eachData.published_at,
      }))
      this.setState({
        trendingVideosList: updatedTrendingVideosData,
        trendingVideosApiUrlStatus: trendingVideosApiStatus.success,
      })
    } else {
      this.setState({
        trendingVideosApiUrlStatus: trendingVideosApiStatus.failure,
      })
    }
  }

  inProgressView = () => (
    <div className="loader-container" data-testid="loader">
      <Progress type="ThreeDots" height="25" width="25" />
    </div>
  )

  failureView = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDark} = value
        const failureImageUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <Failure>
            <img
              src={failureImageUrl}
              alt="failure"
              height="200px"
              width="200px"
            />
            <FailureDesc>Oops! Something Went Wrong</FailureDesc>
            <FailureDes>
              We are having some trouble to complete Your request.
            </FailureDes>
            <TryAgain>Please try again.</TryAgain>
            <RetryButton
              type="button"
              onClick={() => this.getTrendingVideosData()}
            >
              Retry
            </RetryButton>
          </Failure>
        )
      }}
    </VideoContext.Consumer>
  )

  successView = () => {
    const {trendingVideosList} = this.state

    return (
      <>
        <TrendingVideosLists>
          {trendingVideosList.map(eachTrendingVideo => (
            <VideoItem
              key={eachTrendingVideo.id}
              videoDetails={eachTrendingVideo}
            />
          ))}
        </TrendingVideosLists>
      </>
    )
  }

  getTrendingVideosDataResult = () => {
    const {trendingVideosApiUrlStatus} = this.state

    switch (trendingVideosApiUrlStatus) {
      case trendingVideosApiStatus.success:
        return this.successView()
      case trendingVideosApiStatus.failure:
        return this.failureView()
      case trendingVideosApiStatus.inProgress:
        return this.inProgressView()
      default:
        return null
    }
  }

  render() {
    return (
      <VideoContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColor = isDark ? '#0f0f0f' : '#ebebeb'
          const color = isDark ? '#f9f9f9' : '#0f0f0f'
          return (
            <TrendingContainer bgColor={bgColor}>
              <Header />
              <TrendingContainerDiv>
                <SideBar />
                <TrendingCard bgColor={bgColor} color={color}>
                  <TrendingContainerDiv>
                    <SymbolDiv>
                      <MdWhatshot />
                    </SymbolDiv>
                    <TrendingHeading>Trending</TrendingHeading>
                  </TrendingContainerDiv>
                  {this.getTrendingVideosDataResult()}
                </TrendingCard>
              </TrendingContainerDiv>
            </TrendingContainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Trending
