import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceDirectory = './src/images';
const targetDirectory = './public/images';
const sizes = [50,100,150,200,250,300,450,600,900, 1200]; // Sizes for srcset
const quality = 75; // Quality setting

if (!fs.existsSync(targetDirectory)) {
  fs.mkdirSync(targetDirectory, { recursive: true });
}

fs.readdir(sourceDirectory, (err, files) => {
  if (err) {
    console.error("Error reading source directory:", err);
    return;
  }

  files.forEach(file => {
    const extension = path.extname(file).toLowerCase();
    const filename = path.basename(file, extension);

    sizes.forEach(size => {
      // Resize and convert to JPEG
      sharp(`${sourceDirectory}/${file}`)
        .resize(size)
        .jpeg({ quality })
        .toFile(`${targetDirectory}/${filename}-${size}.jpg`, err => {
          if (err) console.error("Error processing JPEG file:", file, err);
        });

      // Resize and convert to WebP
      sharp(`${sourceDirectory}/${file}`)
        .resize(size)
        .webp({ quality })
        .toFile(`${targetDirectory}/${filename}-${size}.webp`, err => {
          if (err) console.error("Error processing WebP file:", file, err);
        });

      // Resize and convert to AVIF
      sharp(`${sourceDirectory}/${file}`)
        .resize(size)
        .avif({ quality })
        .toFile(`${targetDirectory}/${filename}-${size}.avif`, err => {
          if (err) console.error("Error processing AVIF file:", file, err);
        });
    });
  });
});
