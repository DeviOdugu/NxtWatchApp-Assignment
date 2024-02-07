import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SideBar from '../SideBar'
import GamingItem from '../GamingItem'
import VideoContext from '../../context/VideoContext'
import {
  GamingContainer,
  GamingContainerDiv,
  GamingCard,
  SymbolDiv,
  GamingVideosLists,
  Failure,
  FailureDesc,
  FailureDes,
  RetryButton,
  TryAgain,
  Progress,
  GamingHeading,
} from './styledComponents'

const gamingVideosApiStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingVideosApiUrlStatus: gamingVideosApiStatus.initial,
    gamingVideosList: [],
  }

  componentDidMount() {
    this.getGamingVideosData()
  }

  getGamingVideosData = async () => {
    const jwtToken = Cookies.get('jwt_token')

    this.setState({
      gamingVideosApiUrlStatus: gamingVideosApiStatus.inProgress,
    })

    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingVideosApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedGamingVideosData = data.videos.map(eachData => ({
        id: eachData.id,
        title: eachData.title,
        thumbnailUrl: eachData.thumbnail_url,
        viewCount: eachData.view_count,
      }))
      this.setState({
        gamingVideosList: updatedGamingVideosData,
        gamingVideosApiUrlStatus: gamingVideosApiStatus.success,
      })
    } else {
      this.setState({
        gamingVideosApiUrlStatus: gamingVideosApiStatus.failure,
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
              onClick={() => this.getGamingVideosData()}
            >
              Retry
            </RetryButton>
          </Failure>
        )
      }}
    </VideoContext.Consumer>
  )

  successView = () => {
    const {gamingVideosList} = this.state

    return (
      <>
        <GamingVideosLists>
          {gamingVideosList.map(eachGamingVideo => (
            <GamingItem
              key={eachGamingVideo.id}
              gamingVideoDetails={eachGamingVideo}
            />
          ))}
        </GamingVideosLists>
      </>
    )
  }

  getGamingVideosDataResult = () => {
    const {gamingVideosApiUrlStatus} = this.state

    switch (gamingVideosApiUrlStatus) {
      case gamingVideosApiStatus.success:
        return this.successView()
      case gamingVideosApiStatus.failure:
        return this.failureView()
      case gamingVideosApiStatus.inProgress:
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
            <GamingContainer bgColor={bgColor}>
              <Header />
              <GamingContainerDiv>
                <SideBar />
                <GamingCard bgColor={bgColor} color={color}>
                  <GamingContainerDiv>
                    <SymbolDiv>
                      <SiYoutubegaming />
                    </SymbolDiv>
                    <GamingHeading>Gaming</GamingHeading>
                  </GamingContainerDiv>
                  {this.getGamingVideosDataResult()}
                </GamingCard>
              </GamingContainerDiv>
            </GamingContainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Gaming
