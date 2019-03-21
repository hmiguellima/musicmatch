import 'aframe';
import 'super-hands';
import 'aframe-extras';

console.log(window.fsApi);

window.fsApi.mkdir('/tmp/musicmatch/a', { recursive: true }, (err) => {
  if (err) throw err;
});
