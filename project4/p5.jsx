import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route, Link } from "react-router-dom";

import States from './components/states/States';
import Example from './components/example/Example';
import Header from './components/header/Header';
import "./p5.css";

class Page extends React.Component{
	
	render(){
		return (
		<HashRouter>
			<div>
				<br></br>
					<div className='toolbar'>
						<Link className='button' to="/states">States</Link>
						<Link className='button' to="/example">Example</Link>	
					</div>
					<Route path="/states" component={States}></Route>
					<Route path="/example" component={Example}></Route>	
			</div>
		</HashRouter>
		);	
	}
}

ReactDOM.render(
	<div>
		<Header />
		<Page />
	</div>,
	document.getElementById('reactapp'),
	);