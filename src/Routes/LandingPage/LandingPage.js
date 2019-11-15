import React from 'react'
import { Button } from "../../Components/Utils/Utils";
import { Link } from 'react-router-dom'
import { FaHandHoldingUsd, FaLock, FaRegCreditCard} from 'react-icons/fa'
import './LandingPage.css'
import gif1 from './gif1.gif'
import gif2 from './gif2.gif'
import desktop from '../../Images/desktop.png'
import iphone from '../../Images/iphone.png'

const LandingPage = () =>{
        return (
          <div className="LandingPage__app">
            <div className="LandingPage__container">

              <div className="LandingPage__title">
                <h1 className="heading">Expensity</h1>
                <hr className="LandingPage-hr"></hr>
                <section className="LandingPage__Tagline">
                  <p>
                    Stay on track with your spending so you can start saving.
                  </p>
                </section>

                <Link to="/expenses">
                  <Button className="button demo-button">Explore</Button>
                </Link>
              </div>

              <section className="app-screenshot">
                  <img
                    src={desktop}
                    alt="desktop screenshot"
                    className="desktop-screenshot"
                  />
                  <img 
                    src={iphone} 
                    alt="iphone screenshot" 
                    className='iphone-screenshot'
                  />
              </section>

              <div className="indicator-container">
                <section className="indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </section>
              </div>

              <section className="row">
                <div className="column">
                  <div className="icons">
                    <FaRegCreditCard />
                  </div>
                  <h3>Easy to use</h3>
                  <p>Record your expenses and track progress with ease</p>
                </div>

                <div className="column">
                  <div className="icons">
                    <FaHandHoldingUsd />
                  </div>
                  <h3>Rewarding Experience</h3>
                  <p>Understand your spending habits better than ever before</p>
                </div>

                <div className="column">
                  <div className="icons">
                    <FaLock />
                  </div>
                  <h3>Security</h3>
                  <p>Rest assured knowing your records are kept confidential</p>
                </div>
              </section>

              <section className="LandingPage__description1">
                <h3>Keep track of your spending</h3>
                <p>
                  The key to saving money is knowing how much you can afford to
                  spend. Expensity provides a simple way to record your expenses
                  and seeing where your money goes.
                </p>
                <img
                  src={gif1}
                  alt="add-expense form"
                  className="screenshot1"
                />
              </section>

              <section className="LandingPage__description2">
                <h3>See your progress</h3>
                <p>
                  Spend too much money without realizing it? These charts and
                  statistics update as you record your expenses and will help
                  you understand what you spend too much on.
                </p>
                <img src={gif2} alt="charts" className="screenshot2" />
              </section>
            </div>
{/*             <footer>Tam Phan © 2019</footer> */}
          </div>
        );
}

export default LandingPage


