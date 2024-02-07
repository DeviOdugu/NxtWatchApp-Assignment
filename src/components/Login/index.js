import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import VideoContext from '../../context/VideoContext'
import {
  LoginContainer,
  FormCard,
  LoginLogo,
  UserNameLabel,
  UserNameInput,
  PasswordLabel,
  PasswordInput,
  Check,
  CheckBox,
  CheckboxLabel,
  LoginButton,
  LogoAlign,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  onChangeUserName = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onClickCheckBox = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const UserDetails = {
      username,
      password,
    }

    const loginApiUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(UserDetails),
    }

    const response = await fetch(loginApiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.setState({
        errorMsg: data.error_msg,
        showErrorMsg: true,
      })
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      errorMsg,
      showErrorMsg,
    } = this.state
    const passWord = showPassword ? 'text' : 'password'

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <VideoContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColor = isDark ? '#212121' : '#f1f5f9'
          const bgCardColor = isDark ? '#0f0f0f' : '#ebebeb'
          const color = isDark ? '#f9f9f9' : '#0f0f0f'
          const logoUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginContainer bgColor={bgColor}>
              <FormCard bgCardColor={bgCardColor} onSubmit={this.onSubmitForm}>
                <LogoAlign>
                  <LoginLogo src={logoUrl} alt="nxt watch logo" />
                </LogoAlign>
                <UserNameLabel htmlFor="username" color={color}>
                  USERNAME
                </UserNameLabel>
                <UserNameInput
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.onChangeUserName}
                />
                <PasswordLabel htmlFor="password" color={color}>
                  PASSWORD
                </PasswordLabel>
                <PasswordInput
                  type={passWord}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.onChangePassword}
                />
                <Check>
                  <CheckBox
                    type="checkbox"
                    id="checkbox"
                    onClick={this.onClickCheckBox}
                  />
                  <CheckboxLabel htmlFor="checkbox" color={color}>
                    Show Password
                  </CheckboxLabel>
                </Check>
                <LoginButton type="submit"> Login </LoginButton>
                {showErrorMsg && <ErrorMsg> * {errorMsg} </ErrorMsg>}
              </FormCard>
            </LoginContainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Login
