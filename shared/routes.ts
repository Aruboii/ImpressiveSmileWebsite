import { z } from 'zod';
import { insertReviewSchema, reviews, faqs, services } from './schema';

export const api = {
  reviews: {
    list: {
      method: 'GET' as const,
      path: '/api/reviews',
      responses: {
        200: z.array(z.custom<typeof reviews.$inferSelect>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/reviews',
      input: insertReviewSchema,
      responses: {
        201: z.custom<typeof reviews.$inferSelect>(),
      },
    }
  },
  faqs: {
    list: {
      method: 'GET' as const,
      path: '/api/faqs',
      responses: {
        200: z.array(z.custom<typeof faqs.$inferSelect>()),
      },
    },
  },
  services: {
    list: {
      method: 'GET' as const,
      path: '/api/services',
      responses: {
        200: z.array(z.custom<typeof services.$inferSelect>()),
      },
    },
  }
};
