import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => props.bgColor};
  border: solid ${props => props.bgColor} 2px;
  margin: 20px;
  padding: 40px;
`
export const FormCard = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: ${props => props.bgCardColor};
  border: solid ${props => props.bgCardColor} 2px;
  color: ${props => props.color}
  font-family: 'Roboto';
`
export const LogoAlign = styled.div`
  text-align: center;
`
export const LoginLogo = styled.img`
  height: 30px;
  width: 130px;
  margin-bottom: 40px;
`
export const UserNameLabel = styled.label`
  color: ${props => props.color};
  font-size: 10px;
  font-weight: 500;
  padding-bottom: 5px;
`
export const UserNameInput = styled.input`
  color: #94a3b8;
  font-size: 10px;
  font-weight: 500;
  padding: 7px;
  margin-bottom: 15px;
  outline: none;
`
export const PasswordLabel = styled.label`
  color: ${props => props.color};
  font-size: 10px;
  font-weight: 500;
  padding-bottom: 5px;
`
export const PasswordInput = styled.input`
  color: #94a3b8;
  font-size: 10px;
  font-weight: 500;
  padding: 7px;
  margin-bottom: 15px;
  outline: none;
`
export const Check = styled.div`
  display: flex;
`
export const CheckBox = styled.input`
  margin-right: 5px;
  outline: none;
`
export const CheckboxLabel = styled.label`
  color: ${props => props.color};
  font-size: 15px;
  font-weight: 500;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 13px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  margin-top: 30px;
  font-weight: 500;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 15px;
  font-weight: 500;
`
