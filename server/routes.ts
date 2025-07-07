import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Serve ads.txt file directly from root
  app.get('/ads.txt', (req, res) => {
    const adsPath = path.resolve(import.meta.dirname, '..', 'client', 'ads.txt');
    
    // Check if ads.txt file exists
    if (!fs.existsSync(adsPath)) {
      return res.status(404).send('ads.txt not found');
    }
    
    // Set proper content-type for ads.txt
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    
    // Send the ads.txt file
    res.sendFile(adsPath);
  });

  const httpServer = createServer(app);

  return httpServer;
}
