import { useState, useEffect } from "react"
import "../converter/converter.scss";
import { FaEquals } from "react-icons/fa"
const Converter = (props) => {

	const { rates, defaultCurrencies } = props;

	const [fromPrice, setFromPrice] = useState(1);
	const [toPrice, setToPrice] = useState(1);

	const [fromCurrency, setFromCurrency] = useState("UAH");
	const [toCurrency, setToCurrency] = useState("UAH");

	const onChangeFromPrice = (value) => {
		const price = value / rates[fromCurrency];
		const result = price * rates[toCurrency]
		setToPrice(result.toFixed(2));
		setFromPrice(value);
	}
	const onChangeToPrice = (value) => {
		const result = (rates[fromCurrency] / rates[toCurrency]) * value;
		setFromPrice(result.toFixed(2));
		setToPrice(value);
	}

	useEffect(() => {
		onChangeFromPrice(fromPrice);
	}, [fromCurrency]);


	useEffect(() => {
		onChangeToPrice(toPrice);
	}, [toCurrency]);

	useEffect(() => {
		setFromPrice(1)
		setToPrice(1)
	}, []);


	return (
		<section className="converter">
			<div className="wrapper">
				<div className="converter-form">
					<div className="converter-form__input">
						<input type="number"
							name="input1"
							value={fromPrice}
							onChange={(e) => onChangeFromPrice(e.target.value)}
						/>
						<select defaultValue={fromCurrency}
							onChange={(e) => setFromCurrency(e.target.value)}
						>
							{defaultCurrencies.map((cur) => (
								<option
									key={cur}
									value={cur}>{cur}</option>
							))}

						</select>
					</div>
					<div className="converter__arrow">
						<FaEquals />
					</div>
					<div className="converter-form__input">
						<input type="number"
							name="input2"
							value={toPrice}
							onChange={(e) => onChangeToPrice(e.target.value)}
						/>
						<select defaultValue={toCurrency}
							onChange={(e) => setToCurrency(e.target.value)}>

							{defaultCurrencies.map((cur) => (
								<option
									key={cur}
									value={cur}>{cur}</option>
							))}
						</select>
					</div>
				</div>
			</div>
		</section>
	)

}
export default Converter;