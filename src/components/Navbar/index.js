import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'


import {
     Nav,
     NavbarContainer, 
     NavLogo, 
     MobileIcon, 
     NavMenu, 
     NavItem, 
     NavBtn, 
     NavBtnLink,
     NavLinks} from "./NavbarElements"

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(true);

    const changeNav = () =>{
        
        if(window.scrollY <= 600){
            setScrollNav(false);
        }else{
            setScrollNav(true);
        }
       
    }

   

    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    },[]);

    return (
       <>
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' >V-Bank</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass="active"
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to= "discover"  smooth={true}
                                duration={500}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"  smooth={true}
                                duration={500}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="singup"  smooth={true}
                                duration={500}>Sing Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin"  >Sing in</NavBtnLink>
                    </NavBtn>
                    
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
       </>
    )
}

export default Navbar
