import VideoContext from '../../context/VideoContext'
import {
  NavLists,
  List,
  List1,
  List2,
  List3,
  HomeImage,
  HomeText,
  TrendingImage,
  TrendingText,
  GamingImage,
  GamingText,
  SavedVideosImage,
  SaveVideosText,
  Contact,
  ContactDetails,
  FacebookLogo,
  TwitterLogo,
  LinkedInLogo,
  Desc,
  ContactLogos,
  NavLink,
} from './styledComponents'

const SideBar = () => (
  <VideoContext.Consumer>
    {value => {
      const {isDark, activeListItem, clickListItem} = value
      const bgColor = isDark ? '#181818' : '#f9f9f9'
      const color = isDark ? '#f9f9f9' : '#181818'
      const listBg = isDark ? '#383838' : '#cbd5e1'
      const activeHome = activeListItem === 'home'
      const activeTrending = activeListItem === 'trending'
      const activeGaming = activeListItem === 'gaming'
      const activeSavedVideo = activeListItem === 'savedVideo'

      return (
        <NavLists bgColor={bgColor}>
          <div>
            <NavLink to="/">
              <List
                onClick={() => clickListItem('home')}
                liBg={listBg}
                active={activeHome}
              >
                <HomeImage active={activeHome} />
                <HomeText color={color} active={activeHome}>
                  Home
                </HomeText>
              </List>
            </NavLink>
            <NavLink to="/trending">
              <List1
                onClick={() => clickListItem('trending')}
                active1={activeTrending}
                liBg={listBg}
              >
                <TrendingImage active1={activeTrending} />
                <TrendingText color={color} active1={activeTrending}>
                  Trending
                </TrendingText>
              </List1>
            </NavLink>
            <NavLink to="/gaming">
              <List2
                onClick={() => clickListItem('gaming')}
                active2={activeGaming}
                liBg={listBg}
              >
                <GamingImage active2={activeGaming} />
                <GamingText color={color} active2={activeGaming}>
                  Gaming
                </GamingText>
              </List2>
            </NavLink>
            <NavLink to="/saved-videos">
              <List3
                onClick={() => clickListItem('savedVideo')}
                active3={activeSavedVideo}
                liBg={listBg}
              >
                <SavedVideosImage active3={activeSavedVideo} />
                <SaveVideosText color={color} active3={activeSavedVideo}>
                  Saved videos
                </SaveVideosText>
              </List3>
            </NavLink>
          </div>
          <ContactDetails>
            <Contact color={color}>CONTACT US</Contact>
            <ContactLogos>
              <FacebookLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <TwitterLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <LinkedInLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactLogos>
            <Desc color={color}>
              Enjoy! Now to see your channels and recommendations!
            </Desc>
          </ContactDetails>
        </NavLists>
      )
    }}
  </VideoContext.Consumer>
)

export default SideBar
