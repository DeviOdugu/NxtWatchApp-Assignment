import {MdPlaylistAdd} from 'react-icons/md'
import VideoContext from '../../context/VideoContext'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import {
  SaveVideoDiv,
  SaveVideoContainer,
  SymbolDiv,
  SavedVideoHeading,
  SavedVideoList,
  NoSavedVideos,
} from './styledComponents'

const SavedVideos = () => (
  <VideoContext.Consumer>
    {value => {
      const {savedVideosList, isDark} = value
      const bgColor = isDark ? '#0f0f0f' : '#ebebeb'
      const color = isDark ? '#f9f9f9' : '#0f0f0f'

      return (
        <div>
          <Header />
          <SaveVideoDiv>
            <SideBar />
            <SaveVideoContainer bgColor={bgColor} color={color}>
              {savedVideosList.length !== 0 && (
                <SaveVideoDiv>
                  <SymbolDiv>
                    <MdPlaylistAdd />
                  </SymbolDiv>
                  <SavedVideoHeading>Saved Videos</SavedVideoHeading>
                </SaveVideoDiv>
              )}

              {savedVideosList.length === 0 && (
                <NoSavedVideos>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                    height="200px"
                    width="250px"
                  />
                  <h1>No saved videos found</h1>
                  <p>You can save your videos while watching them</p>
                </NoSavedVideos>
              )}
              <SavedVideoList>
                {savedVideosList.map(eachSavedVideo => (
                  <VideoItem
                    key={eachSavedVideo.id}
                    videoDetails={eachSavedVideo}
                  />
                ))}
              </SavedVideoList>
            </SaveVideoContainer>
          </SaveVideoDiv>
        </div>
      )
    }}
  </VideoContext.Consumer>
)

export default SavedVideos
