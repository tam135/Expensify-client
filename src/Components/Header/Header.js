import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
        return (
          <nav className="Header">
            <h1>
              <Link to="/">
                Expensity{" "}
                <FontAwesomeIcon className="blue" icon="search-dollar" />
              </Link>
            </h1>
            
            <section className="SignOut">
              <Link to="/">Log out</Link>
            </section>
          </nav>
        );
}

export default Header