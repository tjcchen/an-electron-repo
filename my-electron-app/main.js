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
});

console.log(`Hello from Electron 👋`);
