import getImageBackground from './modules/getimage';
import markup from './modules/markup';
import renderComponent from './modules/rendercomponent';
import fetchData from './services/service';

// API
const link =
	'https://api.weatherapi.com/v1/current.json?key=8aeea76358394d7ca05190958230107';

const searchInput = document.querySelector('#search'),
	formSearch = document.querySelector('.search__weather');

// Default Information Weather Current
let currentWeather = {
	city: 'Atyrau',
	temp: 0,
	isDay: 0,
	description: '',
	feelslike: 0,
	cloud: 0,
	uv: 0,
	properties: {
		humidity: 0,
		windKph: 0,
		windMph: 0,
		gustKph: 0,
		gustMph: 0,
		windDir: '',
		pressureIn: 0,
		pressureMb: 0,
	},
};

// Event Search
const handleSearch = (e) => {
	currentWeather = {
		...currentWeather,
		city: e.target.value,
	};
};

// Event Submit
const handleSubmit = (e) => {
	e.preventDefault();

	const value = currentWeather.city;

	localStorage.setItem('query', value);
	fetchData(renderComponent, currentWeather, getImageBackground, markup, link);
};

formSearch.addEventListener('submit', handleSubmit);
searchInput.addEventListener('input', handleSearch);

if (localStorage.getItem('query')) {
	fetchData(renderComponent, currentWeather, getImageBackground, markup, link);
}
