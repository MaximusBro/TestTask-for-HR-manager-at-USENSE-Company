const CurrecyService = () => {
	const getResource = async (url) => {
		let res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}
		return await res.json();
	}
	const getCurrecy = async () => {
		const res = await getResource("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json");
		return res.map(_transformCurrecy);
	}
	const _transformCurrecy = (currecy) => {
		return {
			cc: currecy.cc,
			rate: currecy.rate
		}
	}
}
export default CurrecyService;