const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 250,
    height: 130,
    backgroundColor: '#000000',
    webPreferences: {
      nodeIntegration: true
    },
    icon: path.join(__dirname, 'assets/icon.ico'), // 设置窗口图标
    alwaysOnTop: true, // 将窗口设置为始终置顶
  });

  // 去掉顶部的默认菜单
  win.setMenu(null);

  // 加载index.html文件
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
