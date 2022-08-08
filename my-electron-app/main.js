/**
 * An electron app covers MacOS, Window, and Linux.
 * 
 * There are slightly difference between them
 * 
 */
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  // Create and control browser windows with BrowserWindow
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();

  // MacOS apps generally continue running even without any windows open.
  // Activating the app when no windows are available should open a new one.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// On Windows and Linux, closing all windows will generally quit an application entirely.
// MacOS closes all windows does not necessarily mean close the app
// But on Window and Linux, closing all the windows means close the app
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

console.log(`Hello from Electron 👋`);
