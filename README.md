# Picpress: Batch Image Compression [![Deploy Next.js site to Pages](https://github.com/coda1997/Picpress/actions/workflows/nextjs.yml/badge.svg)](https://github.com/coda1997/Picpress/actions/workflows/nextjs.yml)

A Next.js web application that compresses multiple images at once using [image-js](https://github.com/image-js/image-js). Users can select images, compress them, then download their compressed versions.

## Features
- Select multiple images for batch compression.  
- Resize and compress images.  
- Download compressed images in one click.

## How It Works
1. Users choose images using a file input.  
2. Selected images are passed to `image-js` for resizing and compression.  
3. Compressed images become available for download in the browser.

## Technology Stack
- [Next.js](https://nextjs.org/)  
- [React](https://reactjs.org/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [image-js](https://github.com/image-js/image-js)  
- [Bun](https://bun.sh/) for local development (optional).

## Setup & Usage
1. Clone or download this repo.  
2. Install dependencies:  
   ```bash
   bun install
3. Run disabled
    ```bash
    bun run dev
4. Open your browser and navigate to `http://localhost:3000`.
