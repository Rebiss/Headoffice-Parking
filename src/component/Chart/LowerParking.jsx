import React, { Fragment, useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Spinner, Badge, Card, ProgressBar, Button } from 'react-bootstrap';
import { CAR_CAUNT_T, STATIC_DATA } from '../config/state.config';
import { LineChart } from 'react-chartkick';

import './chart.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const LowerParking = () => {
	const [ caunt, setCaunt ] = useState(0);
	const [ open, setOpen ] = useState(false);
	const doughnut = {
		labels: [ 'Busy', 'Free' ],
		datasets: [
			{
				data: [ `${caunt}`, `${CAR_CAUNT_T - caunt}` ],
				backgroundColor: [ 'rgba(255, 0, 0, 1)', 'rgba(192, 226, 236, 0.6)' ]
			}
		]
	};

	useEffect(() => {
		const interval = setInterval(async () => {
			const response = await fetch('http://localhost:9011/upper');

			if (response.status === 200) {
				const { data } = await response.json();
				if (data < CAR_CAUNT_T) {
					console.log('***Upper***', data);
					setCaunt(data);
				}
			}
		}, 9000);
	}, []);

	const percent = Math.round(caunt * 100 / CAR_CAUNT_T);
	const handleOpenButton = () => {
		setOpen(!open);
	};

	return (
		<Fragment>
			<div className="pie chart-less">
				<div className="r-boos-spinner">
					<Button onClick={handleOpenButton} className="btn-static-coo" variant="light">
						Static
					</Button>
					<Card bg="light" text="dark" style={{ width: '16rem' }}>
						<Card.Body>
							<h1 className="h1-count-info ">
								<Badge pil variant="light">
									{CAR_CAUNT_T} / {caunt}
								</Badge>
							</h1>
							<Spinner animation="grow" variant="danger" />
							<Card.Title>Lower Parking</Card.Title>
						</Card.Body>
					</Card>
					<div>
						<ProgressBar variant="danger" animated now={`${percent}`} label={`${percent}%`} />
					</div>
				</div>
				<Doughnut
					data={doughnut}
					options={{
						title: { display: true, text: ``, fontSize: 20 },
						legend: { display: true, position: 'bottom' }
					}}
				/>
			</div>
			{open && (
				<div className="line-chart-graph">
					<LineChart data={STATIC_DATA} />
				</div>
			)}
		</Fragment>
	);
};

export default LowerParking;
