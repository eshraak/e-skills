import React, { Fragment} from 'react';
import { Button } from 'react-bootstrap';


class StorePicker extends React.Component {

	
	myInput = React.createRef();
	devInput=React.createRef();
	goToStore = event => {
		
		//1. Stop the form from submitting
		event.preventDefault();
		//2. get the text from the input
		const storeName = this.myInput.current.value;
		//3. change the page to /input
		console.log(this);
		this.props.history.push(`/stores/${storeName}`);
	}

	showDevProfile = event =>{
		event.preventDefault();
		const devName = this.myInput.current.value;
		<div>{this.props.developper.name}
		{this.props.developper.skill}
		{this.props.developper.price}</div>


	}

	//handleClick(){this.showDevProfile();}

	

	
	
	render() {
		return (
			<Fragment>
				
				<form action="" onSubmit={this.goToStore} className="store-selector">
					<div>
						<h2>Campany</h2>
					<input ref={this.myInput} type="text" required placeholder="Campany Name" />
					</div>
					
            <Button bsStyle="primary" type="submit">Developpers industry =></Button> 
			         
        
					
				</form>

			</Fragment>
			)
	}
}

export default StorePicker;