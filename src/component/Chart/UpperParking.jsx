import React, { Fragment, useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Spinner, Badge, Card, ProgressBar, Button } from 'react-bootstrap';
import { CAR_CAUNT_D, STATIC_DATA } from '../config/state.config';
import { LineChart } from 'react-chartkick';

import './chart.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpperParking = () => {
	const [ caunt, setCaunt ] = useState(0);
	const [ open, setOpen ] = useState(false);
	const percent = Math.round(caunt * 100 / CAR_CAUNT_D);
	const doughnut = {
		labels: [ 'Busy', 'Free' ],
		datasets: [
			{
				data: [ `${caunt}`, `${CAR_CAUNT_D - caunt}` ],
				backgroundColor: [ 'rgba(255, 0, 0, 1)', 'rgba(192, 226, 236, 0.6)' ]
			}
		]
	};

	useEffect(() => {
		const interval = setInterval(async () => {
			const response = await fetch('http://localhost:9011/count');

			if (response.status === 200) {
				const { data } = await response.json();
				setCaunt(data);
			}
		}, 5000);
	}, []);

	const handleOpenButton = () => {
		setOpen(!open);
	};

	return (
		<Fragment>
			<div className="pie chart-less">
				<div className="r-boos-spinner">
					<Button onClick={handleOpenButton} variant="light" className="btn-static-coo">
						Static
					</Button>
					<Card bg="light" text="dark" style={{ width: '16rem' }}>
						<Card.Body>
							<h1 className="h1-count-info ">
								<Badge pil variant="light">
									{CAR_CAUNT_D} / {caunt}
								</Badge>
							</h1>
							<Spinner animation="grow" variant="danger" />
							<Card.Title>Тhe Upper Parking</Card.Title>
						</Card.Body>
					</Card>
					<div>
						<ProgressBar animated variant="danger" now={`${percent}`} label={`${percent}%`} />
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

export default UpperParking;
