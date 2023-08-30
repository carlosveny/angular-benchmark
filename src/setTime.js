const { argv } = require('process')
const fs = require('fs')

const file = 'results.json'
const testName = argv[2]

fs.readFile(file, 'utf8', (_, data) => {
  const dataObject = JSON.parse(data || '[]')
  const actualTestIndex = dataObject.findIndex(test => test.name === testName)

  if (actualTestIndex >= 0) {
    dataObject[actualTestIndex].endTime = new Date().getTime()
  } else {
    dataObject.push({
      name: testName,
      startTime: new Date().getTime(),
      endTime: null
    })
  }

  fs.writeFile(file, JSON.stringify(dataObject), (err) => {
    if (err) throw err
  })
})

