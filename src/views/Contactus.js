import React, { Component } from 'react';
import styled from 'styled-components'
import RouteHeader from '../components/RouteHeader'

const contactArray = [
  {name: "Hours", text: "Mon - Sun: 10AM - 6PM", icon: "access_time", contact: false},
  {name: "Phone", text: "(503) 560-0935", icon: "phone", contact: true},
  {name: "Email", text: "oscaralramos@gmail.com", icon: "email", contact: true}
]
const ContactContainer = styled.section``
const InfoSection = styled.section`
  display: flex;
  justify-content: center;
`
const InfoSectionUl = styled.ul`
  display: flex;
  ${'' /* flex-direction: column; */}
  @media(max-width: 950px) {
    flex-direction: column;
  }
`
const InfoSectionLi = styled.li`
  display: flex;
  cursor: ${props => props.contact ? "pointer" : "auto"};
  padding: 10px 20px;
  div {
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 25px;
      font-weight: 500;
      margin-bottom: 10px;
    }
  }
`
const InfoIcon = styled.i`
  color: #209DD7;
  font-size: 55px;
  padding: 0 40px 12px 0;
  @media(max-width: 400px){
    font-size: 40px;
  }
`
class Contactus extends Component {
  render(){
    return(
      <ContactContainer>
        <RouteHeader header="Contact Us"></RouteHeader>
        <InfoSection>
          <InfoSectionUl>
            {contactArray.map((i, idx) => {
              return (
                <InfoSectionLi contact={i.contact}>
                  <InfoIcon className="material-icons md-48">{i.icon}</InfoIcon>
                  <div>
                    <h2>{i.name}</h2>
                    <p>{i.text}</p>
                  </div>
              </InfoSectionLi>)
            })}
          </InfoSectionUl>
        </InfoSection>
      </ContactContainer>
    )
  }
}
export default Contactus;
