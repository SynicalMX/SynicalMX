<script lang="ts">
	import { getContext } from "svelte";

	const context: never = getContext("BeamsmasherButtons");
	const clearAllButtons: (icon: string) => void = context["clearAllButtons"]
	export let icon: string;
	export let coordinate: string;
	export let selected = false;

	export function select() {
		selected = true;
		clearAllButtons(icon);
	}

	export function deselect() {
		selected = false;
	}

	export function isSelected(): boolean {
		return selected;
	}
	
	export function getSymbol(): string {
		return icon;
	}
</script>

{#if !selected}
<button on:click={select}>
	<!-- svelte-ignore a11y-missing-attribute -->
	<img src={"beamsmasher/" + icon + ".svg"}>
</button>
{:else}
<button class="outline outline-slate-50 rounded-md">
	<!-- svelte-ignore a11y-missing-attribute -->
	<img src={"beamsmasher/" + icon + ".svg"}>
</button>
{/if}

<style>
	img {
    	user-drag: none;
    	-webkit-user-drag: none;
    	user-select: none;
    	-moz-user-select: none;
    	-webkit-user-select: none;
    	-ms-user-select: none;
	}
</style>
