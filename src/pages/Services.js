import React, { useState } from "react";
import AxiosCallComponent from '../components/Openaicall';
import FileSaver from "../components/FileSaver";

export const Services = () => {
return (
	<div className="services">
		<h1>StateStreet Services</h1>
	</div>
);
};

export const ServicesOne = () => {
	return (
		<div style={{backgroundColor: "white"}} className="services">
			<h1>Ask Open AI</h1>
			<AxiosCallComponent />
		</div>
	);
};

export const ServicesTwo = () => {
return (
	<div className="services">
	<h1 style={{marginBottom: "50px"}}>Storing Files and Generating Test Cases </h1>
	<FileSaver />
	</div>
);
};

export const ServicesThree = () => {
return (
	<div className="services">
	<h1>Deploy to Blockchain and Test</h1>
	</div>
);
};

