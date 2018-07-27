import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
       
        <Grid>
        
          <Col xs={12} sm={8} smOffset={2}>
           
            <h3>E-skills</h3>
            <p><em><strong>Web site for all computer science company</strong></em> </p>
            <p>First step enter your company name then add your employees and their skill with their cost</p>
            <p>Also you can edit or delete them</p>
            <p>We can make you suggestion for the emplyees </p>
            <Image src="assets/about.jpg" className="header-image" />
          </Col>
        </Grid>
      </div>
    )
  }
}