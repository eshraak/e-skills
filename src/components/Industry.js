import React from 'react';
import Inventory from './Inventory';
import Order from './Order';
import sampleDeveloppers from '../sample-developpers';
import base from '../base'
import Developper from './Developper';
import { Jumbotron, Grid } from 'react-bootstrap';

class Industry extends React.Component{
	state = {
		developpers: {},
		order: {}
	}
	//lifecycle methods (like doc.ready)
	componentDidMount(){
		const { params } = this.props.match;
		//reinstate our localstorage
		const localStorageRef = localStorage.getItem(params.storeId);
		if(localStorageRef){
			this.setState({ order: JSON.parse(localStorageRef)});
		}
		this.ref = base.syncState(`${params.storeId}/developpers`, {
			context: this,
			state: 'developpers'
		});
	}

	componentDidUpdate(){
		localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
	}

	componentWillUnmount(){
		base.removeBinding(this.ref);
	}

	addDevelopper =  developper => {
		//1. take a copy of the existing state
		const developpers = {...this.state.developpers}
		//2. add our new developper to developpers
		developpers[`developper${Date.now()}`] =developper;
		//3. Set new developpers object to state
		this.setState({developpers})
	}

	updateDevelopper = (key, updateDevelopper) => {
		//1. take a copy of the current developpers
		const developpers = {...this.state.developpers};
		//2. update the developper
		developpers[key] = updateDevelopper;
		//3. set that to state
		this.setState({ developpers });
	}
	
	deleteDevelopper = key =>{
		const developpers = {...this.state.developpers};
		developpers[key] = null;
		this.setState({developpers});
	}

	loadSampleDeveloppers = () =>{
		this.setState({developpers: sampleDeveloppers})
	} 

	addToOrder = key => {
		//1. take a copy of state
		const order = { ...this.state.order};
		//2. Either add to the order, or update the number in our order
		order[key] = order[key]+1 || 1;
		//3. Call setState to update out state object
		this.setState({order});
	}

	removeFromOrder = (key) => {
		const order = { ...this.state.order};
		if(order[key] > 1) order[key] = order[key]-1;
		else {delete order[key];}
		this.setState({order});
	}

	render(){
		return  (
			<Grid>
			<Jumbotron>	
			<div className="container" >
			<div className="row">
					<div >
						{Object.keys(this.state.developpers).map(
							key => <Developper index={key} removeFromOrder={this.removeFromOrder} addToOrder={this.addToOrder} key={key} details={this.state.developpers[key]} />
						)}
					</div>
				</div>
				<div>
				<Order developpers={this.state.developpers} order={this.state.order } /></div>
				<div><Inventory deleteDevelopper={this.deleteDevelopper} updateDevelopper={this.updateDevelopper} developpers={this.state.developpers} addDevelopper={this.addDevelopper} loadSampleDeveloppers={this.loadSampleDeveloppers}/>
			</div>
			</div>
			</Jumbotron>
			</Grid>
			
		);
	}
}

export default Industry;