// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

console.log("Link established!")

const NewBrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

const newWindowBtn = document.getElementById('new-window')

newWindowBtn.addEventListener('click', function (event) {
  const modalPath = path.join('file://', __dirname, '../../sections/windows/modal.html')
  let win = new NewBrowserWindow({ width: 400, height: 320 })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
})


const ManageBrowserWindow = require('electron').remote.BrowserWindow
// const path = require('path')

const manageWindowBtn = document.getElementById('manage-window')
let win

manageWindowBtn.addEventListener('click', function (event) {
  const modalPath = path.join('file://', __dirname, '../../sections/windows/manage-modal.html')
  win = new ManageBrowserWindow({ width: 400, height: 275 })
  win.on('resize', updateReply)
  win.on('move', updateReply)
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
  function updateReply () {
    const manageWindowReply = document.getElementById('manage-window-reply')
    const message = `Size: ${win.getSize()} Position: ${win.getPosition()}`
    manageWindowReply.innerText = message
  }
})
