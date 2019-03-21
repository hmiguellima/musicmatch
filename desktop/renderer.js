window.onload = () => {
  const webview = document.querySelector('webview');
  const indicator = document.querySelector('.indicator');

  webview.addEventListener('did-stop-loading', () => {
    indicator.classList.add('hidden');
  });

  webview.addEventListener('dom-ready', () => {
    webview.openDevTools();
  });
}
