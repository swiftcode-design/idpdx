import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Logo from '../components/Logo'

const NavigationContainer = styled.nav`
  position: fixed;
  width: 100%;
  background: white;
  height: 100px;
`
const ContactNaviagation = styled.div`
  background: black;
  color: white;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
`
const HoursP = styled.p`
  color: #575757;
  span{
    color:white;
  }
  @media(max-width: 400px){
    font-size: 12px;
  }
`
const ContactIcon = styled.i`
  background: black;
  padding: 5px 10px;
  :hover{
    background: #3B5998;
  }
`
const SiteNavigation = styled.div`
  position: relative;
  background: white;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 1000px){
    justify-content: flex-end;
    margin-right: 50px;
  }
  @media(max-width: 790px){
    justify-content: space-between;
    padding: 0 40px;
    margin-right: 0;
  }

  ul{
    display: flex;
    li{
      a{
        color: #ADADAD;
        padding: 20px;
        @media(max-width: 1000px){
          padding: 15px 20px;
        }
      }
    }
    @media (max-width: 790px){
      display: none;
    }
  }
  img{
    position: absolute;
    width: 130px;
    height: 70px;
    left: 100px;
    @media (max-width: 1150px){
      left: 10px;
    }
    @media(max-width: 790px){
      position: static;
    }
  }
`
const SiteMobileNavigation = styled.div`
  display: none;
  position: relative;
  @media(max-width: 790px){
    display: flex;
  }
  img {
    height: 160px;
    width: 180px;
    position: absolute;
    bottom: 12%;
    left: 40px;
    @media(max-width: 400px){
      height: 100px;
      width: 80px;
      left: 35%;
      bottom: 5%;
    }
  }
`

const MenuIcon = styled.i`
  font-size: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
const menu = [
  {title: "HOME", list: []},
  {title: "ABOUT US", list: []},
  {title: "SERVICES", list: ["Location", "Sales"]},
  {title: "SHOWROOM", list: []},
  {title: "CONTACT US", list: []}
]
class NavBar extends Component{
  state = {open: false}
  toggle = () => {
    this.setState({ open: !this.state.open })
  }

  render(){
    return (
      <div style={{height: "100px"}}>
        <NavigationContainer >
          <ContactNaviagation>
            <section>
              <HoursP>OPENING HOURS MON-SUN<span>10AM - 9PM</span></HoursP>
            </section>
            <section>
              <ContactIcon className="material-icons md-48">email</ContactIcon>
              <ContactIcon className="material-icons md-48">phone</ContactIcon>
            </section>
          </ContactNaviagation>
          <SiteNavigation>
            <Logo />
            <ul>
              {menu.map((li,idx) => {
                const title = (li.title === "HOME" ? "/" : ("/" + li.title.toLowerCase().split(" ").join("")): "")
                return (
                  <li>
                    <NavLink exact
                      style={{ textDecoration: "none" }}
                      activeStyle={{background: "#209DD7", color: "white"}}
                      to={title}>{li.title}</NavLink>
                  </li>
                )
              })}
            </ul>
            <SiteMobileNavigation>
              <Drawer  openSecondary={true} open={this.state.open}>
                {menu.map((li,idx) => {
                  const title = (li.title === "HOME" ? "/" : ("/" + li.title.toLowerCase().split(" ").join("")): "")
                  return(
                    <MenuItem style={{margin: "20px 0"}} onClick={ this.toggle }>
                      <NavLink exact
                        style={{ textDecoration: "none", color: "#209DD7" }}
                        activeStyle={{ color: "#209DD7", fontSize: "30px"}}
                        to={title}>{li.title}</NavLink>
                    </MenuItem>
                  )
                })}
                <MenuItem>
                  <MenuIcon onClick={ this.toggle } className="material-icons md-48" >close</MenuIcon>
              </MenuItem>
              <Logo />
              </Drawer>
              <MenuIcon className="material-icons md-48" onClick={this.toggle} >menu</MenuIcon>
            </SiteMobileNavigation>
          </SiteNavigation>
        </NavigationContainer>
      </div>
    )
  }
}

export default NavBar
