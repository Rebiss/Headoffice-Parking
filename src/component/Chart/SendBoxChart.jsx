import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import UpperParking from './UpperParking';
import LowerParking from './LowerParking';

import 'bootstrap/dist/css/bootstrap.min.css';
import './chart.css';

const SendBoxChart = () => {
	return (
		<div className="content-tab-boos">
			<Tabs defaultActiveKey="Тhe Upper Parking" id="uncontrolled-tab-example">
				<Tab eventKey="Тhe Upper Parking" title="Тhe Upper Parking">
					<UpperParking />
				</Tab>
				<Tab eventKey="Lower Parking" title="Lower Parking">
					<LowerParking />
				</Tab>
			</Tabs>
		</div>
	);
};

export default SendBoxChart;
