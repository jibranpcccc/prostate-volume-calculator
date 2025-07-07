#!/bin/bash
# Copy ads.txt to production locations
mkdir -p dist/public
cp client/ads.txt dist/public/ads.txt
cp client/ads.txt dist/ads.txt
echo "ads.txt copied to production directories"