import { Container } from 'react-bootstrap';
import './App.css';
import { Footer, Header } from './components';
import { HomeScreen, ProductDetails } from './screens';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Header />
			<main className='m-3'>
				<Container>
					<Route path='/' component={HomeScreen} exact />
					<Route path='/product/:id' component={ProductDetails} />
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
