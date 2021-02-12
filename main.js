// main.js
const {app, BrowserWindow} = require('electron');

let win = null;

app.on('ready', () => {
  win = new BrowserWindow({
    width: 1000,
    height: 780,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile('index.html');

  const contents = win.webContents;
// console.log('Wconts: ', contents);


  win.on('did-finish-load', () => {
    alert('Wconts: ', contents);
  });

});


// function createWindow() {
//   win = new BrowserWindow({
//     width: 1000,
//     height: 780,
//     webPreferences: {
//       nodeIntegration: true
//     }
//   });
//   win.loadFile('index.html');
//   // const cke = win.getElementById('#editor');
//   // console.log('CKE: ', cke);
//   // const contents = win.webContents
//   // console.log('WebContent: ', JSON.stringify(contents));
// }
//
// // app.whenReady().then(createWindow);
//
// app.on('ready', () => {
//   createWindow();
//   win.on('open', () => {
//     win.openDevTools();
//     let cke = win.getElementById('#editor');
//     console.log('CKE: ', cke);
//   });
// });
//
//
// app.on('window-all-closed', () => {
//   app.quit();
// });
//
// app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });
