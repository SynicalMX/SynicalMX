<script lang="ts">
	export let title: string;
	export let link: string;
	export let newTab: boolean = true;
</script>

<section class="flex w-1/3 flex-col gap-2 rounded-lg bg-zinc-800 p-4 shadow-lg items-center text-center">
	<h1 class="mb-2 text-xl font-bold">{title}</h1>
	<slot />
	{#if newTab}
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			class="mt-auto pt-3 text-right text-blue-400 hover:underline"
		>
			Goto ➡️
		</a>
	{:else}
		<a
		href={link}
		rel="noreferrer"
		class="mt-auto pt-3 text-right text-blue-400 hover:underline"
		>
			Goto ➡️
		</a>
	{/if}
</section>
