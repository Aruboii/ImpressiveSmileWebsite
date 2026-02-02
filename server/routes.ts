import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { sql } from "drizzle-orm";
import { reviews } from "@shared/schema";
import { db } from "./db";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Reviews
  app.get(api.reviews.list.path, async (req, res) => {
    const reviews = await storage.getReviews();
    res.json(reviews);
  });

  app.post(api.reviews.create.path, async (req, res) => {
    const review = await storage.createReview(req.body);
    res.status(201).json(review);
  });

  // FAQs
  app.get(api.faqs.list.path, async (req, res) => {
    const faqs = await storage.getFaqs();
    res.json(faqs);
  });

  // Services
  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  // Seed/Reset Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  // Clear existing reviews to update them with real names
  await db.delete(reviews);

  await storage.createReview({
    name: "Sandeep S.",
    rating: 5,
    comment: "The Doctor is very good has a very pleasing personality, she handled my son who is just 5 and could figure out the problem quickly. Highly impressed with her skills.",
    date: "2023-10-15"
  });
  await storage.createReview({
    name: "Rohan K.",
    rating: 5,
    comment: "Dr. Madhulika is very gentle, patient and caring. I went for a post RCT crown fitting. It was a complex case, but she handled it with ease.",
    date: "2023-11-20"
  });
  await storage.createReview({
    name: "Priya S.",
    rating: 5,
    comment: "Doctor Madhulika is friendly and listens patiently. Her clinic is very neat and clean. Best dental experience I've had.",
    date: "2023-12-05"
  });
  await storage.createReview({
    name: "Amit V.",
    rating: 5,
    comment: "Very professional and reasonable pricing. Focuses on the issue rather than money. Highly recommend.",
    date: "2024-01-12"
  });
  await storage.createReview({
    name: "Ananya R.",
    rating: 5,
    comment: "Best dental clinic in HSR. Dr. Madhulika's diagnosis is spot on. She handled a complex root canal very efficiently.",
    date: "2024-02-15"
  });
  await storage.createReview({
    name: "Vikram Singh",
    rating: 5,
    comment: "Excellent service. The clinic is hygienic and the doctor is very knowledgeable. My 6 year old was very comfortable.",
    date: "2024-03-01"
  });
}
