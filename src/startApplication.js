const fs = require('fs')
const process = require('child_process')
const treeKill = require('tree-kill')

const file = 'config/config.json'
fs.readFile(file, 'utf8', (_, data) => {
  const dataObject = JSON.parse(data)
  const cmd = process.spawn(`cd ${dataObject.repoName} && npm run dev:ssr`, { shell: true })

  cmd.stdout.on('data', (output) => {
    if (output.toString().includes('localhost:4200')) {
      cmd.stdin.pause()
      treeKill(cmd.pid, 'SIGTERM', function (err) {
        if (err) {
          console.error('Error killing process tree:', err)
        } else {
          console.log('\x1b[0m', 'Process tree terminated.')
        }
      })
    }
    console.log(output.toString())
  })

  cmd.stderr.on('data', (err) => console.log(err.toString()))

})
