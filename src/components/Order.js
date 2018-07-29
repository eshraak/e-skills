import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component{
	renderOrder = key => { 
		const developper = this.props.developpers[key];
		const count = this.props.order[key];
		const isAvailable = developper && developper.status === 'available';
		//make sure the developper is first loaded from firebase
		if(!developper) return null;
		
		if(!isAvailable){
			return <li key={key}> Sorry {developper ? developper.name : 'developper'} is no longer available </li>
		}
		return <li key={key}>{count} x {developper.name} {formatPrice(count * developper.price)}</li> }
	render(){
		const orderIds = Object.keys(this.props.order);
		const total = orderIds.reduce((prevTotal,key) => {
			const developper = this.props.developpers[key];
			const count = this.props.order[key];
			const isAvailable = developper && developper.status === 'available';
			if(isAvailable){ return prevTotal + (count * developper.price);}
			return prevTotal;
		}, 0);

		return (
			<div className="order-wrap">
			<center>
				<h2>Total Cost</h2>
				<ul className='order'>
					{orderIds.map(this.renderOrder)}
				</ul>
				<div className="total">
					Total : <strong>{formatPrice(total)}</strong>
				</div>
				</center>
			</div>
			
			)
	}
}

export default Order;