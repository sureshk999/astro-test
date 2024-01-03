// jampack.config.js

export default {
  image: {
    sizes: [50,100,200,250,300,500, 480, 720, 1080], // Specify smaller sizes
    formats: ['webp', 'avif', 'jpg'], // Define desired formats
    compress: true, // Enable compression
    quality: 75, // Adjust quality to balance size and clarity
    // Other image-related configurations
  },
  };