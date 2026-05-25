#!/usr/bin/env node

/**
 * NODRA Token Logo Generator
 * Generates PNG logos from SVG using sharp library
 * Usage: node generate-logos.js
 */

const fs = require('fs');
const path = require('path');

// Import sharp - if not available, provide instructions
let sharp;
try {
    sharp = require('sharp');
} catch (e) {
    console.error('⚠️  sharp library not found.');
    console.log('To generate PNG logos from SVG, run:');
    console.log('  npm install sharp --save-dev');
    console.log('');
    console.log('After installation, run: node generate-logos.js');
    process.exit(1);
}

const svgPath = path.join(__dirname, 'src', 'assets', 'brand', 'nodra-token-logo.svg');
const outputDir = path.join(__dirname, 'src', 'assets', 'brand');

async function generateLogos() {
    try {
        if (!fs.existsSync(svgPath)) {
            console.error(`❌ SVG file not found: ${svgPath}`);
            process.exit(1);
        }

        console.log('🎨 Generating NODRA token logos...\n');

        // Read SVG
        const svgBuffer = fs.readFileSync(svgPath);

        // Generate 512x512 PNG
        console.log('📦 Generating 512x512 PNG...');
        const logo512Path = path.join(outputDir, 'nodra-token-logo-512.png');
        await sharp(svgBuffer)
            .png({ quality: 95, compressionLevel: 9 })
            .resize(512, 512, {
                fit: 'contain',
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            })
            .toFile(logo512Path);
        console.log(`✅ Created: nodra-token-logo-512.png (${(fs.statSync(logo512Path).size / 1024).toFixed(2)} KB)\n`);

        // Generate 256x256 PNG
        console.log('📦 Generating 256x256 PNG...');
        const logo256Path = path.join(outputDir, 'nodra-token-logo-256.png');
        await sharp(svgBuffer)
            .png({ quality: 95, compressionLevel: 9 })
            .resize(256, 256, {
                fit: 'contain',
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            })
            .toFile(logo256Path);
        console.log(`✅ Created: nodra-token-logo-256.png (${(fs.statSync(logo256Path).size / 1024).toFixed(2)} KB)\n`);

        // Generate 128x128 PNG (bonus for small displays)
        console.log('📦 Generating 128x128 PNG (bonus)...');
        const logo128Path = path.join(outputDir, 'nodra-token-logo-128.png');
        await sharp(svgBuffer)
            .png({ quality: 95, compressionLevel: 9 })
            .resize(128, 128, {
                fit: 'contain',
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            })
            .toFile(logo128Path);
        console.log(`✅ Created: nodra-token-logo-128.png (${(fs.statSync(logo128Path).size / 1024).toFixed(2)} KB)\n`);

        console.log('✅ All logos generated successfully!\n');
        console.log('📍 Location: src/assets/brand/\n');
        console.log('Files:');
        console.log('  • nodra-token-logo.svg (512x512 - scalable)');
        console.log('  • nodra-token-logo-512.png (512x512 - primary)');
        console.log('  • nodra-token-logo-256.png (256x256 - secondary)');
        console.log('  • nodra-token-logo-128.png (128x128 - icon)');

    } catch (error) {
        console.error('❌ Error generating logos:', error.message);
        process.exit(1);
    }
}

generateLogos();
