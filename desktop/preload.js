const fs = require('fs');
const path = require('path');
const ID3 = require('id3-parser');
// const universalParse = require('id3-parser/lib/universal');

let currentPath = '/';

class Track {
    constructor(filePath) {
        this.filePath = filePath;
        const file = fs.readFileSync(filePath);
        this._tag = ID3.parse(file);
    }

    get album() { return this._tag.album; }

    get artist() { return this._tag.artist; }

    get title() { return this._tag.title; }

    get year() { return this._tag.year; }

    get cover() {
        const mimeType = this._tag.image.mime;
        const imageBuffer = this._tag.image.data;
        const base64Data = imageBuffer.toString('base64');
        return `data:${mimeType};base64,${base64Data}`;
    }
}

class Folder {
    constructor(directoryPath) {
        this.directoryPath = directoryPath;
        this.name = path.basename(directoryPath);
    }

    open() {
        const directoryEntries = fs.readdirSync(this.directoryPath, { withFileTypes: true });
        return directoryEntries
            .filter(directoryEntry => directoryEntry.isFile())
            .map(directoryEntry => path.join(this.directoryPath, directoryEntry.name))
            .filter(filePath => path.extname(filePath) === '.mp3')
            .map(filePath => new Track(filePath));
    }
}

window.fsApi = {
    cd: (path) => {
        currentPath = path;
    },
    getFolders: () => {
        const directoryEntries = fs.readdirSync(currentPath, { withFileTypes: true });
        return directoryEntries
            .filter(directoryEntry => directoryEntry.isDirectory())
            .map(directoryEntry => path.join(currentPath, directoryEntry.name))
            .map(directoryPath => new Folder(directoryPath));
    },
};
