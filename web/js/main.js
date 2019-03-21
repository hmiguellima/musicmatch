import 'aframe';
import 'super-hands';
import 'aframe-extras';

const baseFolder = '/tmp/musicmatch';


// Just make sure we have some folders and files
window.fs.mkdir(`${baseFolder}/rock`, { recursive: true }, (err) => {
  if (err) throw err;
});
fs.writeFileSync(`${baseFolder}/rock/example.txt`, 'exampleText');


window.fsApi.cd(baseFolder);
const tracks = window.fsApi.openFolder('rock');
console.log(tracks);
