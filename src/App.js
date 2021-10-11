import React from "react";
import "./styles.css";
import {
	Container,
	Button,
	Header,
	Segment	
} from "semantic-ui-react";
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
			<Segment basic inverted padded="very" className="value">
				<h3>INCREASE RANGE OF MOTION</h3>
				<h3>REMOVE RESTRICTIONS</h3>
				<h3>REDUCE RISK OF INJURY</h3>
				<h3>IMPROVE POSTURE</h3>
				<h3>DECREASE WORKOUT RECOVERY TIME</h3>
				<h3>LEARN PROPER SELF-MASSAGE ROUTINES</h3>

				<a href="http://basharfitness.com/">
					<Button size="huge space">Book Session</Button>
				</a>
			</Segment>

			<Segment basic inverted padded="very" className="nomargin background">
				<Header as="h1" textAlign="center" className="sizingMT">
					TESTIMONIALS
				</Header>
			</Segment>
			<div className="ui cards background">
				<div className="ui raised card">
					<div className="content">
						<div className="header">Jenny K.</div>
						<div className="meta">client</div>
						<div className="description">
							"Working with Bashar, has not only increased my physical strength,
							but my self confidence. Bashar cares very much about his clients
							and encouraged them in every way that he can. I greatly appreciate
							all that Bashar has done for me and am so thankful for all the
							time and effort in helping me to achieve my goals now and in the
							future."
						</div>
					</div>
				</div>

				<div className="ui raised card">
					<div className="content">
						
						<div className="header">Christopher M.</div>
						<div className="meta">client</div>
						<div className="description">
							"My Physical Therapist recommended stretching. I'm beyond grateful
							to have found Bashar. He's knowledgeble and truly understands the
							body. I alway leave feeling better than when I walked in. "
						</div>
					</div>
				</div>
				<div className="ui raised card">
					<div className="content">
						<div className="header">Sarah P.</div>
						<div className="meta">client</div>
						<div className="description">
							"Bashar has helped improve my flexibility by loosening my muscles
							and keeping me limber. Our stretch and massage sessions are truly
							a joy. I wouldn't trust anyone but him with my body."
						</div>
					</div>
				</div>

				<div className="ui raised card">
					<div className="content">
						<div className="header">Andrea</div>
						<div className="meta">client</div>
						<div className="description">
							"As a healthcare professional, I am a very discerning client. I
							was reluctant to think a "trainer" could help with my chronic hip
							pain, but Bashar has worked miracles. The best way to describe his
							approach, is that it is individual. Bashar has an amazing capacity
							for directing me to exercises that relieve my pain and keep me
							running. I sometimes describe the way I feel after a workout is
							that I feel like I've had a wonderful massage, but I did it in a
							workout!"
						</div>
					</div>
				</div>
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
