/**
 * This file contains the root router of your tRPC-backend
 */
import { userRouter } from "./user";
import { publicProcedure, router } from "../trpc";

export const appRouter = router({
  healthcheck: publicProcedure.query(() => "yay!"),
  user: userRouter,
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
