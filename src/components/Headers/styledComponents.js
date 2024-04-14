import styled from 'styled-components'

export const WebsiteLogo = styled.img`
  width: 100px;
`

export const NavContainer = styled.nav`
  border: 1px solid #000;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`

export const ThemeButton = styled.button`
  border: 1px solid #000;
`

export const MenuButton = styled.button`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavSection = styled.div`
  border: 1px solid #000;
`
export const NavCard = styled.div`
  height: 100vh;
  width: 40%;
  border: 1px solid #000;
  position: fixed;
  top: 30px;
  left: ${({sideBar}) => (sideBar ? '0px' : '-40%')};
  background-color: #fff;
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 200px;
    left: 0px;
  }
`

export const NavIconsContainer = styled.ul`
  border: 1px solid #000;
`

export const Icon = styled.li`
  border: 1px solid #000;
`

export const IconsContainer = styled.div`
  border: 1px solid #000;
`
export const Button = styled.button`
  border: 1px solid #000;
`
