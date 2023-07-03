// GET Main Image
const getImageBackground = (description) => {
	const value = description.toLowerCase();

	switch (value) {
		case 'sunny':
			return 'sunny.jpg';
			break;
		case 'partly cloudy':
			return 'partly-cloudy.jpg';
			break;
		case 'mist':
			return 'mist.jpg';
			break;
		case 'cloudy':
			return 'cloudy.jpg';
			break;
		case 'patchy light rain with thunder':
			return 'rainy-thunder.jpg';
			break;
		case 'patchy rain possible':
			return 'rainy.jpg';
			break;
		case 'light rain shower':
			return 'rainy.jpg';
			break;
		case 'partly':
			return 'partly.jpg';
			break;
		case 'moderate or heavy rain with thunder':
			return 'rainy-thunder.jpg';
			break;
		default:
			return 'sunny.jpg';
			break;
	}
};

export default getImageBackground;
