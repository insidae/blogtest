/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div ClassName="about">
        <nav>
            <ul>
                <li>
                    <a href="/">HOME</a>
                </li>
                <li>
                    <a href="#">ABOUT</a>
                </li>
                <li>
                    <a href="./gallery">GALLERY</a>
                </li>
                <li>
                    <a href="./animation">ANIMATION</a>
                    <ul ClassName="sub-nav">
                        <li ClassName="nav-item">
                            <a href="./animation">SHOWREELS</a>
                        </li>
                        <li ClassName="nav-item">
                            <a href="./tcd">TECHNOCOLOR DREAMS</a>
                        </li>
                        <li ClassName="nav-item">
                            <a href="./qb">QUAY BISCUIT</a>
                        </li>
                    </ul>
                </li>            
                <li>
                    <a href="./contact">CONTACT</a>
                </li>
            </ul>
        </nav>
        <div ClassName="container">
            <div>
                <img ClassName="portrait" src="assets/media/portrait_web.jpg"/>
            </div>
            <div ClassName="about">
                <h1>Hello.</h1>
                <h4>
                    I'm Ant, and I animate. I have a wide range of 
                    knowledge of the animation process and production, 
                    aswell as the software that is involved. I'm always 
                    exploring new software and devolping new techniques 
                    to add to my skillset while imporving my productivity.
                </h4>
            </div>
            <hr/>
            <div ClassName="aboutwebsite">
                <h1>About this Website</h1>
                <h4>
                    Initially I just wanted to publish a new portfolio
                    site, but my curiosity grew, and with some guidence on
                    on the side I eventually started to learn and develop my own 
                    site in HTML/CSS. 
                </h4>                    
                <h4>
                    It's still a work in progress mind you, it's not very mobile
                    friendly right now, there's more artwork/animation projects
                    that I need to upload, and I also intend to add some form of a 
                    blog/journal to record my process and any additional thoughts.
                </h4>
                <h4>
                    So stick around, and let's see how this all turns out!
                </h4>
            </div>
            <hr/>
            <div ClassName="software">
                <h1>Software I use</h1>
                <ul ClassName="left-list">
                    <h4>Photoshop</h4>
                    <h4>Illustrator</h4>
                    <h4>Animate</h4>
                    <h4>Premiere Pro</h4>
                    <h4>After Effects</h4>
                </ul>
                <ul ClassName="right-list">
                    <h4>TV Paint</h4>
                    <h4>Toon Boom</h4>
                    <h4>Autodesk Maya</h4>
                    <h4>Blender</h4>
                </ul>
            </div>
        </div>
        <div ClassName="background-fixed">
            <img src="assets/qb/thumbs/Thumb_41.jpg"/>
        </div>
      </div>
    );
  }
}

export default About;