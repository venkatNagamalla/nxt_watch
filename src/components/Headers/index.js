import {useState} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {ImFire} from 'react-icons/im'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import {RxCross2} from 'react-icons/rx'
import {IoMenu} from 'react-icons/io5'
import {LuLogOut} from 'react-icons/lu'
import Context from '../../context/Context'
import './index.css'

import {
  WebsiteLogo,
  NavContainer,
  ThemeButton,
  MenuButton,
  NavCard,
  NavIconsContainer,
  Item,
  IconsContainer,
  LogOutButton,
  DeskLogOutButton,
  Profile,
  SideLogo,
} from './styledComponents'

const navigationList = [
  {
    id: 1,
    name: 'Home',
    href: '/',
    icon: <AiFillHome />,
  },
  {
    id: 2,
    name: 'Trending',
    href: '/trending',
    icon: <ImFire />,
  },
]

const Headers = props => {
  const [sideBar, setSideBar] = useState(false)
  const [activeRoute, setActiveRoute] = useState(navigationList[0].id)

  const handleSideBar = () => setSideBar(prevState => !prevState)

  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('./login')
  }

  const linkItem = id => setActiveRoute(id)

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
              <LogOutButton onClick={onLogout} type="button">
                <LuLogOut />
              </LogOutButton>
              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <DeskLogOutButton type="button">Logout</DeskLogOutButton>
            </IconsContainer>
            <NavCard sideBar={sideBar}>
              {isDarkMode ? (
                <SideLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              ) : (
                <SideLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              )}
              <NavIconsContainer>
                {navigationList.map(eachIcon => {
                  let style = ''
                  let icon = ''
                  if (eachIcon.id === activeRoute) {
                    style = 'nav-link'
                    icon = 'nav-icon'
                  }

                  return (
                    <Link
                      onClick={() => linkItem(eachIcon.id)}
                      key={eachIcon.id}
                      to={eachIcon.href}
                    >
                      <Item className={style}>
                        <span className={icon}>{eachIcon.icon}</span>
                        {eachIcon.name}
                      </Item>
                    </Link>
                  )
                })}
              </NavIconsContainer>
            </NavCard>
          </NavContainer>
        )
      }}
    </Context.Consumer>
  )
}

export default withRouter(Headers)
