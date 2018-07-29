import React, { Component } from 'react';
import StorePicker from './StorePicker';
import { Jumbotron, Grid, Row, Col, Image, Carousel } from 'react-bootstrap';
import sampleDeveloppers from '../sample-developpers';
import './Home.css';

export default class Home extends Component {
  state = {
    developpers: {}
  }

  loadSampleDeveloppers = () =>{
		this.setState({developpers: sampleDeveloppers})
	} 

  render() {
    return (
      <Grid>
        <Jumbotron>
         <center> <h2>Welcome to e-Skills</h2>
          
          <StorePicker history={this.props.history}/></center>
        </Jumbotron>
       
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>Alice</h3>
            <p>Backend developer expert in Java</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-2.jpg" circle className="profile-pic"/>
            <h3>Vanessa</h3>
            <p>Backend developer expert in python</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-3.jpg" circle className="profile-pic"/>
            <h3>Riff</h3>
            <p>Frontend developer in react and redux</p>
          </Col>
        </Row>
        <Carousel>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="assets/achievement.jpg" />
    <Carousel.Caption>
      <h3><strong>Team work</strong></h3>
      <p><strong>Together we achieve more.</strong></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="assets/business.jpg" />
    <Carousel.Caption>
      <h3>Business opprtunity</h3>
      <p>Build a professional career.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="assets/skills.jpg" />
    <Carousel.Caption>
      <h3>For better coding</h3>
      <p>Join us.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>;
      </Grid>
    )
  }
}