import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "t3-project/server/api/trpc";

export const itemRouter = createTRPCRouter({
  addItem: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { name } = input;
      const item = await ctx.prisma.items.create({
        data: {
          name,
        },
      });
      return item;
    }),
  getAllItems: publicProcedure.query(async ({ ctx }) => {
    const items = await ctx.prisma.items.findMany();
    return items;
  }),
  deleteItem: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { id } = input;
      const deletedItem = await ctx.prisma.items.delete({
        where: {
          id,
        },
      });
      return deletedItem;
    }),
  toggleChecked: publicProcedure
    .input(z.object({ id: z.string(), checked: z.boolean() }))
    .mutation(async ({ input, ctx }) => {
      const { id, checked } = input;
      const item = await ctx.prisma.items.update({
        where: {
          id,
        },
        data: {
          checked,
        },
      });
      return item;
    }),
});
