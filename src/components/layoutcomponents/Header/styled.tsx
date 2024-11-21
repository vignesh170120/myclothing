import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { mediaQuery } from '../../../const/Breakpoint'

export const NavbarContainer = styled.nav<{ $isVisible: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  background-color: white;
  box-shadow: 2px 1px 8px black;
  transition: transform 0.3s ease;
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(-100%)')};
  padding: 16px;
  z-index: 1000; 
`;

export const Logo = styled.div`
  cursor: pointer;
  width: 4vw;
  min-width: 36px;
`;

export const LogoImage = styled.img`
  width: 100%; 
  height: auto; 
  object-fit: contain; 
`;


export const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  /* Hide on mobile */
  ${mediaQuery('tablet', 'max')} {
    display: none;
  }

  /* Show on tablet and above */
  ${mediaQuery('tablet')} {
    display: flex;
  }
`

export const NavItem = styled(NavLink)`
  position: relative;
  color: #333;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: inline-flex;
  align-items: center;

  span {
    position: absolute;
    top: 0;
    right: -10px;
    background-color: red;
    color: white;
    font-size: 0.75rem;
    padding: 2px;
    border-radius: 50%;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    min-height: 20px;
  }
  
  &.active {
    border-bottom: 2px solid white;
  }

  &:hover {
    color: grey;
  }
`

export const MenuToggle = styled.div`
  display: none;

  

  ${mediaQuery('tablet', 'max')} {
    display: flex;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;

    span {
    position: absolute;
    top: 0;
    right:0;
    margin-top:12px;
    background-color: red;
    color: white;
    font-size: 0.75rem;
    padding: 2px;
    border-radius: 50%;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    min-height: 20px;
  }
  }
`

export const MobileNavLinks = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 0;
  width: 32%;
  background-color: #ffeff4;
  gap: 10px;

  /* Only show on mobile */
  ${mediaQuery('tablet')} {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  }

  /* Hide on tablet and above */
  ${mediaQuery('tablet')} {
    display: none;
  }
`
export const Input = styled.input`

width:10rem;
border:1px solid grey;
border-radius:20px;
padding:0.5rem;
font-size:1em;

${mediaQuery('tablet')} {
 width:10rem;
}
`
export const MobileNavItem = styled(NavLink)`
  position: relative;
  color: #333;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.5rem;
  display: inline-flex;
  align-items: center;

  span {
    position: absolute;
    top: 0;
    right: 0;
    background-color: red;
    color: white;
    font-size: 0.75rem;
    padding: 2px;
    border-radius: 50%;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    min-height: 20px;
  }
 
  &.active {
    font-weight: bolder;
  }
  &:hover {
    background-color:#FF8095;
    color:#000000;
  }
`