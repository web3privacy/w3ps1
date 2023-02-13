import config from '$lib/config.json';

export async function load({ params, url, fetch }) {
	return {
		config
	};
}
