import React from 'react'

const VideoContext = React.createContext({
  isDark: false,
  themeClicked: () => {},
  activeListItem: 'home',
  clickListItem: () => {},
  savedVideosList: [],
  savedVideo: () => {},
})

export default VideoContext
