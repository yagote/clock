const { app, BrowserWindow } = require('electron');

function createWindow () {
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    backgroundColor: '#000000',
    webPreferences: {
      nodeIntegration: true
    }
  });

  // 加载index.html文件
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
