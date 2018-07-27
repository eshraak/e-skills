import React from 'react';
import AddDevelopperForm from './AddDevelopperForm';
import EditDevelopperForm from './EditDevelopperForm';



class Inventory extends React.Component{
	render(){
		return (
			<div className="inventory">
				<h2>Developper details</h2>
				{Object.keys(this.props.developpers).map(key => <EditDevelopperForm deleteDevelopper={this.props.deleteDevelopper} updateDevelopper={this.props.updateDevelopper} developper={this.props.developpers[key]} index={key}  key={key}/>)}
				<AddDevelopperForm addDevelopper={this.props.addDevelopper} />
				{//<button onClick={this.props.loadSampleDeveloppers}> Load Sample developpers</button>//
				}
			</div>
			)
	}
}

export default Inventory;