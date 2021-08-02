import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinkTitle>About US</FooterLinkTitle>
                <FooterLink to="/signin">Testomonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Inverstors</FooterLink>
                <FooterLink to="/signin">Terms of services</FooterLink>
              </FooterLinksItems>
              <FooterLinksItems>
                <FooterLinkTitle>About US</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testomonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Terms of services</FooterLink>
              </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinkTitle>Business</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testomonials</FooterLink>
                <FooterLink to="/signin">Inverstors</FooterLink>
                <FooterLink to="/signin">Terms of services</FooterLink>
              </FooterLinksItems>
              <FooterLinksItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
              </FooterLinksItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo onClick={toggleHome} to="/">
                iamSaeed
              </SocialLogo>
              <WebsiteRights>
                Saeed Najafi © {new Date().getFullYear()} All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
