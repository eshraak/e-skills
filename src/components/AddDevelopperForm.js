import React from 'react';
import './AddDevelopperForm.css';
import { Button } from 'react-bootstrap';
class AddDevelopperForm extends React.Component{

	state = {
		onSubmit: false
	}
	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	descRef = React.createRef();
	imageRef = React.createRef();
	skillRef = React.createRef();

	 changeColor=(btn)=> {
		console.log(btn)
		console.log('hi')
		this.setState({onSubmit: !this.state.onSubmit})
	  }

    

	

	createDevelopper = (e) => {
		e.preventDefault();
		const developper = {
			name: this.nameRef.current.value,
			price: parseFloat(this.priceRef.current.value),
			status: this.statusRef.current.value,
			desc: this.descRef.current.value,
			image: this.imageRef.current.value,
			skill: this.skillRef.current.value,
		}
		this.props.addDevelopper(developper);
		//reset the form
		e.currentTarget.reset();
	}

	
 
	render(){
		const { onSubmit } = this.state
		return (<div >
	        <form onSubmit={this.createDevelopper}>
	             <div className="form-inline" >
	            <label>Name</label>
				<input ref={this.nameRef} className="form-control" name="name" type="text" placeholder="Name"/>{' '}
				<label>Price</label>
				<input ref={this.priceRef} className="form-control" name="price" type="text" placeholder="Price"/>
				{' '}
				<label>skill</label>
				<input ref={this.skillRef} className="form-control" name="skill" type="text" placeholder="Skill"/>
				{' '}
				<label>Image</label>
				<input ref={this.imageRef} className="form-control" name="image" type="text" placeholder="Image"/>
				</div>
				<div className="form-group">
				<label>Status</label>
				<select  ref={this.statusRef} className="form-control" name="status">
					<option value="available">Available!</option>
					<option value="unavailable">Not Avaible</option>
				</select>
				</div>
				<div className="form-group">
				<label>Description</label>
				<textarea ref={this.descRef} className="form-control" name="desc" type="text" placeholder="Desc"/>
				</div>
				<center><div>
				<button type="button" onClick={ () => this.changeColor(this)} class="btn btn-default btn-lg">
                <span style={ onSubmit ? {color:'red'} : {} } className="glyphicon glyphicon-star-empty" aria-hidden="true"></span> 
                </button>
				</div></center>
				<div>
				<Button  bsStyle="primary" type="submit">+ Add Developper</Button>
				</div>
			</form>
			</div>
		)
		
		
	}
	
}

export default AddDevelopperForm;