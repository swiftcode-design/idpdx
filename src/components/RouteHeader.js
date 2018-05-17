import React, { Component } from 'react'
import styled from 'styled-components'
import containerImage from '../assets/images/tuce-312164-unsplash.jpg'

const ImageContainer = styled.div`
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  @media(max-width: 450px){
    height: 250px;
  }
  @media(max-width: 1200px){
    margin: 0;
  }
  h1{
    font-size: 150px;
    color: white;
    font-weight: bold;

    @media(max-width: 1000px){
      font-size: 90px;
    }
    @media(max-width: 450px){
      font-size: 60px;
    }
  }
`

const RouteHeader = (props) => (
  <ImageContainer style={{ backgroundImage: `url(${containerImage})` }}>
    <h1>{props.header}</h1>
  </ImageContainer>
)


export default RouteHeader
