import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  orm: {
    adapter: {
      provider: 'mysql',
      url: process.env.DATABASE_URL!,
    },
    family: {},
    target: {},
  },
});
