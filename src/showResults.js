const fs = require('fs')

const file = 'results.json'

fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err

  const [first, ...dataObject] = JSON.parse(data)
  console.log('\x1b[36m%s\x1b[0m', 'RESULTS:')
  const results = [
    ...dataObject,
    first
  ].map(test => ({
    command: test.name,
    'time (seconds)': (test.endTime - test.startTime) / 1000,
    'time (minutes)': parseFloat(((test.endTime - test.startTime) / 60000).toFixed(2))
  }))
  console.table(results)
})
