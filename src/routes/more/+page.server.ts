import { env } from "$env/dynamic/private";

export async function load() {
	const albumPromise = fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=togarashipep&api_key=${env.LASTFM_TOKEN}&limit=1&period=1month&format=json`)
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
