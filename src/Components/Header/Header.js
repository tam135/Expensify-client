import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Header extends Component {
    render() {
        return (
            <nav className='Header'>
                <h1>
                    <Link to='/'>
                        Expensify
                        {' '}
                        <FontAwesomeIcon className='blue' icon='search-dollar' />
                    </Link>
                </h1>
            </nav>
        )
    }
}
