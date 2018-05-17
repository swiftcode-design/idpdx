import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../sample_logo.PNG'

const LogoImage = styled.img`

`

const Logo = ({ height, width }) => (
  <LogoImage
    src={logo}
    alt="company logo"
    style={{height: height, width: width}}/>
)
export default Logo
