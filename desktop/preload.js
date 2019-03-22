const fs = require('fs');
const path = require('path');
const ID3 = require('id3-parser');
// const universalParse = require('id3-parser/lib/universal');

let currentPath = '/';

class Track {
    constructor(filePath) {
        const file = fs.readFileSync(filePath);
        this._tag = ID3.parse(file);
    }

    get album() { return this._tag.album; }

    get artist() { return this._tag.artist; }

    get image() { return this._tag.image; }

    get title() { return this._tag.title; }

    get year() { return this._tag.year; }
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
            .filter(filePath => path.extname(filePath) === '.mp3')
            .map(filePath => new Track(filePath));
    }
};
