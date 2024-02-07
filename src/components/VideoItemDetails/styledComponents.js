import styled from 'styled-components'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {AiOutlineLike} from 'react-icons/ai'
import {BiListPlus, BiDislike} from 'react-icons/bi'
import {BsDot} from 'react-icons/bs'

export const VideoContainer = styled.div`
  display: flex;
`
export const ReactPlayerVideo = styled(ReactPlayer)`
  height: 280px !important;
  @media screen and (min-width: 632px) {
    width: 700px !important;
  }
  @media screen and (min-width: 1027px) {
    width: 1100px !important;
  }
  @media screen and (max-width: 576px) {
    height: 150px !important;
    width: 250px !important;
  }
`
export const VideoCard = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  padding: 20px;
  width: 80vw;
  @media screen and (max-width: 576px) {
    width: 70vw;
  }
`
export const VideoTitle = styled.h1`
  font-size: 15px;
  padding-top: 20px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`
export const VideoViews = styled.p`
  font-size: 12px;
  padding-right: 5px;
  @media screen and (max-width: 576px) {
    font-size: 8px;
  }
`
export const VideoDot = styled(BsDot)`
  margin-top: 13px;
  @media screen and (max-width: 576px) {
    font-size: 8px;
  }
`
export const VideoPublished = styled.p`
  font-size: 12px;
  @media screen and (max-width: 576px) {
    font-size: 8px;
  }
`
export const VideoDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Like = styled(AiOutlineLike)`
  height: 20px;
  width: 20px;
  margin-top: 17px;
  margin-right: 5px;
  @media screen and (max-width: 576px) {
    height: 10px;
    width: 10px;
    margin-top: 8px;
  }
`
export const DisLike = styled(BiDislike)`
  height: 20px;
  width: 20px;
  margin-top: 17px;
  margin-right: 5px;
  @media screen and (max-width: 576px) {
    height: 10px;
    width: 10px;
    margin-top: 8px;
  }
`
export const Save = styled(BiListPlus)`
  height: 20px;
  width: 20px;
  margin-top: 17px;
  margin-right: 5px;
  @media screen and (max-width: 576px) {
    height: 10px;
    width: 10px;
    margin-top: 8px;
  }
`
export const LikeText = styled.p`
  padding-right: 20px;
  color: ${props => props.color || ''};
  @media screen and (max-width: 576px) {
    font-size: 8px;
  }
`
export const DisLikeText = styled.p`
  padding-right: 20px;
  @media screen and (max-width: 576px) {
    font-size: 8px;
  }
  color: ${props => props.color || ''};
`
export const SaveText = styled.p`
  padding-right: 70px;
  @media screen and (max-width: 576px) {
    font-size: 8px;
    padding-right: 20px;
  }
  color: ${props => props.color || ''};
`
export const VideoProfileImage = styled.img`
  margin-top: 17px;
  margin-right: 20px;
  @media screen and (max-width: 576px) {
    font-size: 8px;
  }
`
export const ChannelName = styled.p`
  font-size: 13px;
`
export const ChannelSubscribersCount = styled.p`
  font-size: 10px;
  padding-bottom: 5px;
`
export const Description = styled.p`
  font-size: 13px;
  padding-right: 20px;
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
  padding-top: 50px;
`
export const FailureDesc = styled.p`
  font-size: 13px;
  font-weight: 700;
  padding-top: 20px;
`
export const FailureDes = styled.p`
  font-size: 11px;
`
export const TryAgain = styled.p`
  font-size: 11px;
  padding-bottom: 10px;
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
  margin-bottom: 200px;
`
