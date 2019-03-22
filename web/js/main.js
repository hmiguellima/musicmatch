import aframe from 'aframe';
import 'super-hands';
import 'aframe-extras';
import 'aframe-teleport-controls';
import 'aframe-environment-component';
import 'aframe-event-set-component';

/*
import 'aframe-physics-system';
import 'aframe-physics-extras';
*/

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

        for (let i=0; i<openDiscs.length; i++) {
            const disc = document.createElement('a-box');

            disc.setAttribute('class', 'cube');
            //disc.setAttribute('mixin', 'cube');
            disc.setAttribute('hoverable', '');
            disc.setAttribute('grabbable', '');
            disc.setAttribute('stretchable', '');
            disc.setAttribute('draggable', '');
            disc.setAttribute('dropppable', '');
            disc.setAttribute('width', 0.2);
            disc.setAttribute('height', 0.2);
            disc.setAttribute('depth', 0.2);
            disc.setAttribute('src', `${openDiscs[i].cover}`);

            disc.setAttribute('position', {x: (i % 5) * 0.8, y: 0, z: -Math.trunc(i / 5)  * 0.8});
            // disc.setAttribute('material', `src:${openDiscs[i].cover}`);
            el.appendChild(disc);    
        }
    }
});

function createDiscCollection() {
    let el = document.getElementById('discCollection');
    for (let i=0; i<openDiscs.length; i++) {
        const disc = document.createElement('a-box');

        disc.setAttribute('class', 'cube');
        disc.setAttribute('mixin', 'scube');
        disc.setAttribute('width', 0.2);
        disc.setAttribute('height', 0.2);
        disc.setAttribute('depth', 0.2);
        disc.setAttribute('src', `${openDiscs[i].cover}`);

        disc.setAttribute('position', {x: (i % 5) * 0.8, y: 0, z: -Math.trunc(i / 5)  * 0.8});
        // disc.setAttribute('material', `src:${openDiscs[i].cover}`);
        el.appendChild(disc);
    }
}


window.onload = function WindowLoad(event) {
   //createDiscCollection();
}


aframe.registerComponent('testlog', {
    init: function() {
        this.el.addEventListener('gripdown', () => {
            console.log('gripdown');
        });
        this.el.addEventListener('gripup', () => {
            console.log('gripup');
        });
    }
});

aframe.registerComponent('testhover', {
    init: function() {
        this.el.addEventListener('hover-start', () => {
            console.log('hover-start');
        });
    }
});

if (window.fsApi) {
    window.fsApi.mkdir('/tmp/musicmatch/a', { recursive: true }, (err) => {
        if (err) throw err;
    });      
}
