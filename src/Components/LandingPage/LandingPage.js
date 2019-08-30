import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import screenshot from './addexpense.png'
import donut from './donut.png'
const LandingPage = () =>{

        return (
            <div className="LandingPage__app">
                <div className="LandingPage__container">
                    <h1 className="LandingPage__title">
                        <FontAwesomeIcon className='blue' icon='search-dollar' />
                        {' '}
                        Expensity
                    </h1>
                    <section className="LandingPage__Tagline">
                        <h2>Expensity helps you stay on track with your spending so you can start saving.</h2>
                        <Link to='/expenses'>
                            <button className="button demo-button">
                                Demo
                            </button>
                        </Link>
                    </section>
                    <section className="LandingPage__description1">
                        <h3>Keep track of your spending</h3>
                        <p>The key to saving money is knowing how much you can afford and what to spend it on. Expensify provides a simple way to record your expenses and seeing where your money goes.</p>
                        <img src={screenshot} alt="add-expense form" className="screenshot1"/>
                    </section>

                    <section className="LandingPage__description2">
                        <h3>Spend less Save more</h3>
                        <p>Think you waste too much on food? Interactive charts and stats help you understand what to spend less on.</p>
                        <img src={donut} alt="charts" className="screenshot2" />
                    </section>
                    <section className="button-container">
                        <Link to='/login'>
                            <button
                                type="submit"
                                className="button login-button">
                                Login
                            </button>
                        </Link>

                        <Link to='/Register'>
                            <button
                                type="submit"
                                className="utton reg-button">
                                Register
                            </button>
                        </Link>
                    </section>
                </div>
            </div>
        )
}

export default LandingPage
