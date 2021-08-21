import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/Contacts" exact component={Contact} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
