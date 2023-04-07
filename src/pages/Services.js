import React, { useState } from "react";
import AxiosCallComponent from '../components/Openaicall';

export const Services = () => {
return (
	<div className="services">
		<h1>StateStreet Services</h1>
	</div>
);
};

export const ServicesOne = () => {
	return (
		<div className="services">
			<h1>Ask Open AI</h1>
			<AxiosCallComponent />
		</div>
	);
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

