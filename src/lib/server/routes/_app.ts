import { router, publicProcedure, authedProcedure } from '../trpc';
import { z } from 'zod';

let quoteTimestamp: number = 0;
let todaysQuote: string = "";

export const appRouter = router({
	greeting: publicProcedure
		.query(({ input }) => {
			let now = Date.now();
			// if (now > (quoteTimestamp + 8.64e7)) {
				quoteTimestamp = now;
				fetch("https://gist.githubusercontent.com/robatron/a66acc0eed3835119817/raw/77493d3ddf69fbd9d69997e22e1a7c6c70c8bdf2/quotes.txt").then((res) => {
					if (!res.ok) {
						throw Error("Failed to fetch quotes!");
					}
					
					let quoteBlock = res.text.toString()
					let quotes = quoteBlock.split("\n");
					let quoteIdx = Math.random() * (quotes.length - 0) + 0;
					todaysQuote = quotes[quoteIdx] as string;
				});
				
			//}
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
