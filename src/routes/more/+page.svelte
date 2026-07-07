<script lang="ts">
	let { data } = $props();
</script>

<p class="font-bold">More About Me</p>
<ul class="list-disc pl-5">
	<li class="text-[15px] font-[450]">
		{#await data.lazy.albumData}
			Loading Favorite Album...
		{:then album}
			My favorite album this month is
			<span class="italic font-light">{album.name}</span>
			by
			<span class="italic font-light">{album.artist}</span>
		{/await}
	</li>
</ul>
