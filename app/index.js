'use strict';
const {app} = require('electron');
const browserWindow = require('./scripts/browser-window.js');
class App {
  constructor() {
    app.on('ready', () => {
      browserWindow.newWindow()
    });
  }
}

module.exports = new App();
