import React, { Fragment, useState} from 'react';
import { Doughnut} from 'react-chartjs-2';
import { Spinner,Badge,Card,ProgressBar } from 'react-bootstrap';
import { CAR_CAUNT_T } from '../config/state.config';
import { LineChart} from 'react-chartkick'

import './chart.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ParckingDown = () => {
    const [caunt, setCaunt] = useState(85);
    const now = 76;
    const [doughnut, setDoughnut] = useState({
        labels: ['Busy', 'Free'],
        datasets:[
          {
            data:[
              `${caunt}`,
              `${CAR_CAUNT_T - caunt}`,
            ],
            backgroundColor:[
              'rgba(255, 0, 0, 1)',
              'rgba(54, 162, 235, 0.6)' 
            ]
          }
        ]
    });

    return (
        <Fragment>
            <div className='pie chart-less' >
                <div className='r-boos-spinner'>
                    <Card bg="light" text="dark" style={{ width: '15rem' }}>
                        <Card.Body>
                            <h1 className='h1-count-info '>
                                <Badge pil variant="light">{CAR_CAUNT_T} / {caunt}</Badge>
                            </h1>
                            <Spinner animation="grow" variant="danger"/>
                            <Card.Title>Lower Parking</Card.Title>
                        </Card.Body>
                    </Card> 
                    <div>
                        <ProgressBar variant="danger" animated  now={`${now}`} label={`${now}%`} />
                    </div>  
                </div>
                    <Doughnut data={doughnut} options={{title:{ display: true,text:``,fontSize: 20}, legend:{ display: true, position: 'bottom'}}}/>
            </div>
            <div className='line-chart-graph'>
                <LineChart data={{"2019-11-12": 296, "2019-11-13": 306,"2019-11-14": 312,"2019-11-15": 287,"2019-11-16": 211,"2019-11-17": 253}} />
            </div>
        </Fragment>
    )
}

export default ParckingDown;