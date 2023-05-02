import { createTRPCRouter } from "t3-project/server/api/trpc";
import { itemRouter } from "t3-project/server/api/routers/itemRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  item: itemRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
