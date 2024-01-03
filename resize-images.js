import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceDirectory = './src/images';
const targetDirectory = './public/images';
const sizes = [75,150,200,250,300,450, 600, 900, 1200]; // Sizes for srcset

fs.readdir(sourceDirectory, (err, files) => {
  if (err) {
    console.error("Error reading source directory:", err);
    return;
  }

  files.forEach(file => {
    const extension = path.extname(file);
    const filename = path.basename(file, extension);

    sizes.forEach(size => {
      sharp(`${sourceDirectory}/${file}`)
        .resize(size)
        .toFile(`${targetDirectory}/${filename}-${size}${extension}`, err => {
          if (err) {
            console.error("Error processing file:", file, err);
          } else {
            console.log(`Processed file: ${filename}-${size}${extension}`);
          }
        });
    });
  });
});
