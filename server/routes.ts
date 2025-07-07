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

  // Serve ads.txt file directly from root - support both dev and production paths
  app.get('/ads.txt', (req, res) => {
    // Try multiple possible paths for ads.txt file
    const possiblePaths = [
      path.resolve(import.meta.dirname, '..', 'client', 'ads.txt'),        // Development path
      path.resolve(import.meta.dirname, '..', 'client', 'public', 'ads.txt'), // Public assets path
      path.resolve(import.meta.dirname, '..', 'dist', 'public', 'ads.txt'), // Build output path
      path.resolve(import.meta.dirname, 'ads.txt'),                        // Same directory as server
      path.resolve('ads.txt'),                                             // Root directory
    ];
    
    let adsPath = null;
    for (const testPath of possiblePaths) {
      if (fs.existsSync(testPath)) {
        adsPath = testPath;
        break;
      }
    }
    
    if (!adsPath) {
      return res.status(404).send('ads.txt not found');
    }
    
    // Set proper headers for ads.txt as per IAB standard
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=86400'); // 24 hours cache
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Send the ads.txt file
    res.sendFile(adsPath);
  });

  const httpServer = createServer(app);

  return httpServer;
}
