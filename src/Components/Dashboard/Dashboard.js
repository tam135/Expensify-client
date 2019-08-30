import React, { Component } from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import './Dashboard.css'
export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <Header/>
                <SideBar/>
                <p>Charts and stats will be on this page later</p>
            </div>
        )
    }
}
