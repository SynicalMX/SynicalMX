<script lang="ts">
	let currentText: string = '';
	let currentParagraph: number = 0;
	let idx: number = 0;
	let interval: NodeJS.Timeout;
	let cursorVisible = true;

	let isTyping: boolean = false;

	const paragraphs: string[] = [
		'I code things.',
		'Pokémon enthusiast.',
		'17 years old.',
	];

	function stopTyping() {
		clearInterval(interval);
		interval = setInterval(eraseParagraph, 75);
	}

	function eraseParagraph() {
		cursorVisible = true;
		if (currentText !== '') {
			idx--;
			let newText = currentText.slice(0, idx);
			currentText = newText;
		} else {
			currentParagraph++;
			if (currentParagraph == 3) currentParagraph = 0;
			clearInterval(interval);
			interval = setInterval(typeChar, 150);
		}
	}

	function typeChar() {
		cursorVisible = !cursorVisible;
		let paragraph: string = paragraphs[currentParagraph] as string;
		if (idx < paragraph.length) {
			isTyping = true;
			currentText += paragraph[idx];
			idx++;
		} else {
			stopTyping();
			return;
		}
	}

	interval = setInterval(typeChar, 150);
</script>

<h2 class="text-3xl font-bold mb-50em object-scale-down">
	{currentText}
	{#if cursorVisible}
		<span>|</span>
	{/if}
</h2>
