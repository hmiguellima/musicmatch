const fs = require('fs');
const path = require('path');
const ID3 = require('id3-parser');
const express = require('express');

const app = express();
const port = 3000;

class Track {
    constructor(filePath) {
        this.filePath = filePath;
        const file = fs.readFileSync(filePath);
        const tag = ID3.parse(file);

        this.album = tag.album;
        this.artist = tag.artist;
        this.title = tag.title;
        this.year = tag.year;
    }

    cover(tag) {
        const mimeType = tag.image.mime;
        const imageBuffer = tag.image.data;
        const base64Data = imageBuffer.toString('base64');
        return `data:${mimeType};base64,${base64Data}`;
    }
}

class Folder {
    constructor(directoryPath) {
        this.name = path.basename(directoryPath);
        this.tracks = this.tracks(directoryPath);
    }

    tracks(directoryPath) {
        const directoryEntries = fs.readdirSync(directoryPath, { withFileTypes: true });
        return directoryEntries
            .filter(directoryEntry => directoryEntry.isFile())
            .map(directoryEntry => path.resolve(directoryPath, directoryEntry.name))
            .filter(filePath => path.extname(filePath) === '.mp3')
            .map(filePath => new Track(filePath));
    }
}

app.get('/getFolders', (_req, res) => {
    const currentPath = './songs'
    const directoryEntries = fs.readdirSync(currentPath, { withFileTypes: true });
    const folders = directoryEntries
        .filter(directoryEntry => directoryEntry.isDirectory())
        .map(directoryEntry => path.join(currentPath, directoryEntry.name))
        .map(directoryPath => new Folder(directoryPath));

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(folders));
});

app.get('/getTracks/:folderName', (req, res) => {
    req.params.folderName


    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(folders));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
