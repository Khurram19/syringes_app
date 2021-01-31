// const {app, BrowserWindow} = require('electron')

// function createWindow() {
//     const win = new createWindow({
//         width: 700,
//         height: 600,
//         webPreferences:{
//             nodeIntegration: true
//         }
//     })
//     win.loadFile('index.html')
// }

// app.whenReady().then(createWindow)

// app.on('window-all-closed', () => {
//     if(process.platform !== 'darwin') {
//         app.quit()
//     }
// })

// app.on('activate', () => {
//     if(BrowserWindow.getAllWindows().length === 0) {
//         createWindow()
//     }
// })

const { app, BrowserWindow } = require("electron");
function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        // width: 800,
        // height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        show: false
        
    });
    win.maximize();
    // and load the index.html of the app.
    win.loadFile("loading.html");
    // win.removeMenu();
    // win.webContents.on('did-finish-load', () => {
    //     /// then close the loading screen window and show the main window
    //     if (loadingScreen) {
    //       loadingScreen.close();
    //     }
    //     win.show();
    //   });

}


app.on("ready", createWindow);
const list = require('./MOCK_DATA.json');



// let loadingScreen;
// const createLoadingScreen = () => {
//   /// create a browser window
//   loadingScreen = new BrowserWindow({});
//   loadingScreen.maximize();
//   loadingScreen.loadFile('loading.html');
//   loadingScreen.on('closed', () => (loadingScreen = null));
//   loadingScreen.webContents.on('did-finish-load', () => {
//     loadingScreen.show();
//   });
// }


// app.on('ready', () => {
//     createLoadingScreen();
//     /// add a little bit of delay for tutorial purposes, remove when not needed
//     setTimeout(() => {
//       createWindow();
//     }, 1000);
//   });