import styled from 'styled-components'
import Loader from 'react-loader-spinner'

export const HomeContainer = styled.div`
  background-color: ${props => props.color};
`
export const HomeContainerDiv = styled.div`
  display: flex;
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding-left: 30px;
  width: 80vw;
  @media screen and (max-width: 576px) {
    width: 70vw;
  }
  height: 35vh;
  padding-top: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
`
export const BannerLogo = styled.img`
  height: 40px;
  width: 130px;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 30px;
  }
  margin-top: 10px;
`

export const BannerText = styled.p`
  font-size: 15px;
  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
  padding-bottom: 20px;
`
export const BannerButton = styled.button`
  color: #383838;
  border: solid #383838 2px;
  background-color: transparent;
  font-weight: 600;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
`
export const HomeCard = styled.div`
  background-color: ${props => props.bgColor};
  padding: 10px;
  color: ${props => props.color};
  width: 80vw;
  height: ${props => (props.showBanner ? '43vh' : '78vh')};
  @media screen and (max-width: 576px) {
    width: 70vw;
  }
`
export const Search = styled.div`
  display: flex;
  padding-left: 35px;
  padding-top: 10px;
`

export const SearchInput = styled.input`
  outline: none;
  border: solid ${props => props.border} 2px;
  padding-left: 10px;
  background-color: ${props => props.searchBgColor};
  color: ${props => props.color};
`

export const SearchIcon = styled.div`
  padding-left: 10px;
  padding-top: 5px;
  background-color: transparent;
  border: solid ${props => props.border} 2px;
  border-left: none;
  padding-right: 10px;
`
export const HomeVideosLists = styled.ul`
  overflow: auto;
  scrollbar-width: none;
  flex-wrap: wrap;
  height: ${props => (props.showBanner ? '43vh' : '78vh')};
`
export const NoVideos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoVideosImage = styled.img`
  height: 200px;
  width: 300px;
  margin-top: ${props => (props.showBanner ? '15px' : '100px')};
  @media screen and (max-width: 576px) {
    height: 170px;
    width: 200px;
  }
`
export const NoVideosDesc = styled.p`
  font-size: 12px;
  font-weight: 700;
`
export const NoVideosDes = styled.p`
  font-size: 10px;
`
export const RetryButton = styled.button`
  font-size: 7px;
  background-color: #4f46e5;
  color: #ffffff;
  padding: 7px;
  padding-left: 15px;
  padding-right: 15px;
  border: none;
  border-radius: 4px;
`
export const Progress = styled(Loader)`
  text-align: center;
  color: #00306e;
  margin-top: 200px;
  margin-bottom: 100px;
`
export const Failure = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`
export const FailureImage = styled.img`
  height: ${props => (props.showBanner ? '150px' : '200px')};
  width: ${props => (props.showBanner ? '150px' : '170px')};
  margin-top: ${props => (props.showBanner ? '15px' : '100px')};
`
export const FailureDesc = styled.p`
  font-size: 13px;
  font-weight: 700;
`
export const FailureDes = styled.p`
  font-size: 11px;
`
export const TryAgain = styled.p`
  font-size: 11px;
`
