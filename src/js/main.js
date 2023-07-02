// API
const link =
	'https://api.weatherapi.com/v1/current.json?key=8aeea76358394d7ca05190958230107';

const containerCard = document.querySelector('.card_weather__items');
const searchInput = document.querySelector('#search-input');
const formSearch = document.querySelector('.search__city');

// Object Default Information Weather
let currentWeather = {
	city: 'Atyrau',
	temp: 0,
	isDay: 0,
	description: '',
	lastUpdated: '2023-07-02 00:30',
	properties: {
		cloud: 0,
		humidity: 0,
		windSpeed: 0,
		uv: 0,
		pressure: 0,
		feelslike: 0,
	},
};

// Try GET Info
const fetchData = async () => {
	try {
		const query = localStorage.getItem('query') || currentWeather.city;
		const result = await fetch(`${link}&q=${query}`);
		const data = await result.json();
		const {
			current: {
				feelslike_c: feelslike,
				humidity,
				cloud,
				pressure_in: pressure,
				uv,
				temp_c: temp,
				wind_kph: windSpeed,
				is_day: isDay,
				last_updated: lastUpdated,
				condition: { text: description, icon },
			},
			location: { name },
		} = data;

		currentWeather = {
			...currentWeather,
			city: name,
			temp,
			isDay,
			description,
			lastUpdated,
			icon,
			properties: {
				cloud: `${cloud} %`,
				humidity: `${humidity} °С`,
				windSpeed: `${windSpeed} km/h`,
				pressure: `${pressure} %`,
				feelslike: `${feelslike} °С`,
			},
		};

		renderComponent(markup);
	} catch (err) {
		console.log(err);
	}
};

// GET Main Image
const getImage = (description) => {
	const value = description.toLowerCase();

	switch (value) {
		case 'sunny':
			return 'sunny.png';
			break;
		case 'partly cloudy':
			return 'cloudy.png';
			break;
		case 'mist':
			return 'mist.png';
			break;
		case 'cloudy':
			return 'cloud.png';
			break;
		case 'patchy light rain with thunder':
			return 'rainy-thunder.png';
			break;
		case 'patchy rain possible':
			return 'rainy.png';
			break;
		case 'light rain shower':
			return 'rainy.png';
			break;
		case 'partly':
			return 'partly.png';
			break;
		default:
			return 'sunny.png';
			break;
	}
};

// Render Property Weather Current
const renderProperty = (properties) => {
	const { description, icon } = currentWeather;
	return `
	<div class="container_info">
		<ul class="info__weather">
			<li class="info__weather_item">
				<img
					src="${icon}"
					alt=""
				/>
				<div class="info__w">
					<p>${properties.cloud}</p>
					<p>Cloudy</p>
				</div>
			</li>
			<li class="info__weather_item">
				<img src="public/images/weather/feelslike.svg" alt="" />
				<div class="info__w">
					<p>${properties.feelslike}</p>
					<p>Feelslike</p>
				</div>
			</li>
			<li class="info__weather_item">
				<img src="public/images/weather/humidity.svg" alt="" />
				<div class="info__w">
					<p>${properties.humidity}</p>
					<p>Humidity</p>
				</div>
			</li>
		</ul>
		<ul class="info__weather">
			<li class="info__weather_item">
				<img src="public/images/weather/pressure.svg" alt="" />
				<div class="info__w">
					<p>${properties.pressure}</p>
					<p>Pressure</p>
				</div>
			</li>
			<li class="info__weather_item">
				<img src="public/images/weather/windspeed.svg" alt="" />
				<div class="info__w">
					<p>${properties.windSpeed}</p>
					<p>Wind Speed</p>
				</div>
			</li>
			<li class="info__weather_item">
				<img
					src="public/images/weather/description.svg"
					alt=""
				/>
				<div class="info__w">
					<p>${description}</p>
				</div>
			</li>
		</ul>
	</div>
	`;
};

// Render Weather Current
const markup = () => {
	const { city, temp, properties, description } = currentWeather;

	return `
	<li class="card_weather__item only">
		<div class="card__weather_container">
			<img
			src="public/images/weather/${getImage(description)}"
			alt=""
			class="main__icon_weather"
			/>
			<div class="info__weather_curr">
				<h2>${city} ${temp} °С</h2>
				${renderProperty(properties)}
			</div>
		</div>
	</li>
		`;
};

// Render Component
const renderComponent = (func) => {
	containerCard.innerHTML = func();
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
	fetchData();
};

formSearch.addEventListener('submit', handleSubmit);
searchInput.addEventListener('input', handleSearch);

if (localStorage.getItem('query')) {
	fetchData();
}
