import styled from 'styled-components'

export const SaveVideoDiv = styled.div`
  display: flex;
`
export const SymbolDiv = styled.div`
  color: red;
  background-color: black;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-left: 40px;
  margin-right: 20px;
`
export const SavedVideoHeading = styled.h1`
  font-size: 22px;
  padding-top: 15px;
`
export const SavedVideoList = styled.ul`
  overflow: hidden;
  overflow: auto;
  scrollbar-width: none;
  flex-wrap: wrap;
`
export const SaveVideoContainer = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  display: flex;
  flex-direction: column;
  width: 80vw;
  @media screen and (max-width: 576px) {
    width: 70vw;
  }
  height: 92vh;
`
export const NoSavedVideos = styled.div`
  text-align: center;
  padding-top: 120px;
  height: 50vh;
`
