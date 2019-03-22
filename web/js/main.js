import 'aframe';
import 'super-hands';
import 'aframe-extras';

const baseFolder = '/Users/nvi05/Documents/MusicMatchLibrary';
window.fsApi.cd(baseFolder);
const folders = window.fsApi.getFolders();
const rockFolder = folders.find(folder => folder.name === 'rock');
let track;
if (rockFolder) {
  const tracks = rockFolder.open();
  track = tracks[0];
}

let audio;

window.onload = () => {
  if (track) {
    audio = document.querySelector("audio");

    const trackEl = document.querySelector("#track");
    trackEl.setAttribute("data-file", track.filePath);

    const coverEl = trackEl.querySelector(".cover");
    coverEl.setAttribute("src", track.cover);
  }
}

AFRAME.registerComponent('vinyl', {
  init:function() {
     let playing = false;
     this.el.addEventListener('click', (event) => {
          const trackEl = event.currentTarget;
          audio.setAttribute("src", 'file://' + trackEl.getAttribute('data-file'));

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
