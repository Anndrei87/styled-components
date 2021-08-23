import React from 'react'

import {
    SideBarContainer, 
    Icon, 
    CloseIcon, 
    SideBtnWrap, 
    SidebarLink, 
    SidebarRoute, 
    SidebarWrapper,
    SidebarMenu } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onCLick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="singup" onClick={toggle}>Sing Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/singin">Sing In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SideBarContainer>

        </>
    )
}

export default Sidebar
