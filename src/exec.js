const { argv } = require('process');
const fs = require('fs')
const process = require('child_process');

const file = 'config/config.json'
const command = argv[2]
const key = argv[3]
const extraArgs = argv[4] || ''

fs.readFile(file, 'utf8', (_, data) => {
  const dataObject = JSON.parse(data)
  process.execSync(`${command} ${dataObject[key]} ${extraArgs}`, { stdio: [0, 1, 2] });
})
