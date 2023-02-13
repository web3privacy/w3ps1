import config from '$lib/config.yaml';

export async function load({ params, url, fetch }) {
	return {
		config
	};
}
