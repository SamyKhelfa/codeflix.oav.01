const fs = require('fs')

let fileContent = fs.readFileSync('php.ini').toString()
let regex = /^[[\w][^\n]*/gm
let found = fileContent.match(regex)
let configFile = 'result.json'

fs.open(configFile, 'w+', function (err, f) {
    if (err) {
        return console.log(err)
    }
})

fs.writeFile(configFile, JSON.stringify(found, null, '\t'), (err) => {
    if (err) throw err;
})
