#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('Copying static files to build output...');

// Ensure dist/public directory exists
const distPublicDir = path.join(__dirname, 'dist', 'public');
if (!fs.existsSync(distPublicDir)) {
  fs.mkdirSync(distPublicDir, { recursive: true });
}

// Copy sitemap.xml
const sitemapSource = path.join(__dirname, 'public', 'sitemap.xml');
const sitemapDest = path.join(distPublicDir, 'sitemap.xml');

if (fs.existsSync(sitemapSource)) {
  fs.copyFileSync(sitemapSource, sitemapDest);
  console.log('✓ Copied sitemap.xml');
} else {
  console.log('⚠ sitemap.xml not found in public directory');
}

// Copy robots.txt
const robotsSource = path.join(__dirname, 'public', 'robots.txt');
const robotsDest = path.join(distPublicDir, 'robots.txt');

if (fs.existsSync(robotsSource)) {
  fs.copyFileSync(robotsSource, robotsDest);
  console.log('✓ Copied robots.txt');
} else {
  console.log('⚠ robots.txt not found in public directory');
}

// Copy manifest.json
const manifestSource = path.join(__dirname, 'public', 'manifest.json');
const manifestDest = path.join(distPublicDir, 'manifest.json');

if (fs.existsSync(manifestSource)) {
  fs.copyFileSync(manifestSource, manifestDest);
  console.log('✓ Copied manifest.json');
}

console.log('Static files copy completed!');