import "../header/header.scss";
import "../header/media.scss";
const Header = (props) => {
	const { defaultCurrencies, rates } = props


	return (
		<header className="header">
			<div className="wrapper">
				<div className="header__logo">
					<h1><a href="v">Currency converter</a></h1>
				</div>
				<div className="header-currecy">
					<ul className="header-currecy__list">
						{defaultCurrencies.map((cur) => (
							<li key={cur}
							>{`${cur}: ${rates[cur]} `}
							</li>
						))}
					</ul>
				</div>
			</div>
		</header>
	)

}
export default Header;