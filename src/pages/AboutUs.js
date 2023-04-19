import React from "react";
import { FaBlackberry } from "react-icons/fa";
import { RiFontColor } from "react-icons/ri";
import 'bootstrap/dist/css/bootstrap.min.css';

export const AboutUs = () => {
return (
	<div className="form-group">
	<h1 
		style={{
			paddingTop: "10px",
			fontSize:"15px"
			
		}}>
Welcome to our blockchain application!</h1>
<p class="text-justify" style={{position:"relative", marginLeft:"275px", textAlign:"left", top:"20px"}} >
We are a team of passionate innovators dedicated to revolutionizing the way people interact with blockchain technology. 
Our mission is to make blockchain technology accessible and easy to use for everyone.
We believe that blockchain technology has the potential to revolutionize the way we interact with each other and with the world around us. We are committed to creating a secure, reliable, 
and user-friendly platform that allows users to easily access and interact with blockchain technology.
Our team is comprised of experienced developers, designers, and engineers who are passionate about creating a platform that is secure, reliable, and easy to use. We are committed to providing our users with the best possible experience when using our platform.
We are constantly striving to improve our platform and make it even more user-friendly. We are always looking for feedback from our users and are open to suggestions on how to make our platform even better.
We are excited to be part of the blockchain revolution and look forward to helping our users make the most of this revolutionary technology. Thank you for being part of our journey!
</p>	
	</div>
);
};

export const OurAim = () => {
return (
	<div className="home">
	<h1>StateStreet Aim</h1>
	</div>
);
};

export const OurVision = () => {
return (
	<div className="home">
	<h1>StateStreet Vision</h1>
	</div>
);
};
