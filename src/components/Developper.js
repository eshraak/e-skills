import React from 'react';
import {formatPrice} from '../helpers';
import { Col, Image} from 'react-bootstrap';


class Developper extends React.Component{
	render(){
		const {image,name,price, desc,skill,status} = this.props.details;
		const isAvailable = status === 'available';
		return (
          <Col xs={12} sm={4} className="person-wrapper">
				<Image src={image} circle className="profile-pic"  alt={name}/>
				<h3 >{name}
					<span className="price">{formatPrice(price)}</span>
				</h3>
				<p>{desc}</p>
				<p>{skill}</p>
				<button onClick={() => this.props.addToOrder(this.props.index)} disabled={!isAvailable}>{isAvailable ? 'Add to Cart' : 'Not available'}</button>
				<button onClick={() => this.props.removeFromOrder(this.props.index)}>X</button>
				
				</Col>
				
		
			
		
			
			)
	}
}

export default Developper;