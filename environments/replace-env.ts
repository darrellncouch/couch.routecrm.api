import * as fs from 'fs';
import * as path from 'path';

const env = process.env.NODE_ENV || 'development';
const sourceFile = env === 'production' ? 'environment.prod.js' : 'environment.dev.js';
const targetFile = 'environment.js';
const envDir = path.join(__dirname, "../dist/environments");
console.log(envDir);

// Ensure environments directory exists
if (!fs.existsSync(envDir)) {
    console.error('Environments directory does not exist');
    process.exit(1);
}

const sourcePath = path.join(envDir, sourceFile);
const targetPath = path.join(envDir, targetFile);

// Copy the appropriate environment file
try {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied ${sourceFile} to ${targetFile} in environments folder`);
} catch (error) {
    console.error(`Error copying ${sourceFile} to ${targetFile}:`, error);
    process.exit(1);
}

// Delete the dev and prod files
const filesToDelete = ['environment.dev.js', 'environment.prod.js'];
filesToDelete.forEach((file) => {
    const filePath = path.join(envDir, file);
    try {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log(`Deleted ${file} from environments folder`);
        }
    } catch (error) {
        console.error(`Error deleting ${file}:`, error);
    }
});