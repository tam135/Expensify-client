import React, { Component } from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SideBar/>
            </div>
        )
    }
}
