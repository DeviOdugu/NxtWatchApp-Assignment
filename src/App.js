import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import VideoContext from './context/VideoContext'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, activeListItem: 'home', savedVideosList: []}

  themeClicked = () => {
    const {isDark} = this.state
    this.setState({isDark: !isDark})
  }

  clickListItem = activeListItem => {
    this.setState({activeListItem})
  }

  savedVideo = video => {
    const {savedVideosList} = this.state
    // Check if the video is already exist in the savedVideosList
    const isVideoExist =
      savedVideosList.filter(eachVideo => eachVideo.id === video.id).length !==
      0
    // If the video is already exist, remove it from the savedVideosList
    if (isVideoExist) {
      const updateSavedList = savedVideosList.filter(
        eachVideo => eachVideo.id !== video.id,
      )
      this.setState({savedVideosList: updateSavedList})
    }
    // If the video is not exist, add it to the savedVideosList
    else {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, video],
      }))
    }
  }

  render() {
    const {isDark, activeListItem, savedVideosList} = this.state
    // console.log(savedVideosList)

    return (
      <VideoContext.Provider
        value={{
          isDark,
          activeListItem,
          clickListItem: this.clickListItem,
          themeClicked: this.themeClicked,
          savedVideo: this.savedVideo,
          savedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </VideoContext.Provider>
    )
  }
}

export default App
