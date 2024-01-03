// srcsetGenerator.js
export function generateSrcset(filename) {
    const sizes = [75,150,200,250,300,450, 600, 900, 1200];
    return sizes.map(size => `/public/images/${filename}-${size}.jpg ${size}w`).join(', ');
  }
  