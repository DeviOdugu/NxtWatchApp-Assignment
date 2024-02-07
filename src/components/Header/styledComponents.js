import styled from 'styled-components'
import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'

export const HeaderContainer = styled.div`
  background-color: ${props => props.bgColor};
`
export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  padding: 15px;
`
export const NavRight = styled.div`
  display: flex;
`
export const NavLogo = styled.img`
  height: 30px;
  width: 130px;
  margin-left: 20px;
`
export const MoonIcon = styled(BsMoon)`
  height: 30px;
  width: 30px;
  margin-right: 20px;
`
export const SunIcon = styled(FiSun)`
  height: 20px;
  width: 20px;
  margin-top: 5px;
  margin-right: 20px;
  color: #f9f9f9;
`
export const Profile = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 20px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border: solid ${props => props.outline} 1px;
  color: ${props => props.color};
  margin-right: 20px;
  font-size: 10px;
  border-radius: 2px;
  padding-left: 15px;
  padding-right: 15px;
`
export const PopupContainer = styled.div`
  background-color: #212121;
  color: #ffffff;
  padding: 5px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 6px;
  text-align: center;
`
export const PopupText = styled.p`
  font-size: 10px;
  padding-bottom: 10px;
`
export const PopupButtons = styled.button`
  font-size: 8px;
  padding: 5px;
  border-radius: 2px;
  color: ${props => (props.outline ? '#94a3b8' : '#ffffff')};
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  margin-right: ${props => (props.outline ? '20px' : '')};
  border: solid ${props => (props.outline ? '#94a3b8' : '')}
    ${props => (props.outline ? '1px' : '0px')};
`
