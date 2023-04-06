import React, { useState } from "react";
import axios from "axios";

export const Services = () => {
return (
	<div className="services">
	<h1>StateStreet Services</h1>
	</div>
);
};

export const ServicesOne = () => {

const[response, setResponse] = useState('');
const handleClick = async() =>{

		const endpoint = 'https://api.openai.com/v1/models';
		
			axios.get(endpoint, {
			headers:{
				Authorization: 'Bearer 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',
			},
		}).then(response => {
		setResponse(response.data);
		}).catch(error => console.log(error));
	
return (
	<div className="services">
	<h1>Ask OpenAI for Smart Contracts Code</h1>
		<div className="inputText">
			<form onSubmit={e => {
			e.preventDefault();
			alert('Submitting!!');
	  		}}>
	  		<input />
			  <button
				onClick={handleClick}
				>
      			Send
      			</button>
	  		</form>
		<textarea className="code-space">
			{response.map(item => `${item}\n`)}
			</textarea>
		<p> API Response: {response.status}</p>
		</div>
	
	</div>
);
};
};

export const ServicesTwo = () => {
return (
	<div className="services">
	<h1>StateStreet Service2</h1>
	</div>
);
};

export const ServicesThree = () => {
return (
	<div className="services">
	<h1>StateStreet Service3</h1>
	</div>
);
};

