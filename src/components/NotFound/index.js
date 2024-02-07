// import {Link} from 'react'
import VideoContext from '../../context/VideoContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {NotFoundCard, NotFoundDiv, NotFoundImage} from './styledComponents'

const NotFound = () => (
  <VideoContext.Consumer>
    {value => {
      const {isDark} = value
      const notFoundUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      const bgColor = isDark ? '#0f0f0f' : '#ebebeb'
      const color = isDark ? '#f9f9f9' : '#0f0f0f'
      return (
        <>
          <Header />
          <NotFoundDiv>
            <SideBar />
            <NotFoundCard bgColor={bgColor} color={color}>
              <NotFoundImage src={notFoundUrl} alt="not found" />
              <h1>Page Not Found</h1>
              <p>We are sorry, the page you requested could not be found</p>
            </NotFoundCard>
          </NotFoundDiv>
        </>
      )
    }}
  </VideoContext.Consumer>
)

export default NotFound
