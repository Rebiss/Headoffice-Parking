import React, {useState} from 'react';
import {Radar, Doughnut} from 'react-chartjs-2';
import { Spinner,Badge,Card } from 'react-bootstrap';
import {BAR,CAR_CAUNT_T} from '../config/state.config'

import './chart.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ParckingDown = () => {
    const [caunt, setCaunt] = useState(85);
    const [bar, setBar] = useState(BAR);
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
        <>
            <div className='pie chart-less' >
            <div className='r-boos-spinner'>
            <Card bg="light" text="dark" style={{ width: '11rem' }}>
                <Card.Body>
                    <h1 className='h1-count-info '>
                        <Badge pil variant="light">{CAR_CAUNT_T} / {caunt}</Badge>
                    </h1>
                    <Spinner animation="grow" variant="danger"/>
                    <Card.Title>Head Parcking</Card.Title>
                </Card.Body>
            </Card>
                
            </div>
                <Doughnut 
                    data={doughnut}
                    options={{
                    title:{
                        display: true,
                        text:``,
                        fontSize: 20
                    },
                legend:{
                    display: false,
                    position: 'bottom'
                }
                }}/>
            </div>
            <div className='bar chart-less'>
                <Radar
                    data={bar}
                    options={{
                        title:{
                            display: true,
                            text:'',
                            fontSize: 30
                        },
                        legend:{
                            display: false,
                            position: 'top'
                        }
                    }}
                    />
            </div>
        </>
    )
}

export default ParckingDown;