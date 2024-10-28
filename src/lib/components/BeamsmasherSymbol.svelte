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

<div class="flex w-24em gap-4 items-center justify-center md:mr-24 sm:ml-24">
	<h1 class="font-bold lg:text-8xl lg:mr-6 md:text-6xl md:ml-24">{coordinate}</h1>
	<section class="flex min-med:w-fit sm:w-8/12 h-5/6 rounded-lg bg-zinc-800 p-4 shadow-lg items-center text-center md:mr-24 sm:ml-4">
		{#each icons as icon, i}
			<BeamsmasherButton icon={icon} coordinate={coordinate} bind:this="{buttons[i]}" />
		{/each}
	</section>
</div>
