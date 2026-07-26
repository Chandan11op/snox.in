const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, 'src', 'assets', 'products');

const newFolders = [
    'BUTTERFLYVALVE',
    'BALLVALVE',
    'NRV',
    'SIGHTGLASS',
    'DIAPHRAGMVALVE',
    'TUBING',
    'SANITARYACCESSORY',
    'SANITARYVALVE',
    'DAIRYFITTING'
];

newFolders.forEach(folder => {
    const folderPath = path.join(productsDir, folder);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }
});

const moveFile = (sourceDir, fileName, targetDir) => {
    const sourcePath = path.join(productsDir, sourceDir, fileName);
    const targetPath = path.join(productsDir, targetDir, fileName);
    if (fs.existsSync(sourcePath)) {
        fs.renameSync(sourcePath, targetPath);
    }
};

// TRICLOVERVALVE
if (fs.existsSync(path.join(productsDir, 'TRICLOVERVALVE'))) {
    const tricloverValveFiles = fs.readdirSync(path.join(productsDir, 'TRICLOVERVALVE')).filter(f => fs.lstatSync(path.join(productsDir, 'TRICLOVERVALVE', f)).isFile());
    tricloverValveFiles.forEach(file => {
        const lowerFile = file.toLowerCase();
        if (lowerFile.includes('butterfly')) {
            moveFile('TRICLOVERVALVE', file, 'BUTTERFLYVALVE');
        } else if (lowerFile.includes('ball')) {
            moveFile('TRICLOVERVALVE', file, 'BALLVALVE');
        } else if (lowerFile.includes('nrv')) {
            moveFile('TRICLOVERVALVE', file, 'NRV');
        } else if (lowerFile.includes('sight')) {
            moveFile('TRICLOVERVALVE', file, 'SIGHTGLASS');
        } else if (lowerFile.includes('diaphragm')) {
            moveFile('TRICLOVERVALVE', file, 'DIAPHRAGMVALVE');
        } else {
            moveFile('TRICLOVERVALVE', file, 'SANITARYVALVE');
        }
    });
}

// FITTINGS
if (fs.existsSync(path.join(productsDir, 'FITTINGS'))) {
    const fittingsFiles = fs.readdirSync(path.join(productsDir, 'FITTINGS')).filter(f => fs.lstatSync(path.join(productsDir, 'FITTINGS', f)).isFile());
    fittingsFiles.forEach(file => {
        const lowerFile = file.toLowerCase();
        if (lowerFile.includes('ballvalve')) {
            moveFile('FITTINGS', file, 'BALLVALVE');
        }
    });
}

console.log("Restructuring complete.");
