'use strict';
const {BrowserWindow} = require('electron');
const dir = __dirname.replace('scripts', '');

class AppBrowserWindow {
  constructor() {

  }

  newWindow() {
    this.mainWindow = new BrowserWindow({width: 1440, height: 786});
    this.mainWindow.loadURL(`file://${dir}/index.html`);
  }
}

module.exports = new AppBrowserWindow();
