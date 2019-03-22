import 'aframe';
import 'super-hands';
import 'aframe-extras';

const baseFolder = '/Users/nvi05/Documents/MusicMatchLibrary';
window.fsApi.cd(baseFolder);
const folders = window.fsApi.getFolders();
const rockFolder = folders.find(folder => folder.name === 'rock');
let audio;

window.onload = () => {
  audio = document.querySelector("audio");
  if (rockFolder) {
    const tracks = rockFolder.open();
    const sceneEl = document.querySelector('a-scene');
    let posX = -2.333;
    console.log(tracks);
    for (const track of tracks) {
      const vinylEl = document.createElement('a-entity');
      vinylEl.setAttribute('vinyl', "");
      vinylEl.setAttribute('data-audio-file', track.filePath)
      const trackEl = document.createElement('a-box');
      trackEl.setAttribute('src', track.cover);
      trackEl.setAttribute('class', 'cover');
      trackEl.setAttribute('rotation', '90 180 0');
      trackEl.setAttribute('position', `${posX} 2.973 0`);
      trackEl.setAttribute('depth', '0.04');
      trackEl.setAttribute('width', '1.2');
      trackEl.setAttribute('height', '1.2');
      trackEl.setAttribute('shader', 'flat');
      vinylEl.appendChild(trackEl);
      sceneEl.appendChild(vinylEl);
      posX -= 2;
    }
  }
}

AFRAME.registerComponent('vinyl', {
  init:function() {
     let playing = false;
     this.el.addEventListener('click', (event) => {
          const trackEl = event.currentTarget;
          audio.setAttribute('src', 'file://' + trackEl.getAttribute('data-audio-file'));

          if(!playing) {
              audio.play();
           } else {
              audio.pause();
              audio.currentTime = 0;
           }
           playing = !playing;
     });
  }
})
