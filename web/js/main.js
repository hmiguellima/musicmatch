import aframe from 'aframe';
import 'super-hands';
import 'aframe-extras';
import './multisrc';

aframe.registerComponent('table', {
    init: function() {
        const el = this.el;

        for (let i=0; i<4; i++) {
            const disc = document.createElement('a-entity');

            disc.setAttribute('class', 'cube');
            disc.setAttribute('mixin', 'cube');
            disc.setAttribute('position', {x: i, y: 0, z: 0});
            disc.setAttribute('material', 'src:../assets/samples/disc2.png');
            el.appendChild(disc);    
        }
    }
});