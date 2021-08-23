import React from 'react'
import {FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa'

import { 
    FooterContainer, 
    FooterLink, 
    FooterLinkTitle, 
    FooterLinksContainer, 
    FooterLinkItems, 
    FooterLinksWrapper, 
    FooterWrap } from './FooterElements'

import { 
    SocialMedia, 
    SocialIconLink, 
    SocialIcons, 
    SocialLogo, 
    SocialMediaWrap, 
    WebsiteRights } from './FooterElements';

const Footer = () => {

    const copy = '&copy';
    const parser = new DOMParser();
    const decodeString = parser.parseFromString(`<!doctype html><body>${copy}`, 'text/html').body.textContent;

    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/">How it works</FooterLink>
                                <FooterLink to="/">Testemonials</FooterLink>
                                <FooterLink to="/">Carrers</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Term of Services</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Destinations</FooterLink>
                                <FooterLink to="/">Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to="/">Submit Video</FooterLink>
                                <FooterLink to="/">Ambassadors</FooterLink>
                                <FooterLink to="/">Agency</FooterLink>
                                <FooterLink to="/">Influencer</FooterLink>
                        </FooterLinkItems>
                        
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/">Instagran</FooterLink>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">Youtube</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                 <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>V-Bank</SocialLogo>
                        <WebsiteRights> V-Bank {decodeString} {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        
                        <SocialIcons>
                            <SocialIconLink href="https://www.instagram.com/andrei.sm0/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href="https://www.instagram.com/andrei.sm0/" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href="https://www.linkedin.com/in/andrei-moreira/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                        
                    </SocialMediaWrap>
                </SocialMedia> 
            </FooterWrap>
        </FooterContainer>
            
        </>
    )
}

export default Footer
