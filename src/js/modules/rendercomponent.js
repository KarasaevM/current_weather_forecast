// Render Component
const renderComponent = (current, getImage, markup) => {
	const cityName = document.querySelector('h1'),
		temperature = document.querySelector('.temp'),
		descr = document.querySelector('.description'),
		iconDescr = document.querySelector('.icon__description img');
	const containerSelector = document.querySelector('.info__weather_items');

	cityName.textContent = current.city;
	temperature.textContent = `${current.temp}`;
	descr.textContent = current.description;
	iconDescr.src = current.icon;

	document.body.style.backgroundImage = `url(public/images/weather/${getImage(
		current.description
	)})`;

	containerSelector.innerHTML = markup(current);
};

export default renderComponent;
