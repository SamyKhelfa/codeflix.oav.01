const fs = require('fs')

let fileContent = fs.readFileSync('env').toString()
let regex = /.*=.*/gm
let found = fileContent.match(regex)
let configFile = 'php.json'

fs.open(configFile, 'w+', function (err, f) {
    if (err) {
        return console.log(err)
    }
})

fs.writeFile(configFile, JSON.stringify(found, null, '\t'), (err) => {
    if (err) throw err;
})

console.log(found)