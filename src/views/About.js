import React from 'react'
import styled from 'styled-components'
import RouteHeader from '../components/RouteHeader'
import Information from '../components/Information'
// import containerImage from '../assets/images/tuce-312164-unsplash.jpg'
import audiImage from '../assets/images/kevin-bhagat-555612-unsplash.jpg'
import subaruImage from '../assets/images/steven-striegel-75921-unsplash.jpg'

const aboutInfoArray = [
  {header: "iDrive PDX", text: "We are committed to providing a positive car buying experience. Our consultative approach is geared towards finding the right solution for our customers, even if that means buying a car somewhere else. If there is nothing in our inventory that is to your liking, we encourage you to take advantage of our vehicle locating service. In most cases we can find the exact car you are looking for priced much lower than you would find at a traditional dealer.", image: audiImage },
  {header: "Our Philosophy", text: "Unlike your regular auto dealer iDrive PDX is dedicated to providing you the best experience possible in selecting your next vehicle. Part of this experience is scheduling a time for a one to one viewing and test drive with us. No interruptions, no used car salesman. Only one car fan to another", image: subaruImage}
]
const AboutContainer = styled.div`
  ${'' /* height: 400px; */}
`

const About = (props) => (
  <AboutContainer>
    <RouteHeader header="About Us"></RouteHeader>
    <Information data={aboutInfoArray} />
  </AboutContainer>
);



export default About;
