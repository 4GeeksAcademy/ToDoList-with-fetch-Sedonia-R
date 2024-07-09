import React from "react";
import { Header } from "./Header";
import { Container } from "./Container";

export const App = () => {
	return (
		<div className="container-flex">
			<Header/>
			<Container/>
		</div>
	);
};