import React from 'react'
import styled from 'styled-components'
import containerImage from '../assets/images/adrian-schwarz-530523-unsplash.jpg'
import audiImage from '../assets/images/kevin-bhagat-555612-unsplash.jpg'
import subaruImage from '../assets/images/steven-striegel-75921-unsplash.jpg'

const infoArray = [
  {header: "iDrive PDX", text: "We are committed to providing a positive car buying experience. Our consultative approach is geared towards finding the right solution for our customers, even if that means buying a car somewhere else. If there is nothing in our inventory that is to your liking, we encourage you to take advantage of our vehicle locating service. In most cases we can find the exact car you are looking for priced much lower than you would find at a traditional dealer.", image: audiImage },
  {header: "Our Philosophy", text: "Unlike your regular auto dealer iDrive PDX is dedicated to providing you the best experience possible in selecting your next vehicle. Part of this experience is scheduling a time for a one to one viewing and test drive with us. No interruptions, no used car salesman. Only one car fan to another", image: subaruImage}
]
const AboutContainer = styled.div`
  height: 400px;
`
const ImageContainer = styled.div`
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 450px){
    height: 250px;
  }
  h1{
    font-size: 150px;
    color: #209DD7;
    font-weight: bold;
  -webkit-text-fill-color: #209DD7; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
    @media(max-width: 1000px){
      font-size: 90px;
      -webkit-text-stroke-width: 2px;
    }
    @media(max-width: 450px){
      font-size: 60px;
      -webkit-text-stroke-width: 1.5px;
    }
  }
`
const InformationContainer = styled.section`
  ${'' /* background: green; */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`
const InfoSection = styled.div`
  display: flex;
  border-left: ${props => props.left ? "solid 3px #209DD7" : "none"};
  border-right: ${props => props.left ? "none" : "solid 3px #209DD7"};
  justify-content: center;
  width: 1150px;
  height: 400px;
  ${'' /* background: blue; */}
  padding: 30px 0;
  div{
    width: 50%;
    padding: 0 20px;
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
      width: 90%;
    }
  }
`
const InfoImage = styled.img`
  width: 50%;
`
const About = (props) => (
  <AboutContainer>
    <ImageContainer style={{ backgroundImage: `url(${containerImage})` }}>
      <h1>About Us</h1>
    </ImageContainer>
    <InformationContainer>
      {infoArray.map((item, idx) => {
        return idx % 2  === 1 ?
          <InfoSection >
            <InfoImage src={item.image}/>
            <div >
              <h2>{item.header}</h2>
              <p>{item.text}</p>
            </div>
          </InfoSection>
          :
          <InfoSection left>
            <div >
              <h2>{item.header}</h2>
              <p>{item.text}</p>
            </div>
            <InfoImage src={item.image}/>
          </InfoSection>
      })}
    </InformationContainer>
  </AboutContainer>
);



export default About;
