import React, {useState} from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Spinner, Badge, Card, ProgressBar } from 'react-bootstrap';
import { CAR_CAUNT_D } from '../config/state.config'
import { LineChart} from 'react-chartkick'

import './chart.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ParkingTop = () => {
    const [caunt, setCaunt] = useState(186);
    const now = 51;
    const [doughnut, setDoughnut] = useState({
        labels: ['Busy', 'Free'],
        datasets:[
          {
            data:[
              `${caunt}`,
              `${CAR_CAUNT_D - caunt}`,
            ],
            backgroundColor:[
              'rgba(255, 0, 0, 1)',
              'rgba(54, 162, 235, 0.6)' 
            ]
          }
        ]
    });

    return (
        <>
            <div className='pie chart-less' >
            <div className='r-boos-spinner'>
                <Card bg="light" text="dark" style={{ width: '15rem' }}>
                    <Card.Body>
                        <h1 className='h1-count-info '>
                            <Badge pil variant="light">{CAR_CAUNT_D } / {caunt}</Badge>
                        </h1>
                        <Spinner animation="grow" variant="danger"/>
                        <Card.Title>Тhe Upper Parking</Card.Title>
                    </Card.Body>
                </Card>
            <div>
                <ProgressBar animated variant="danger" now={`${now}`} label={`${now}%`} />
            </div>  
            </div>
                <Doughnut data={doughnut} options={{title:{ display: true,text:``,fontSize: 20}, legend:{ display: true, position: 'bottom'}}}/>
            </div>
            <div className='line-chart-graph'>
                <LineChart data={{"2019-11-13": 153, "2019-11-14": 251, "2019-11-15": 123, "2019-11-16": 202,"2019-11-17": 96}} />
            </div>
        </>
    )
}

export default ParkingTop;

