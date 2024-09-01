import process from 'process';
import { router, publicProcedure } from '../trpc';

const DISCORD_USER_API: string = "https://discord.com/api/v10/users/319948810505682944";

export const appRouter = router({
	discord: publicProcedure
		.query(() => {
			return false
		}),
});

export type AppRouter = typeof appRouter;
