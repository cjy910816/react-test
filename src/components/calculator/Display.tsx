import * as React from "react";
import './Display.css';

interface Props {
	value: string;
}
export class Display extends React.Component<Props, object>{
	render() {
		return (
			<div className="component-display">
				<div> {this.props.value} </div>
			</div>
		);
	}
}