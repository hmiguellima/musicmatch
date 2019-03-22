import 'aframe';
import 'super-hands';
import 'aframe-extras';

const baseFolder = '/';

window.fsApi.cd(baseFolder);
const folders = window.fsApi.getFolders();
console.log(folders);
const rockFolder = folders.find(folder => folder.name === 'rock');
if (rockFolder) {
  const tracks = rockFolder.open();
  console.log(tracks);
}
