import type { PageServerLoad } from "./$types";

export const prerender = false;

interface AlbumInfo {
  name: string;
  artist: string;
}

export const load: PageServerLoad = async ({ setHeaders }) => {
  setHeaders({
    "cache-control": "public, max-age=3600, s-maxage=3600",
  });

  const apiUrl = "https://api.listenbrainz.org/1/stats/user/togarashipepper/release-groups";
  const albumPromise: Promise<AlbumInfo | null> =
    fetch(`${apiUrl}?range=week&count=1`, {
      headers: {
        "User-Agent":
          "togarashipepper-portfolio/1.0 (https://togarashi.xyz)",
        Accept: "application/json",
      },
    })
      .then(async r => {
        if (r.status === 204 || !r.ok) return null;
        const res = await r.json();
        const album = res.payload.release_groups?.[0];
        return {
          name: album?.release_group_name ?? "Unknown Album",
          artist: album?.artist_name ?? "Unknown Artist",
        };
      }).catch(() => null);

  return {
    lazy: {
      albumData: albumPromise,
    },
  };
};
