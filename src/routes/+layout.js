import config from '$lib/config';

export async function load({ params, url, fetch }) {
    return {
        config
    }
}
