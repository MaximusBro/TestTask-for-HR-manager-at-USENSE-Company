import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Converter from './components/converter/Converter';
function App() {
	const [rates, setRates] = useState({})
	const defaultCurrencies = ["UAH", "USD", "EUR", "PLN"];
	useEffect(() => {
		fetch("https://cdn.cur.su/api/latest.json")
			.then(res => res.json())
			.then(json => {
				setRates(json.rates);
			}).catch(err => {
				throw new Error(`Something goes wrong with error ${err}`)
			})
	}, []);
	return (
		<>
			<Header rates={rates} defaultCurrencies={defaultCurrencies} />
			<Converter rates={rates} defaultCurrencies={defaultCurrencies} />
		</>

	);
}

export default App;
