import config from '$lib/config.yaml';

export async function load({ params, url, fetch }) {
	const resp = await fetch(config.badgesApiUrl + '/badges');
	const badges = await resp.json();

	return {
		config,
		badges
	};
}
