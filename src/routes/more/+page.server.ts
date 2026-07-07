import type { PageServerLoad } from './$types';

export const prerender = false;

export const load: PageServerLoad = async ({ platform, setHeaders }) => {
	setHeaders({
		'cache-control': 'public, max-age=3600, s-maxage=3600'
	});

	let token = platform?.env?.LASTFM_TOKEN;
	const albumPromise = fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=togarashipep&api_key=${token}&limit=1&period=1month&format=json`)
		.then(r => r.json())
		.then(res => {
			const album = res?.topalbums?.album?.[0];
			return {
				name: album?.name ?? "Unknown Album",
				artist: album?.artist?.name ?? "Unknown Artist",
			};
		});

	return {
		lazy: {
			albumData: albumPromise
		}
	};
}
