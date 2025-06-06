#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building static frontend for Netlify...');

try {
  // Set environment for production
  process.env.NODE_ENV = 'production';
  
  // Change to client directory and build
  process.chdir('./client');
  
  // Run vite build with specific output directory
  execSync('npx vite build --outDir ../dist/public --emptyOutDir', {
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production'
    }
  });
  
  console.log('Static build completed successfully!');
  
  // Verify dist/public exists
  const distPath = path.join(process.cwd(), '../dist/public');
  if (fs.existsSync(distPath)) {
    console.log('Build output directory created:', distPath);
    const files = fs.readdirSync(distPath);
    console.log('Build files:', files);
  }
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}