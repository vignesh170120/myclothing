import React, { useEffect, useState } from 'react';
import logo from '../../../assets/logo-7833520_640.png'
import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavItem,
  MenuToggle,
  MobileNavLinks,
  MobileNavItem,
  Input,
  LogoImage,
} from './styled';
import { ROUTES } from '../../../const/routes';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { selectValue } from '../../../redux/slices/products/reducer';

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { addToCart } = useSelector((state: RootState) => state.products)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <NavbarContainer $isVisible={isVisible}>
      <Logo onClick={() => navigate("/")}><LogoImage src={logo} alt="" /></Logo>
      <Input type="text" placeholder='Search'  onChange={(e) => dispatch(selectValue(e.target.value))}/>
      <NavLinks>
        
        <NavItem to={ROUTES.HOME}>Home</NavItem>
        <NavItem to={ROUTES.ABOUT}>About</NavItem>
        <NavItem to={ROUTES.CART}>Cart {addToCart.length !== 0 && <span> {addToCart.length} </span>}</NavItem>
      </NavLinks>
     
      <MenuToggle
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu">

        ☰ {addToCart.length !== 0 && <span> {addToCart.length} </span>}
      </MenuToggle>

      {isMobileMenuOpen && (

        
         
        <MobileNavLinks $isOpen={isMobileMenuOpen}>
          <MobileNavItem to={ROUTES.HOME} onClick={toggleMobileMenu}>
            Home
          </MobileNavItem>
          <MobileNavItem to={ROUTES.ABOUT} onClick={toggleMobileMenu}>
            About
          </MobileNavItem>
          <MobileNavItem to={ROUTES.CART} onClick={toggleMobileMenu}>
            Cart {addToCart.length !== 0 && <span> {addToCart.length} </span>}
          </MobileNavItem>
        </MobileNavLinks>
        
      )}
    </NavbarContainer>
  );
};

export default Header;