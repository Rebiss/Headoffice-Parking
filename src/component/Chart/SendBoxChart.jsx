import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Chart from './Chart'
import ParkingDown from './ParkingDown'

import 'bootstrap/dist/css/bootstrap.min.css';
import './chart.css'


const SendBoxChart = () => {
    return (
        <div className='content-tab-boos'>
            <Tabs defaultActiveKey="Head" id="uncontrolled-tab-example">
                <Tab eventKey="Head" title="Head">
                    <Chart />
                </Tab>
                <Tab eventKey="Down" title="Down">
                    <ParkingDown />
                </Tab>
            </Tabs>
        </div>

    )
}

export default SendBoxChart;