import config from '$lib/config.yaml';

export async function load({ params, url, fetch }) {
	let resp;
	try {
		resp = await fetch(config.badgesApiUrl + '/badges');
	} catch {}

	const badges = resp ? await resp.json() : [];

	return {
		config,
		badges
	};
}
