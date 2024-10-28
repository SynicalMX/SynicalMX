<script lang="ts">
	import { setContext } from "svelte";
	import BeamsmasherSymbol from "$lib/components/BeamsmasherSymbol.svelte";
	const coordinates = ["X", "Y", "Z"];
	let symbols: BeamsmasherSymbol[] = [];
	let code: HTMLHeadingElement;

	setContext("Beamsmasher", {
		updateCode: () => {
			let x = symbolToNum(symbols[0]?.getSelectedSymbol() as string)
			let y = symbolToNum(symbols[1]?.getSelectedSymbol() as string)
			let z = symbolToNum(symbols[2]?.getSelectedSymbol() as string)
			
			let finalX = numToStr((2 * x) + 11);
			let finalY = numToStr(((2 * z) + y) - 5);
			let finalZ = numToStr(Math.abs((y + z) - x));
			code.innerText = `${finalX} ${finalY} ${finalZ}`
		}
	});

	function symbolToNum(symbol: string): number {
		switch(symbol) {
			case "xl":
				return 22;
			case "xr":
				return 21;
			case "cross":
				return 20;
			case "bottom":
				return 11;
			case "top":
				return 10;
			case "empty":
				return 0;
			default:
				return 0;	
		}
	}

	function numToStr(num: number): string {
		if (num <= 9) {
			return `0${Math.abs(num)}`
		} else {
			return `${num}`
		}
	}
</script>

<svelte:head>
	<title>Terminus Beamsmasher Calculator</title>
</svelte:head>

<main class="flex h-screen flex-col items-center justify-center lg:space-y-5 mg:space-y-3, sm:space-y-1">
	<h1 class="font-bold lg:text-6xl">Enter your symbols.</h1>
	{#each coordinates as coordinate, i}
		<BeamsmasherSymbol coordinate={coordinate} bind:this="{symbols[i]}" />
	{/each}
	<h1 class="font-bold lg:text-8xl md:text-6xl sm:text-9xl" bind:this="{code}">00 00 00</h1>
</main>
