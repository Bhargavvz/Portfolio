import { mkdir } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createImageDirectory = async () => {
    try {
        const publicDir = join(__dirname, '..', 'public');
        const imagesDir = join(publicDir, 'images');
        
        await mkdir(publicDir, { recursive: true });
        await mkdir(imagesDir, { recursive: true });
        
        console.log('Successfully created public/images directory');
    } catch (error) {
        console.error('Error creating directories:', error);
    }
};

createImageDirectory();
