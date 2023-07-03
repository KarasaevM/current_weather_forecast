// Render Weather Current
function markup(current) {
	const {
		temp,
		feelslike,
		cloud,
		uv,
		properties: {
			pressureIn,
			pressureMb,
			windKph,
			windMph,
			humidity,
			windDir,
			gustKph,
			gustMph,
		},
	} = current;

	return `
	<li class="info__weather_item">
		<div class="option__weather_temp">
			<ul class="option__items">
				<li class="option__item" id="temp">Температура:</li>
				<li class="option__item" id="feelslike">Ощущается:</li>
				<li class="option__item" id="cloud">Облачность:</li>
				<li class="option__item" id="uv">UV Индекс:</li>
			</ul>
		</div>
		<div class="information__from_option">
		<ul class="option__items">
		<li class="option__item" id="temp">${temp}</li>
		<li class="option__item" id="feelslike">${feelslike}</li>
		<li class="option__item" id="cloud">${cloud}</li>
		<li class="option__item" id="uv">${uv}</li>
	</ul>
		</div>
	</li>
	<li class="info__weather_item">
		<div class="pressure__container">
			<h3>Давление</h3>
			<img src="public/images/weather/pressure.svg" alt="" />
			<div class="info__weather_options">
				<p>${pressureMb}</p>
				<p>${pressureIn}</p>
			</div>
		</div>
	</li>
	<li class="info__weather_item">
		<div class="pressure__container">
			<h3>Скорость в.</h3>
			<img src="public/images/weather/windspeed.svg" alt="" />
			<div class="info__weather_options">
				<p>${windMph}</p>
				<p>${windKph}</p>
			</div>
		</div>
	</li>
	<li class="info__weather_item">
		<div class="pressure__container">
			<h3>Влажность</h3>
			<img src="public/images/weather/humidity.svg" alt="" />
			<div class="info__weather_options">
				<p>${humidity}</p>
			</div>
		</div>
	</li>
	<li class="info__weather_item">
		<div class="pressure__container">
			<h3>Порыв</h3>
			<img src="public/images/weather/pressure.svg" alt="" />
			<div class="info__weather_options">
				<p>${gustMph}</p>
				<p>${gustKph}</p>
			</div>
		</div>
	</li>
		`;
}

export default markup;
