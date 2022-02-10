import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {FooterContainer,FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo tp="/">Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" 
                            aria_label="Facebook" rel="noopener
                            noreferrer">
                                <FaFacebook/>
                                </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" 
                            aria_label="Instagram" rel="noopener
                            noreferrer">
                                <FaInstagram/>
                                </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" 
                            aria_label="Twitter" rel="noopener
                            noreferrer">
                                <FaTwitter/>
                                </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" 
                            aria_label="Youtube" rel="noopener
                            noreferrer">
                                <FaYoutube/>
                                </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" 
                            aria_label="Linkedin" rel="noopener
                            noreferrer">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;