import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactMessageSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: "Invalid form data", errors: parsed.error.errors });
      }
      const message = await storage.createContactMessage(parsed.data);
      return res.status(201).json({ message: "Message received successfully", id: message.id });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const messages = await storage.getContactMessages();
      return res.json(messages);
    } catch (error) {
      console.error("Get messages error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
