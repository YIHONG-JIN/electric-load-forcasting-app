const { app, BrowserWindow } = require('electron')

function createWindow () {
    // create the browser window
    let win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false
        }
    })

    // load the previously created index.html file
    win.loadFile('index.html')
}



app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})


app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})