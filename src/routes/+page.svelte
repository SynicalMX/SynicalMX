<script lang="ts">
	import SocialNetworks from '$lib/components/SocialNetworks.svelte';
</script>

<main class="flex flex-col items-center justify-center">
	<div class="flex flex-row gap-x-24 items-center justify-center">
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			src="./favicon.png"
			class="mr-1 rounded-full outline outline-4 outline-offset-2 outline-purple-800"
		/>
		<div class="flex h-screen flex-col items-center justify-center">
			<h1 class="text-3xl font-bold">hi.</h1>
			<h2 class="my-6 text-2xl">i'm synical</h2>
			<SocialNetworks />
		</div>
	</div>
</main>

<style>
</style>
