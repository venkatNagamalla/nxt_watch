import {useState} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import {RxCross2} from 'react-icons/rx'
import {IoMenu} from 'react-icons/io5'
import {LuLogOut} from 'react-icons/lu'
import Context from '../../context/Context'
import {
  WebsiteLogo,
  NavContainer,
  ThemeButton,
  MenuButton,
  NavCard,
  NavIconsContainer,
  Icon,
  IconsContainer,
  Button,
} from './styledComponents'

const Headers = props => {
  const [sideBar, setSideBar] = useState(false)

  const handleSideBar = () => setSideBar(prevState => !prevState)

  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('./login')
  }

  return (
    <Context.Consumer>
      {value => {
        const {isDarkMode, toggleTheme} = value
        return (
          <NavContainer>
            {isDarkMode ? (
              <WebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="website logo"
              />
            ) : (
              <WebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
              />
            )}
            <IconsContainer>
              <ThemeButton onClick={toggleTheme} type="button">
                {isDarkMode ? <FiSun /> : <FaMoon />}
              </ThemeButton>
              <MenuButton onClick={handleSideBar} type="button">
                {sideBar ? <RxCross2 /> : <IoMenu />}
              </MenuButton>
              <Button onClick={onLogout} type="button">
                <LuLogOut />
              </Button>
            </IconsContainer>
            <NavCard sideBar={sideBar}>
              <NavIconsContainer>
                <Icon>Home</Icon>
                <Icon>Home</Icon>
                <Icon>Home</Icon>
              </NavIconsContainer>
            </NavCard>
          </NavContainer>
        )
      }}
    </Context.Consumer>
  )
}

export default withRouter(Headers)
