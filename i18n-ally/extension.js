const vscode = require('vscode')

const EXT_ID_OLD = 'antfu.i18n-ally'
const EXT_ID_NEW = 'lokalise.i18n-ally'

async function installExt(id) {
  await vscode.commands.executeCommand('workbench.extensions.installExtension', id, true)
}

async function uninstallExt(id) {
  await vscode.commands.executeCommand('workbench.extensions.uninstallExtension', id)
}

async function isExtExist(id) {
  return !!vscode.extensions.getExtension(id)
}

async function activate() {
  if (!(await isExtExist(EXT_ID_NEW))) {
    await installExt(EXT_ID_NEW)
    await uninstallExt(EXT_ID_OLD)
  } else {
    await uninstallExt(EXT_ID_OLD)
  }
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
