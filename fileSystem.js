const fs = require('fs');
const path = require('path');

const readDir = dirPath=> {
    const stats = fs.readdirSync(dirPath);
    const dirItems = [];

    stats.map(dirItem => {
        const itemPath = path.join(dirPath, dirItem);
        const isDir = fs.existsSync(itemPath) && fs.lstatSync(itemPath).isDirectory();
        const item = isDir ? { name: dirItem, path: itemPath, type: 'directory' } : { name: dirItem, path: itemPath, type: 'file' }

        dirItems.push(item);
    });

    return dirItems
}

module.exports = {
    readDir
};