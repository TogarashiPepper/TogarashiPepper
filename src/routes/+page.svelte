<script>
	let rad_rosa_prefix = "https://radicle.network/nodes/rosa.radicle.network";
	let projects = [
		{
			link: "https://github.com/TogarashiPepper/abacas/",
			content: "Abacas (team member)",
		},
		{
			link: `${rad_rosa_prefix}/rad%3Az2dHYDVZoUt2Gh5ArfLjQkzaqjcYE`,
			content: "Typit (coauthor)",
		},
		{
			link: `${rad_rosa_prefix}/rad%3AzyXkMerfX6MwHbbTE6PWYVBwRK9j`,
			content: "Ultimengine",
		},
		{
			link: `${rad_rosa_prefix}/rad%3AzyXkMerfX6MwHbbTE6PWYVBwRK9j`,
			content: "Koan",
		},
	];
</script>

<div class="flex items-center">
	<p class="font-bold">TogarashiPepper</p>
	<p class="ml-1 text-[15px] text-gray-500">he/any</p>
</div>
<p class="w-[30vw] text-pretty font-normal">
	Sometimes I make things; sometimes they work. Student and programmer currently
	working on a computer algebra system.
</p>
<p class="mt-4 font-bold">Projects</p>
<ul class="list-disc pl-5">
	{#each projects as project}
		<li class="text-[15px] -m-1 underline font-[450]">
			<a href={project.link} class="text-inherit hover:underline"
				>{project.content}</a
			>
		</li>
	{/each}
</ul>
