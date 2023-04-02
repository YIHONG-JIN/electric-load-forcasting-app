const { app, BrowserWindow } = require('electron')

function createWindow () {
    // create the browser window
    let win = new BrowserWindow({
        width: 1600,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false
        }
    })

    // load the previously created index.html file
    win.loadFile('index.html')
}

// open the window when the application is ready
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})


app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})