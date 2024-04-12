import {useState} from 'react'
import Cookies from 'js-cookie'
import {
  MainContainer,
  LoginCard,
  Logo,
  FormContainer,
  InputContainer,
  Label,
  Input,
  ShowPassContainer,
  CheckBox,
  ShowPassText,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

import Context from '../../context/Context'

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const renderUserName = () => (
    <InputContainer>
      <Label htmlFor="username">USERNAME</Label>
      <Input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
        type="text"
        id="username"
      />
    </InputContainer>
  )

  const renderPassword = () => (
    <InputContainer>
      <Label htmlFor="password">PASSWORD</Label>
      <Input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type={showPassword ? 'text' : 'password'}
      />
    </InputContainer>
  )

  const onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = props
    history.replace('/')
  }

  const onLoginFailure = error => {
    setIsError(true)
    setErrorMsg(error)
  }

  const verifyUserDetails = async userData => {
    const loginApi = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(loginApi, options)
    const data = await response.json()

    if (response.ok) {
      onLoginSuccess(data.jwt_token)
    } else {
      onLoginFailure(data.error_msg)
    }
  }

  const onSubmit = e => {
    e.preventDefault()
    const userData = {
      username,
      password,
    }
    verifyUserDetails(userData)
  }

  const renderShowPassword = () => (
    <ShowPassContainer>
      <CheckBox
        onChange={() => setShowPassword(prev => !prev)}
        id="checkbox"
        type="checkbox"
      />
      <ShowPassText htmlFor="checkbox">Show Password</ShowPassText>
    </ShowPassContainer>
  )

  const renderFormItems = () => (
    <FormContainer onSubmit={onSubmit}>
      {renderUserName()}
      {renderPassword()}
      {renderShowPassword()}
      <LoginButton type="submit">Login</LoginButton>
      {isError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
    </FormContainer>
  )

  return (
    <MainContainer>
      <LoginCard>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        {renderFormItems()}
      </LoginCard>
    </MainContainer>
  )
}

export default Login
