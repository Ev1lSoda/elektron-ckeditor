// main.js
const {app, BrowserWindow} = require('electron');

let mainWindow;

// Create a new BrowserWindow when `app` is ready
function createWindow () {

  mainWindow = new BrowserWindow({
    width: 1000, height: 800,
    title: 'CDKElectron',
    icon: './assets/favicon.ico',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  // Load index.html into the new BrowserWindow
  mainWindow.loadFile('index.html')

  // Open DevTools - Remove for PRODUCTION!
  mainWindow.webContents.openDevTools();
  // this method allow code injection
  // mainWindow.webContents.executeJavaScript('window.editor')
  //   .then( res => console.log(res))
  //   .catch( e => console.error(e));

  // Listen for window being closed
  mainWindow.on('closed',  () => {
    mainWindow = null
  })
}

// Electron `app` is ready
app.on('ready', createWindow);
// app.on('ready', () => {
//
//   // console.log(app.getPath('desktop'))
//   // console.log(app.getPath('music'))
//   // console.log(app.getPath('temp'))
//   // console.log(app.getPath('userData'))
//
//   createWindow()
// })

// Quit when all windows are closed - (Not macOS - Darwin)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
