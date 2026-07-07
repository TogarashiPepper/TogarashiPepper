import { LASTFM_TOKEN } from "$env/static/private";

export async function load() {
	const albumPromise = fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=togarashipep&api_key=${LASTFM_TOKEN}&limit=1&period=1month&format=json`)
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
