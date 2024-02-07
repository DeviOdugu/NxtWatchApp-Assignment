import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

export const VideosList = styled.li`
  list-style-type: none;
  padding-top: 30px;
  @media screen and (max-width: 576px) {
    padding-top: 15px;
  }
`
export const ThumbnailUrl = styled.img`
  height: 100px;
  width: 200px;
  @media screen and (max-width: 576px) {
    height: 100px;
    width: 100px;
  }
  margin-right: 10px;
`
export const VideosDiv = styled.div`
  display: flex;
`
export const Title = styled.p`
  font-size: 13px;
  @media screen and (max-width: 576px) {
    font-size: 9px;
  }
`
export const Name = styled.p`
  font-size: 11px;
  @media screen and (max-width: 576px) {
    font-size: 9px;
  }
`
export const Views = styled.p`
  font-size: 11px;
  padding-right: 5px;
  @media screen and (max-width: 576px) {
    font-size: 8px;
  }
`
export const Dot = styled(BsDot)`
  margin-top: 11px;
  @media screen and (max-width: 576px) {
    font-size: 8px;
  }
`
export const Published = styled.p`
  font-size: 11px;
  @media screen and (max-width: 576px) {
    font-size: 8px;
  }
`
