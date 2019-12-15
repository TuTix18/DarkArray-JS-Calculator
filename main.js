// icon by: https://www.flaticon.com/free-icon/calculator_95028?term=Calculator&page=1&position=17
const electron = require('electron')
const { app, BrowserWindow } = require('electron')

function createWindow () {
  let win = new BrowserWindow({
    width: 400,
    height: 350,
    resizable: false,
    icon: __dirname + "/calculator.png",
    webPreferences: {
      nodeIntegration: true
    }
  })
  
  win.setMenu(null);

  win.loadFile('index.html')
}

app.on('ready', createWindow)