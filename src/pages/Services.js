import React, { useState } from "react";
import AxiosCallComponent from '../components/Openaicall';
import FileSaver from "../components/FileSaver";
import DeployToChain from "../components/deployToChain";
import MySpinner from "../components/MySpinner";

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
			<AxiosCallComponent />
		</div>
	);
};

export const ServicesTwo = () => {
return (
	<div className="services">
	<FileSaver />
	</div>
);
};

export const ServicesThree = () => {
return (
	<div className="services">
	<h1 style={{marginBottom:"20px"}}>Deploy to Blockchain and Test</h1>
	<DeployToChain />
	</div>
);
};

