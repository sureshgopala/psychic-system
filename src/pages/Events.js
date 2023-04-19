import React from "react";
import NetworkTests from "../components/NetworkTests";
import Example from "../components/Clicker";

export const Events = () => {
return (
	<div className="events">
	<h1>StateStreet Events</h1>
	</div>
);
};

export const EventsOne = () => {
return (
	<div className="events">
	<NetworkTests />
	</div>
);
};

export const EventsTwo = () => {
return (
	<div className="events">
	<h1>Digital Event2</h1>
	<Example />
	</div>
);
};
