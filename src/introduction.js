const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log('\x1b[33m%s\x1b[0m', 'WARNING')
console.log('This benchmark calculates the performance of your computer when cloning, installing, and running an Angular Projects')
console.log('In order to get the most accurate results close any existing applications, except from this one.')
console.log('\x1b[32m')

readline.question('Press any key to start the test... ', () => {
  console.log('\x1b[0m')
  readline.close()
});
