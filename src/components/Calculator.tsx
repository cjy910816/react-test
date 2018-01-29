import * as React from 'react';
import { Display } from './calculator/Display';
import { ButtonPanel } from './calculator/ButtonPanel';
import { calculator } from "../logic/calculate";
import './Calculator.css';

interface State {
	total?: string;
	next?: string;
	operation?: string;
}

export class Calculator extends React.Component<{}, State> {

	constructor(props: object) {
		super(props);
		this.state = {};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(buttonName: string) {
		this.setState(calculator.calculate(this.state, buttonName) as State);
	}

	render() {
		return (
			<div className="calculator-app">
				<Display value={this.state.next || this.state.total || '0'}/>
				<ButtonPanel clickHandler={this.handleClick}/>
			</div>
		);
	}
}