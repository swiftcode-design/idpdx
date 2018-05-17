import React, { Component } from 'react'
import styled from 'styled-components'
import audiImage from '../assets/images/kevin-bhagat-555612-unsplash.jpg'
import subaruImage from '../assets/images/steven-striegel-75921-unsplash.jpg'

const InformationContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const InfoSection = styled.div`
  display: flex;
  border-left: ${props => props.left ? "solid 3px #209DD7" : "none"};
  border-right: ${props => props.left ? "none" : "solid 3px #209DD7"};
  justify-content: center;
  width: 1150px;
  padding: 30px 0;
  @media(max-width: 1200px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p, h2{
      margin: 40px 0;
    }
  }
  @media(max-width: 745px){
    border: none;
    width: 90%;
  }
  div {
    width: 50%;
    padding: 0 20px;
    text-align: ${props => props.align ? "left" : "right"};
    @media(max-width: 745px){
      width: 100%;
      text-align: left !important;
    }
    h2{
      font-weight: bold;
      font-size: 35px;
      letter-spacing: 2px;
    }
    p{
      margin-top: 20px;
      font-size: 20px;
      color: #6A6A6A;
      letter-spacing: 2px;
      line-height: 30px;
    }
  }
`
const InfoImage = styled.img`
  width: 50%;
  height: 400px;
  @media(max-width: 745px){
    width: 100%;
    height: 200px;
  }
`
const Information = ({ data }) => (
  <InformationContainer>
    {data.map((item, idx) => {
      return idx % 2  === 1 ?
        <InfoSection >
          <InfoImage src={item.image}/>
          <div >
            <h2>{item.header}</h2>
            <p>{item.text}</p>
          </div>
        </InfoSection>
        :
        <InfoSection left align>
          <div >
            <h2>{item.header}</h2>
            <p>{item.text}</p>
          </div>
          <InfoImage src={item.image}/>
        </InfoSection>
    })}
  </InformationContainer>
)

export default Information
