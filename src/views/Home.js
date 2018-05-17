import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import car1 from '../assets/images/andrew-pons-113427-unsplash.jpg'
import car2 from '../assets/images/vlad-sorodoc-49620-unsplash.jpg'

const HomeArray = [
  {name: "Ford Mustang", price: "100,000", img: car1},
  {name: "Hellcat", price: "54,000", img: car2}
]
const HomeContainer = styled.section`
  ${'' /* background: pink; */}
`
const HomeSlide = styled.div`
  height: 500px;
  img {
    margin: 0 auto;
    background: blue;
    width: 50%;
  }
`

class Home extends Component {
  state = {
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  render(){
    return (
      <HomeContainer>
        <Slider {...this.state.settings}>
          {HomeArray.map((car, idx) => {
            return (
              <HomeSlide>
                <img src={car.img}></img>
              </HomeSlide>
            )
          })}
          </Slider>
          <h1 style={{margin: "0 auto", fontSize: "50px"}}>Under Construction</h1>
      </HomeContainer>
    )
  }
}

export default Home
