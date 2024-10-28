import { router, publicProcedure, authedProcedure } from '../trpc';
import { z } from 'zod';

let quoteTimestamp: number = 0;
let todaysQuote: string = '';

export const appRouter = router({
	greeting: publicProcedure.query(async ({ input }) => {
		const now = Date.now();
		if (now > quoteTimestamp + 8.64e7) {
			quoteTimestamp = now;
			const res = await fetch(
				'https://gist.githubusercontent.com/robatron/a66acc0eed3835119817/raw/77493d3ddf69fbd9d69997e22e1a7c6c70c8bdf2/quotes.txt',
			);
			const quoteBlock = await res.text();
			const quotes = quoteBlock.split('\n');
			quotes.pop();
			const quoteIdx = Math.floor(Math.random() * (quotes.length - 0) + 0);
			todaysQuote = quotes[quoteIdx] as string;
			// console.log("BEGIN QUOTE BLOCK");
			// console.log(quoteBlock);
			// console.log("END QUOTE BLOCK");
			// console.log("todaysQuote:", todaysQuote);
			// console.log("idx:", quoteIdx);
			// console.log("length:", quotes.length)
		}
		return todaysQuote;
	}),
	me: publicProcedure.query(({ ctx }) => {
		return ctx.user;
	}),
	secret: authedProcedure.query(({ ctx }) => {
		// This is a protected route
		return `Hello, ${ctx.user.username}!`;
	}),
});

export type AppRouter = typeof appRouter;
