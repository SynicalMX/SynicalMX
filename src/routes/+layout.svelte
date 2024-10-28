<script lang="ts">
	import '../app.css';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import { inject } from '@vercel/analytics'
	import type { LayoutData } from './$types';
	import { trpc } from '$lib/trpc';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	export let data: LayoutData;

	const queryClient = trpc.hydrateFromServer(data.trpc);

	// analytics
	inject();
	injectSpeedInsights();
</script>

<QueryClientProvider client={queryClient}>
	<slot />
</QueryClientProvider>
