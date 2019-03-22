import aframe from 'aframe';
import 'super-hands';
import 'aframe-extras';
import 'aframe-teleport-controls';
import 'aframe-environment-component';
import 'aframe-event-set-component';

let openDiscs = [
    {
        name: 'Music 1',
        cover: '../assets/samples/disc1.png'
    },
    {
        name: 'Music 2',
        cover: '../assets/samples/disc2.png'
    },
    {
        name: 'Music 3',
        cover: '../assets/samples/disc3.png'
    },
    {
        name: 'Music 4',
        cover: '../assets/samples/disc4.png'
    },
    {
        name: 'Music 5',
        cover: '../assets/samples/disc5.png'
    },
    {
        name: 'Music 6',
        cover: '../assets/samples/disc6.png'
    },
    {
        name: 'Music 7',
        cover: '../assets/samples/disc7.jpg'
    },
    {
        name: 'Music 8',
        cover: '../assets/samples/disc8.jpg'
    },
    {
        name: 'Music 9',
        cover: '../assets/samples/disc9.jpg'
    },
    {
        name: 'Music 10',
        cover: '../assets/samples/disc10.jpg'
    },
    {
        name: 'Music 11',
        cover: '../assets/samples/disc1.png'
    },
    {
        name: 'Music 12',
        cover: '../assets/samples/disc2.png'
    },
    {
        name: 'Music 13',
        cover: '../assets/samples/disc3.png'
    },
    {
        name: 'Music 14',
        cover: '../assets/samples/disc4.png'
    },
    {
        name: 'Music 15',
        cover: '../assets/samples/disc5.png'
    },
    {
        name: 'Music 16',
        cover: '../assets/samples/disc6.png'
    },
    {
        name: 'Music 17',
        cover: '../assets/samples/disc7.jpg'
    },
    {
        name: 'Music 18',
        cover: '../assets/samples/disc8.jpg'
    },
    {
        name: 'Music 19',
        cover: '../assets/samples/disc9.jpg'
    },
    {
        name: 'Music 20',
        cover: '../assets/samples/disc10.jpg'
    },
];

aframe.registerComponent('discs', {
    init: function() {
        const el = this.el;

        setTimeout(() => {
            for (let i=0; i<openDiscs.length; i++) {
                const disc = document.createElement('a-entity');
    
                disc.setAttribute('class', 'disc');
                disc.setAttribute('mixin', 'disc');
                disc.setAttribute('position', {x: (i % 4) * 0.28, y: 0, z: -Math.trunc(i / 4)  * 0.28});
                disc.setAttribute('material', `src:${openDiscs[i].cover}`);
                disc.addEventListener('dragover-start', function(ev) {
                    console.log('dragover-start', ev, ev.target, ev.currentTarget, ev.srcElement);
                });
                el.appendChild(disc);    
            }
        }, 100);
    }
});

aframe.registerComponent('turntable', {
    init: function() {
        const el = this.el;
        el.addEventListener('play-disc', (ev) => {console.log('play-disc', ev)});
    }
});

aframe.registerComponent('color-randomizer', {
    play: function () {
      this.el.addEventListener('drag-drop', function (evt) {
        evt.detail.dropped.setAttribute('material', 'color',
          '#'+(Math.random()*0xFFFFFF<<0).toString(16))
      })
    }
});
