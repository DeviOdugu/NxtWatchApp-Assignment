import styled from 'styled-components'
import Loader from 'react-loader-spinner'

export const GamingContainer = styled.div`
  background-color: ${props => props.bgColor};
`
export const GamingContainerDiv = styled.div`
  display: flex;
`
export const GamingCard = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  width: 80vw;
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
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 20px;
`
export const GamingHeading = styled.h1`
  font-size: 20px;
  padding-top: 15px;
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
export const GamingVideosLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 76vh;
  overflow: auto;
  scrollbar-width: none;
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
