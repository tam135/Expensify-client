import React, { Component } from 'react'
import Charts from '../Charts/Charts'
import Stats from '../Stats/Stats'

import './Dashboard.css'
export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                
                <Charts />
            </div>
        )
    }
}
