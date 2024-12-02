import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getTaxonomy } from '../taxonomyParser.astro';
import config from "@/config/config.json";

export const readCategoryImagesWithFallback = async (): Promise<{ [key: string]: string | null }> => {
  try {
    const categories = await getTaxonomy(config.settings.blog_folder, "categories");

    const categoriesDir = path.join(process.cwd(), 'public', 'images', 'categories');
    const files = fs.readdirSync(categoriesDir);

    const imageMap: { [key: string]: string | null } = {};
    const imageMapFromFiles: { [key: string]: string } = {};

    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'];
    const imageFiles = files.filter(file => imageExtensions.includes(path.extname(file).toLowerCase()));

    imageFiles.forEach(file => {
      const fileNameWithoutExt = path.parse(file).name;
      if (categories.includes(fileNameWithoutExt)) {
        imageMapFromFiles[fileNameWithoutExt] = path.join('/images/categories', file);
      }
    });

    const unassignedCategories = categories.filter(category => !(category in imageMapFromFiles));

    // Randomly assign images to unassigned categories if available
    const remainingImagePaths = imageFiles
      .filter(file => !(Object.values(imageMapFromFiles).includes(path.join('/images/categories', file))))
      .map(file => path.join('/images/categories', file));

    // If there are enough images to assign to unassigned categories
    unassignedCategories.forEach((category, index) => {
      if (index < remainingImagePaths.length) {
        imageMap[category] = remainingImagePaths[index];
      } else {
        imageMap[category] = null;
      }
    });

    Object.assign(imageMap, imageMapFromFiles);

    // Replace backslashes (//) with forward slashes (/)
    const updatedImageMap = Object.fromEntries(
      Object.entries(imageMap).map(([key, value]) => [key, value ? value.replace(/\\/g, '/') : null])
    );

    // console.log(updatedImageMap);
    return updatedImageMap;
  } catch (error) {
    console.error('Error reading category images with fallback:', error);
    return {};
  }
};