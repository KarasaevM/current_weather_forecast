// Try GET current Info
const fetchData = async (renderComponent, current, getImage, markup, api) => {
	try {
		const query = localStorage.getItem('query') || current.city;
		const result = await fetch(`${api}&q=${query}`);
		const data = await result.json();

		const {
			current: {
				feelslike_c: feelslike,
				humidity,
				cloud,
				pressure_in: pressureIn,
				pressure_mb: pressureMb,
				uv,
				temp_c: temp,
				wind_kph: windKph,
				wind_mph: windMph,
				gust_kph: gustKph,
				gust_mph: gustMph,
				wind_dir: windDir,
				is_day: isDay,
				last_updated: lastUpdated,
				condition: { text: description, icon },
			},
			location: { name },
		} = data;

		current = {
			...current,
			city: name,
			temp: `${temp}°С`,
			isDay,
			description,
			lastUpdated,
			icon,
			uv: `${uv} / 10+`,
			feelslike: `${feelslike}°С`,
			cloud: `${cloud}%`,
			properties: {
				humidity: `${humidity} %`,
				windKph: `${windKph} kph`,
				windMph: `${windMph} mph`,
				windDir,
				pressureIn: `${pressureIn} mb`,
				pressureMb: `${pressureMb} in`,
				gustKph: `${gustKph} kph`,
				gustMph: `${gustMph} mph`,
			},
		};

		renderComponent(current, getImage, markup);
	} catch (err) {
		console.log(err);
	}
};

export default fetchData;
