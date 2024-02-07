import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import VideoContext from '../../context/VideoContext'
import {
  HeaderContainer,
  NavContainer,
  NavRight,
  NavLogo,
  MoonIcon,
  Profile,
  PopupContainer,
  LogoutButton,
  PopupText,
  PopupButtons,
  SunIcon,
} from './styledComponents'

const Header = props => (
  <VideoContext.Consumer>
    {value => {
      const {isDark, themeClicked} = value
      const backgroundColor = isDark ? '#181818' : '#f9f9f9'
      const logoUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const buttonOutline = isDark ? '#f9f9f9' : '#3b82f6'
      const buttonTextColor = isDark ? '#f9f9f9' : '#3b82f6'

      const onClickConfirmButton = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <HeaderContainer bgColor={backgroundColor}>
          <NavContainer bgColor={backgroundColor}>
            <NavLogo src={logoUrl} alt="nxt watch logo" />
            <NavRight>
              {isDark ? (
                <SunIcon onClick={() => themeClicked()} />
              ) : (
                <MoonIcon onClick={() => themeClicked()} />
              )}
              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <LogoutButton
                    type="button"
                    outline={buttonOutline}
                    color={buttonTextColor}
                  >
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <PopupContainer>
                    <PopupText>Are you sure, you want to logout?</PopupText>
                    <PopupButtons type="button" onClick={() => close()} outline>
                      Cancel
                    </PopupButtons>
                    <PopupButtons type="button" onClick={onClickConfirmButton}>
                      Confirm
                    </PopupButtons>
                  </PopupContainer>
                )}
              </Popup>
            </NavRight>
          </NavContainer>
        </HeaderContainer>
      )
    }}
  </VideoContext.Consumer>
)

export default withRouter(Header)
