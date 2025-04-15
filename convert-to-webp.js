const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");

const assetsFolder = "./public/assets"; // Base folder for images

// Function to convert an image to WebP and replace it
const convertToWebP = async (filePath) => {
  try {
    const outputFilePath = filePath.replace(/\.\w+$/, ".webp"); // Replace extension with .webp

    await sharp(filePath)
      .resize({ width: 1200 }) // Resize to max 1200px (adjust as needed)
      .webp({ quality: 80 }) // Convert to WebP with 80% quality
      .toFile(outputFilePath);

    // Wait a short time before deleting to ensure the file is not in use
    setTimeout(() => {
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`❌ Cannot delete ${filePath}:`, err);
        } else {
          console.log(`✅ Converted & Replaced: ${outputFilePath}`);
        }
      });
    }, 500); // Delay delete by 500ms

  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error);
  }
};

// Function to recursively process images in all folders
const processImages = async (dir) => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);

    if (fs.lstatSync(filePath).isDirectory()) {
      await processImages(filePath); // Recursively process subfolders
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      await convertToWebP(filePath); // Convert only image files
    }
  }
};

// Run the script
processImages(assetsFolder).then(() => console.log("🎉 All images converted to WebP!"));
