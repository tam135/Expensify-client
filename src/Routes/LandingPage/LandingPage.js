import React from 'react'
import { Button } from "../../Components/Utils/Utils";
import { Link } from 'react-router-dom'

import './LandingPage.css'
import gif1 from './gif1.gif'
import gif2 from './gif2.gif'
import desktop from '../../Images/desktop.png'
import iphone from '../../Images/iphone.png'
import ThreeColGrid from '../../Components/ThreeColGrid/ThreeColGrid';

const LandingPage = () =>{
        return (
          <div className="container">

            <div className="about">
              <h1 className="heading">Expensity</h1>
              <hr className="hr"></hr>
              <p>Stay on track with your spending so you can start saving.</p>
              <Link to="/expenses">
                <Button className="button demo-button">Explore</Button>
              </Link>
            </div>

            <div className="screenshots">
              <img
                src={desktop}
                alt="desktop screenshot"
                className="desktop-screenshot"
              />
              <img
                src={iphone}
                alt="iphone screenshot"
                className="iphone-screenshot"
              />
            </div>
            
          </div>


                


        )
}

export default LandingPage


