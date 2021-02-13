// empty for now
const {ipcRenderer} = require('electron');

document.querySelector('#btn-submit').addEventListener('click', () => {
  const editorData = editor.getData();
  ipcRenderer.send('ckeditor:getData', {editorData});
});
