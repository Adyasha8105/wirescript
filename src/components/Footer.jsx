import React from "react";
import styled from "styled-components";
import Icon from "../images/logo";
import { Link } from "gatsby";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaInstagram,
  FaPinterest,
  FaGooglePlusG,
} from "react-icons/fa";

const FooterParent = styled.div`
  display: grid;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "var(--color-secondary)"};
  grid-template-rows: repeat(12, minmax(5rem, 1fr));
  grid-template-columns: repeat(8, minmax(6.6667rem, 1fr));
`;

const FooterNewsletter = styled.div`
  grid-row: 2 / span 6;
  grid-column: 3 / -1;
  background-color: var(--color-tertiary);
  z-index: 2;
`;

const FooterActual = styled.div`
  grid-row: 7 / -1;
  grid-column: 1 / -1;
  background-color: var(--color-primary);
  width: 100%;
  margin: 0 auto;
  padding: 0 10.6667rem;

  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(8, 1fr);
`;

const NewsletterTitle = styled.h1`
  color: var(--color-primary);
  padding: 4rem 5rem 0;
  font-weight: 500;

  span {
    color: var(--color-secondary);
    margin-left: 0.25rem;
  }
`;

const BigText = styled.h1`
  color: var(--color-secondary);
  padding: 1rem 5rem 0;
  font-weight: 700;
  font-size: 12vh;

  span {
    color: var(--color-primary);
  }
`;

const SmallText = styled.h1`
  color: var(--color-secondary);
  padding: 0 5rem;
  margin-left: 0.3333rem;
  font-weight: 500;
  font-size: 1rem;
  span {
    color: var(--color-primary);
  }
`;

const TextBox = styled.input`
  outline: none;
  padding: 1.2rem 1rem 1.2rem 1rem;
  border-radius: 2px;
  border: none;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  width: ${props => `${props.length}rem`};

  &:not(:first-of-type) {
    margin-left: 1rem;
  }
`;

const NewsletterSubscribe = styled.div`
  padding: 2rem 5rem 3rem;
`;

const FooterItems = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

const FooterItem = styled(Link)`
  color: var(--color-text-footer);
  font-size: 1rem;
  font-weight: 500;

  &:not(:first-of-type) {
    margin-top: 1rem;
  }

  &,
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
  }
`;

const FooterMenu = styled.div`
  grid-row: 3 / span 3;
  grid-column: 1 / span 2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FooterCredits = styled.div`
  grid-row: 3 / span 3;
  grid-column: 7 / span 2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
`;

const FooterCopy = styled.p`
  color: var(--color-text-footer);
  font-weight: 500;
  font-size: 1rem;
`;

const FooterLogo = styled(Link)`
  color: white;
  text-align: right;
`;

const FooterIcons = styled.div`
  display: flex;
  width: fit-content;
  color: var(--color-text-footer);

  & > * + * {
    margin-left: 1rem;
  }
`;

function Footer({ bgColor }) {
  return (
    <FooterParent bgColor={bgColor}>
      <FooterNewsletter>
        <NewsletterTitle>
          Wirescript <span>Newsletter —</span>
        </NewsletterTitle>
        <SmallText>
          <span>Every Friday, </span> loaded with content
        </SmallText>
        <BigText>
          Get <span>In Mail</span>
        </BigText>
        <NewsletterSubscribe as="form">
          <TextBox
            type="text"
            bgColor="var(--color-secondary)"
            placeholder="Your name"
            length={15}
          />
          <TextBox
            type="email"
            bgColor="var(--color-secondary)"
            placeholder="Your email address"
            length={20}
          />
          <TextBox
            type="submit"
            bgColor="var(--color-primary)"
            color="var(--color-secondary)"
            length={8}
          />
        </NewsletterSubscribe>
      </FooterNewsletter>
      <FooterActual>
        <FooterMenu>
          <FooterItems>
            <FooterItem to="/blog">Blog</FooterItem>
            <FooterItem to="/about">About</FooterItem>
            <FooterItem to="/one">Newsletter</FooterItem>
          </FooterItems>
          <FooterIcons>
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaGithub />
            <FaInstagram />
            <FaPinterest />
            <FaGooglePlusG />
          </FooterIcons>
        </FooterMenu>
        <FooterCredits>
          <FooterLogo to="/">
            <Icon
              color="var(--color-secondary
              
              )"
              height="5rem"
              width="5rem"
            />
          </FooterLogo>
          <FooterCopy>
            &copy; Copyright The Wirescript {new Date().getFullYear()}
          </FooterCopy>
        </FooterCredits>
      </FooterActual>
    </FooterParent>
  );
}

export default Footer;
