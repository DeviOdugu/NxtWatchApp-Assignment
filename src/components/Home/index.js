import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoClose} from 'react-icons/io5'
import {BiSearchAlt2} from 'react-icons/bi'
import Header from '../Header'
import SideBar from '../SideBar'
import HomeItem from '../HomeItem'
import VideoContext from '../../context/VideoContext'
import {
  Details,
  Banner,
  BannerLogo,
  BannerText,
  BannerButton,
  HomeContainerDiv,
  SearchInput,
  HomeCard,
  SearchIcon,
  Search,
  HomeVideosLists,
  NoVideos,
  NoVideosDesc,
  NoVideosDes,
  RetryButton,
  Progress,
  Failure,
  FailureDesc,
  FailureDes,
  TryAgain,
  HomeContainer,
  NoVideosImage,
  FailureImage,
} from './styledComponents'

const homeVideosApiStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    homeVideosApiUrlStatus: homeVideosApiStatus.initial,
    homeVideosList: [],
  }

  componentDidMount() {
    this.getHomeVideosData()
  }

  onClickCloseIcon = () => {
    this.setState({showBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getHomeVideosData = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')

    this.setState({homeVideosApiUrlStatus: homeVideosApiStatus.inProgress})

    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(homeVideosApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedHomeVideosData = data.videos.map(eachData => ({
        id: eachData.id,
        title: eachData.title,
        thumbnailUrl: eachData.thumbnail_url,
        channel: {
          name: eachData.channel.name,
          profileImageUrl: eachData.channel.profile_image_url,
        },
        viewCount: eachData.view_count,
        publishedAt: eachData.published_at,
      }))
      this.setState({
        homeVideosList: updatedHomeVideosData,
        homeVideosApiUrlStatus: homeVideosApiStatus.success,
      })
    } else {
      this.setState({homeVideosApiUrlStatus: homeVideosApiStatus.failure})
    }
  }

  inProgressView = () => (
    <div className="loader-container" data-testid="loader">
      <Progress type="ThreeDots" height="25" width="25" />
    </div>
  )

  failureView = () => {
    const {showBanner} = this.state
    return (
      <VideoContext.Consumer>
        {value => {
          const {isDark} = value
          const failureImageUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

          return (
            <Failure>
              <FailureImage
                src={failureImageUrl}
                alt="failure"
                showBanner={showBanner}
              />
              <FailureDesc>Oops! Something Went Wrong</FailureDesc>
              <FailureDes>
                We are having some trouble to complete Your request.
              </FailureDes>
              <TryAgain>Please try again.</TryAgain>
              <RetryButton
                type="button"
                onClick={() => this.getHomeVideosData()}
              >
                Retry
              </RetryButton>
            </Failure>
          )
        }}
      </VideoContext.Consumer>
    )
  }

  successView = () => {
    const {searchInput, homeVideosList, showBanner} = this.state
    const searchResults = homeVideosList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <>
        {searchResults.length === 0 && (
          <NoVideos>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
              showBanner={showBanner}
            />
            <NoVideosDesc>No Search results found</NoVideosDesc>
            <NoVideosDes>
              Try different key words or remove search filter
            </NoVideosDes>
            <RetryButton type="button">Retry</RetryButton>
          </NoVideos>
        )}
        <HomeVideosLists showBanner={showBanner}>
          {searchResults.map(eachHomeVideo => (
            <HomeItem key={eachHomeVideo.id} videoDetails={eachHomeVideo} />
          ))}
        </HomeVideosLists>
      </>
    )
  }

  getHomeVideosDataResult = () => {
    const {homeVideosApiUrlStatus} = this.state

    switch (homeVideosApiUrlStatus) {
      case homeVideosApiStatus.success:
        return this.successView()
      case homeVideosApiStatus.failure:
        return this.failureView()
      case homeVideosApiStatus.inProgress:
        return this.inProgressView()
      default:
        return null
    }
  }

  render() {
    const {showBanner, searchInput} = this.state

    return (
      <VideoContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColor = isDark ? '#0f0f0f' : '#ebebeb'
          const color = isDark ? '#ffffff' : '#0f0f0f'
          const searchBorder = isDark ? '#475569' : '#cbd5e1'
          const searchBg = isDark ? '#0f0f0f' : '#cbd5e1'
          const searchInputBgColor = isDark ? '#0f0f0f' : '#ffffff'
          return (
            <HomeContainer color={bgColor}>
              <Header />
              <HomeContainerDiv>
                <SideBar />
                <Details>
                  <div>
                    {showBanner && (
                      <Banner>
                        <div>
                          <BannerLogo
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="nxt watch logo"
                          />
                          <BannerText>
                            Buy Nxt Watch Premium prepaid plans with UPI
                          </BannerText>
                          <BannerButton>GET IT NOW</BannerButton>
                        </div>
                        <IoClose onClick={this.onClickCloseIcon} />
                      </Banner>
                    )}
                  </div>
                  <HomeCard
                    showBanner={showBanner}
                    bgColor={bgColor}
                    color={color}
                  >
                    <div>
                      <Search color={searchBg} border={searchBorder}>
                        <SearchInput
                          type="search"
                          placeholder="Search"
                          value={searchInput}
                          onChange={this.onChangeSearchInput}
                          border={searchBorder}
                          searchBgColor={searchInputBgColor}
                          color={color}
                        />
                        <SearchIcon
                          onClick={() => this.getHomeVideosData()}
                          border={searchBorder}
                        >
                          <BiSearchAlt2 />
                        </SearchIcon>
                      </Search>
                    </div>
                    {this.getHomeVideosDataResult()}
                  </HomeCard>
                </Details>
              </HomeContainerDiv>
            </HomeContainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Home
