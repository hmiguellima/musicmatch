const fs = require('fs');
const path = require('path');

let currentPath = '/';

class Track {
}

window.fsApi = {
    cd: (path) => {
        currentPath = path;
    },
    openFolder: (folderName) => {
        const folderPath = path.join(currentPath, folderName);
        const directoryEntries = fs.readdirSync(folderPath, { withFileTypes: true });
        return directoryEntries
            .filter(directoryEntry => directoryEntry.isFile())
            .map(directoryEntry => path.join(currentPath, folderName, directoryEntry.name))
            .map(filePath => new Track(filePath));
    }
};
