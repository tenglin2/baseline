import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Header />
				<img src={logo} className='App-logo' alt='logo' />
				<p>Change Marker</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
				<Navbar />
			</header>
		</div>
	);
}

export default App;
