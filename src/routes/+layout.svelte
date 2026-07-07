<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.png";

	let { children } = $props();
	let sections = [
		{
			route: "/",
			name: "main",
		},
		{
			route: "/more",
			name: "more",
		},
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="ml-8 mt-3 flex">
	{#each sections as section}
		<a class="m-1 mb-0 italic font-light text-sm" href={section.route}
			>{section.name}</a
		>
	{/each}
</div>

<div class="m-8 mt-1">
	{@render children()}
</div>

<style>
	@import "tailwindcss";
	@theme {
		--font-sans: "Inter", sans-serif; /* This replaces Tailwind's default font! */
	}
</style>
