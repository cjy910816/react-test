import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Calculator} from "./components/Calculator";

ReactDOM.render(
	<Calculator/>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
