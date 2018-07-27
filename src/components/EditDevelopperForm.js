import React from 'react';
import {Button} from 'react-bootstrap';
import './EditDevelopperForm.css';
class EditDevelopperForm extends React.Component{
	handleChange = (e) => {
		// update developper
		//1. take copy of that developper
		const updatedDevelopper = {...this.props.developper,
		[e.currentTarget.name]: e.currentTarget.value
		};
		this.props.updateDevelopper(this.props.index,updatedDevelopper)
	}
	render(){
		return (
			<div>
			<div className="form-inline">
			    <label>Name</label>
				<input type='text' name='name'  className="form-control" onChange={this.handleChange} value={this.props.developper.name}/>{' '}
				<label>Price</label>
				<input type='text' className="form-control" name='price' onChange={this.handleChange} value={this.props.developper.price} />{' '}
				<label>skill</label>
				<input type='text' name='skill' className="form-control" onChange={this.handleChange} value={this.props.developper.skill} />{' '}
				
				<label>Image</label>
				<input type='text' className="form-control" name='image' onChange={this.handleChange} value={this.props.developper.image}/>{' '}
				</div>
				<div>
				<select type='text' className="form-control" name='status' onChange={this.handleChange} value={this.props.developper.status}>
					<option value="available">available</option>
					<option value="unavailable">unavailable</option>
				</select>
				</div>
				<div className="form-group">
			 <label>Description</label>
				<textarea type='text' className="form-control" name='desc' onChange={this.handleChange} value={this.props.developper.desc}/>{' '}
				</div>
				<Button bsStyle='danger' onClick={() => this.props.deleteDevelopper(this.props.index)} > - Delete this developper</Button>
			</div>
			)
	}
}

export default EditDevelopperForm;