<script lang="ts">
	import { setContext, getContext } from "svelte";
	import BeamsmasherButton from "./BeamsmasherButton.svelte";
	export let coordinate: string;

	let buttons: BeamsmasherButton[] = []
	const icons = ["xl", "xr", "cross", "bottom", "top", "empty"];

	const context: never = getContext("Beamsmasher");
	const updateCode: () => void = context["updateCode"]

	setContext("BeamsmasherButtons", {
		clearAllButtons: (exception: string) => {
			buttons.forEach((button) => {
				if (button.icon !== exception) button.deselect();
			})
			updateCode();
		}
	})

	export function getSelectedSymbol(): string {
		let symbol: string = "";
		buttons.forEach((button) => {
			if (button.isSelected()) symbol = button.getSymbol();
		})
		return symbol;
	}

	export function getCoordinate(): string {
		return coordinate;
	}
</script>

<div class="flex w-fit gap-4 items-center">
	<h1 class="font-bold text-8xl mr-24">{coordinate}</h1>
	<section class="flex w-fit h-5/6 rounded-lg bg-zinc-800 p-4 shadow-lg items-center text-center mr-24">
		{#each icons as icon, i}
			<BeamsmasherButton icon={icon} coordinate={coordinate} bind:this="{buttons[i]}" />
		{/each}
	</section>
</div>
