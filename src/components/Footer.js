import React from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'

const FooterContainer = styled.footer`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #FFFFFF;
  height: 60px;
  width: 100%;
  bottom: 0;
  @media(max-width: 1200px) {
    ${'' /* justify-content: space-between; */}
    img:nth-child(2) {
      order: 1;
    }
    section:nth-child(1) {
      order: 2;
    }
    section:nth-child(3) {
      order: 3
    }
  }
`
const FooterHours = styled.section`
  font-weight: bold;
  @media(max-width: 500px) {
    display: none;
  }
`
const FooterContacts = styled.section`
  line-height: 22px;
  font-weight: bold;
  span {
    font-weight: normal;
  }
  h4 {
    display: none;
  }
  @media(max-width: 1200px) {
    p {
      display: none;
    }
    h4 {
      display: flex;
    }
  }
  @media(max-width: 500px) {
    font-size: 15px;
  }
`
const Footer = (props) => (
  <FooterContainer>
    <FooterHours>
      Mon-Fri: 10AM - 6PM
    </FooterHours>
    <Logo height="60px" width="90px" />
    <FooterContacts>
      <p>Phone: <span>(503) 560-0935</span></p>
      <p>Email: <span>oscaralramos@gmail.com</span></p>
      <h4>(503) 560-0935</h4>
      <h4>oscaralramos@gmail.com</h4>
    </FooterContacts>
  </FooterContainer>
);

export default Footer;
