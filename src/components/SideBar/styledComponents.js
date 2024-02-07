import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'
import {MdWhatshot} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {Link} from 'react-router-dom'

export const NavLists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 92vh;
  width: 20vw;
  @media screen and (max-width: 576px) {
    width: 30vw;
  }
  padding-top: 40px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`
export const List = styled.div`
  display: flex;
  margin-bottom: 10px;
  color: ${props => props.color};
  background-color: ${props => (props.active ? props.liBg : 'transparent')};
`
export const List1 = styled.div`
  display: flex;
  margin-bottom: 10px;
  color: ${props => props.color};
  background-color: ${props => (props.active1 ? props.liBg : 'transparent')};
`
export const List2 = styled.div`
  display: flex;
  margin-bottom: 10px;
  color: ${props => props.color};
  background-color: ${props => (props.active2 ? props.liBg : 'transparent')};
`
export const List3 = styled.div`
  display: flex;
  margin-bottom: 10px;
  color: ${props => props.color};
  background-color: ${props => (props.active3 ? props.liBg : 'transparent')};
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color};
`
export const HomeImage = styled(AiFillHome)`
  color: ${props => (props.active ? '#ff0000' : ' #909090')};
  margin-top: 10px;
  margin-right: 20px;
  margin-left: 5px;
`
export const HomeText = styled.p`
  font-size: 12px;
  font-weight: ${props => (props.active ? '900' : '600')};
  color: ${props => props.color};
`
export const TrendingImage = styled(MdWhatshot)`
  margin-top: 12px;
  margin-right: 20px;
  margin-left: 5px;
  color: ${props => (props.active1 ? '#ff0000' : ' #909090')};
`

export const TrendingText = styled.p`
  font-size: 12px;
  font-weight: ${props => (props.active1 ? '900' : '600')};
  color: ${props => props.color};
`
export const GamingImage = styled(SiYoutubegaming)`
  margin-top: 12px;
  margin-right: 20px;
  margin-left: 5px;
  color: ${props => (props.active2 ? '#ff0000' : ' #909090')};
`

export const GamingText = styled.p`
  font-size: 12px;
  font-weight: ${props => (props.active2 ? '900' : '600')};
  color: ${props => props.color};
`
export const SavedVideosImage = styled(BiListPlus)`
  margin-top: 12px;
  margin-right: 20px;
  margin-left: 5px;
  color: ${props => (props.active3 ? '#ff0000' : '#909090')};
`

export const SaveVideosText = styled.p`
  font-size: 12px;
  font-weight: ${props => (props.active3 ? '900' : '600')};
  color: ${props => props.color};
`
export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`
export const Contact = styled.h1`
  color: #181818;
  font-size: 15px;
  color: ${props => props.color};
`
export const ContactLogos = styled.div`
  display: flex;
`
export const FacebookLogo = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 5px;
`
export const TwitterLogo = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 5px;
`
export const LinkedInLogo = styled.img`
  height: 25px;
  width: 25px;
`
export const Desc = styled.p`
  font-size: 13px;
  color: #181818;
  color: ${props => props.color};
`
