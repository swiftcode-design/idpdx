import React from 'react'
import { Affix, Icon } from 'antd'
import {NavLink} from 'react-router-dom'
import logo from '../sample_logo.PNG'
import './../styles/navbar.css'

function NavBar() {
  const menu = [
    {title: "HOME", list: []},
    {title: "ABOUT US", list: []},
    {title: "SERVICES", list: ["Location", "Sales"]},
    {title: "SHOWROOM", list: []},
    {title: "CONTACT US", list: []}
  ]

  return (
    <nav >
      <div className="top-navbar">
        <img alt="company logo" style={{width: "150px",height: "90px", borderRadius: "50%"}} src={logo}></img>
        <div style={{display: "flex"}}>
          <Icon style={{fontSize: 40, color: "#209DD7", marginRight: 25}} type="compass" />
          <h5 style={{color: "white", lineHeight: "18px", fontSize: "12px"}}>2925 SE 131ST AVE <br></br> Portland, OR 97236</h5>
          <Icon style={{fontSize: 40, color: "#209DD7", marginRight: 25, marginLeft: 25}} type="phone" />
          <h5 style={{color: "white", paddingRight: "25px"}}>
            <span style={{color: "#209DD7"}}>CONTACT</span>
            <br/>
            <a style={{color: "white", fontSize: "20px"}} href="tel:503-560-0935">(503) 560-0935</a>
          </h5>
          <ul style={{display: "flex"}}>
            {["facebook", "instagram", "mail"].map((soc,idx) => (
              <li key={idx}>
                <Icon type={soc}
                  style={{fontSize: 20, margin: 12, padding: 7, color: "white", border: "solid 1px black", background: "#2F3234", borderRadius: "50%"}} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Affix>
        <div className="bottom-navbar">
          <ul className="bottom-nav-ul">
            {menu.map((li,idx) => {
              const title = (li.title === "HOME" ? "/" : ("/" + li.title.toLowerCase().split(" ").join("")): "")
              return(
                <li key={idx} className="bottom-nav-li">
                  <NavLink exact
                    activeStyle={{background: "#209DD7", color: "white"}}
                    to={title}>{li.title}</NavLink>
                </li>
              )
            })}
          </ul>
          <div>
            {/* other stuff */}
          </div>
        </div>
      </Affix>
    </nav>
  )
}

export default NavBar
