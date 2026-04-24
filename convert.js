const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, 'images');

async function processImages() {
  try {
    const files = fs.readdirSync(imagesDir);
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = path.join(imagesDir, file);
        const outputPath = path.join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
        
        console.log(`Converting ${file} to WebP...`);
        try {
          await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
          console.log(`Successfully converted to ${outputPath}`);
          
          // Original files might be deleted later, but for now we just create WebP copies.
          // Optional: fs.unlinkSync(inputPath); 
        } catch (err) {
          console.error(`Error converting ${file}:`, err);
        }
      }
    }
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}

processImages();
