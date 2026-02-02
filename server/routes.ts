import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

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

  // Seed Data if empty
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingReviews = await storage.getReviews();
  if (existingReviews.length === 0) {
    await storage.createReview({
      name: "Patient Parent",
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
      rating: 4,
      comment: "Very professional and reasonable pricing. Focuses on the issue rather than money. Highly recommend.",
      date: "2024-01-12"
    });
  }

  const existingFaqs = await storage.getFaqs();
  if (existingFaqs.length === 0) {
    await storage.createFaq({
      question: "Do I need to book an appointment?",
      answer: "Yes, Dr. Madhulika Singh only accepts pre-booked appointments. Please call 9980020321 to schedule your visit."
    });
    await storage.createFaq({
      question: "What are your clinic timings?",
      answer: "We are open Monday to Saturday. Morning: 10:00 AM - 1:00 PM. Evening: 6:00 PM - 9:00 PM."
    });
    await storage.createFaq({
      question: "Is Root Canal Treatment painful?",
      answer: "Modern RCT is performed under local anesthesia and is generally painless. Dr. Madhulika ensures a comfortable experience."
    });
    await storage.createFaq({
      question: "Do you treat children?",
      answer: "Yes, we provide pediatric dental care and Dr. Madhulika is known for her gentle approach with children."
    });
  }

  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    await storage.createService({
      title: "Cosmetic Dentistry",
      description: "Smile design, veneers, and aesthetic makeovers to give you the perfect smile.",
      icon: "Sparkles"
    });
    await storage.createService({
      title: "Root Canal Treatment",
      description: "Pain-free advanced RCT to save infected teeth.",
      icon: "Activity" // Using standard Lucide names
    });
    await storage.createService({
      title: "Orthodontics",
      description: "Braces and aligners for teeth straightening.",
      icon: "Smile"
    });
    await storage.createService({
      title: "General Dentistry",
      description: "Fillings, cleaning, and routine checkups.",
      icon: "Stethoscope"
    });
    await storage.createService({
      title: "Kids Dentistry",
      description: "Gentle dental care for children.",
      icon: "Baby"
    });
    await storage.createService({
      title: "Crowns & Bridges",
      description: "High-quality prosthetics to restore tooth function.",
      icon: "Crown"
    });
  }
}
