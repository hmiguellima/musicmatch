const fs = require('fs');
const path = require('path');

let currentPath = '/';

function buildTrack(folderName, fileName) {
    const filePath = path.join(currentPath, folderName, fileName);
    const file = fs.readFileSync(filePath);
    const track = {
        name: fileName
    }
    return track;
}

window.fsApi = {
    cd: (path) => {
        currentPath = path;
    },
    openFolder: (folderName) => {
        const folderPath = path.join(currentPath, folderName);
        const fileNames = fs.readdirSync(folderPath);
        return fileNames.map(function(fileName) {
            return buildTrack(folderName, fileName);
        });
    }
};
