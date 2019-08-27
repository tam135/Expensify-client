import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default class Landingpage extends Component {
    render() {
        return (
            <div className = "LandingPage">
                <h1 className = "LandingPage__title">
                    <FontAwesomeIcon className='blue' icon='search-dollar' />
                    {' '}
                    Expensify
                </h1>

                <section className="LandingPage__description">
                    <h3>Keep track of your spending</h3>
                    <p>The key to saving money is knowing how much you can afford and what to spend it on. Expensify provides a simple way to record your expenses and seeing where your money goes.</p>
                </section>

                <section className="LandingPage__description">
                    <h3>Spend less Save more</h3>
                    <p>Think you waste too much on food? Interactive charts and stats help you understand what to spend less on.</p>
                </section>
                <section className = "button-container">
                    <Link to='/login'>
                        <button
                            type="submit"
                            className="LandingPage__button login-button">
                            Login
                        </button>
                    </Link>

                    <button type="submit" className="LandingPage__button demo-button">Demo</button>
                </section>
                
            </div>
        )
    }
}
