import * as React from "react";
import './Buttons.css';

interface Props {
	name: string;
	orange?: boolean;
	wide?: boolean;
	clickHandler: Function;
}

export class Button extends React.Component<Props, {}> {
	constructor(props: Props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.clickHandler(this.props.name);
	}

	render() {
		const className = [
			"component-button",
			this.props.orange ? "orange" : "",
			this.props.wide ? "wide" : "",
		];

		return (
			<div className={className.join(" ").trim()} >
				<button onClick={this.handleClick} >
					{this.props.name}
				</button>
			</div>
		);
	}
}