import React from "react";
import "./styles.css";
import { Container, Button, Header, Segment } from "semantic-ui-react";
import logo from "./images/FullLogo-Footer.png";



const App = () => {
	return (
		<Container fluid className="container">
			<Segment basic inverted padded="very" vertical>
				<Header as="h1" textAlign="center">
					Power Stretch
					<hr />
				</Header>
				<Header textAlign="center">
					One-on-one stretch and release work in New York City.
				</Header>
			</Segment>

			<div className="value">
				<h3>INCREASE RANGE OF MOTION</h3>
				<h3>REMOVE RESTRICTIONS</h3>
				<h3>REDUCE RISK OF INJURY</h3>
				<h3>IMPROVE POSTURE</h3>
				<h3>DECREASE WORKOUT RECOVERY TIME</h3>
				<h3>LEARN PROPER SELF-MASSAGE ROUTINES</h3>

				<a href="http://basharfitness.com/">
					<Button size="huge space">Book Session</Button>
				</a>
			</div>

			<div className="grid">
				<h2 className="time-col">Available Every Day 8AM - 8PM</h2>
				<div className="logo-col">
					<img src={logo} alt="logo" />
				</div>
			</div>

			<div className="footer">
				<p>
					<a href="mailto:info@basharfitness.com">INFO@BASHARFITNESS.COM</a> |
					917.545.3170 300-302 WEST 38TH ST, 3RD FLOOR
				</p>
			</div>
		</Container>
	);
};

export default App;
