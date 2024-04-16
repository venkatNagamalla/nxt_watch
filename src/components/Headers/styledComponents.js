import styled from 'styled-components'

export const WebsiteLogo = styled.img`
  width: 100px;
`

export const NavContainer = styled.nav`
  border: 1px solid #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 23px 10px 23px;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  height: 30px;
  width: 30px;
  cursor: pointer;
  border: 1px solid #000;
  font-size: 20px;
`

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  height: 30px;
  width: 30px;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid #000;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavSection = styled.div`
  border: 1px solid #000;
`
export const NavCard = styled.div`
  height: 100vh;
  transition: all 0.3s ease-in-out;
  width: 40%;
  border: 1px solid #000;
  position: fixed;
  top: 0px;
  padding-top: 20px;
  left: ${({sideBar}) => (sideBar ? '0px' : '-40%')};
  background-color: #fff;
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 200px;
    left: 0px;
    top: 52px;
  }
`

export const NavIconsContainer = styled.ul`
  border: 1px solid #000;
  list-style: none;
`

export const Item = styled.li`
  border: 1px solid #000;
  padding: 10px;
`

export const IconsContainer = styled.div`
  border: 1px solid #000;
  width: 100px;
  display: flex;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`
export const LogOutButton = styled.button`
  border: 1px solid #000;
  height: 30px;
  width: 30px;
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DeskLogOutButton = styled.button`
  width: 80px;
  height: 30px;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const Profile = styled.img`
  width: 30px;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const SideLogo = styled.img`
  width: 100px;
  margin-bottom: 20px;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
