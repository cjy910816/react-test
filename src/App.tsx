import * as React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import {Calculator} from "./components/Calculator";
import {UserBoard} from "./components/UserBoard";

class App extends React.Component {
  render() {
    return (
			<Switch>
				<Route exact path='/' component={Calculator}/>
				<Route path='/user' component={UserBoard}/>
			</Switch>
    );
  }
}

export default App;
