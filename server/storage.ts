import { db } from "./db";
import { 
  reviews, faqs, services,
  type Review, type InsertReview,
  type Faq, type InsertFaq,
  type Service, type InsertService
} from "@shared/schema";

export interface IStorage {
  getReviews(): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;
  
  getFaqs(): Promise<Faq[]>;
  createFaq(faq: InsertFaq): Promise<Faq>;
  
  getServices(): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;
}

export class DatabaseStorage implements IStorage {
  async getReviews(): Promise<Review[]> {
    return await db.select().from(reviews);
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const [review] = await db.insert(reviews).values(insertReview).returning();
    return review;
  }

  async getFaqs(): Promise<Faq[]> {
    return await db.select().from(faqs);
  }

  async createFaq(insertFaq: InsertFaq): Promise<Faq> {
    const [faq] = await db.insert(faqs).values(insertFaq).returning();
    return faq;
  }

  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const [service] = await db.insert(services).values(insertService).returning();
    return service;
  }
}

export const storage = new DatabaseStorage();
