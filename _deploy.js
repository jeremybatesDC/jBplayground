//Rsync
const Rsync = require('rsync')
var path = require('path')

// Credentials
const directory = 'appseed2'
const localPath = './'
const hostname = '45.55.149.252'
const username = 'brightfind'
const hostDestination = `/var/www/html/${directory}`

const rsync = new Rsync()
.set('progress')
.shell('ssh')
.flags('aRz')
.source(localPath)
.destination(`${username}@${hostname}:${hostDestination}`)
rsync.execute(function(error, code, cmd) {
    console.log(`Deployed '_static/' to ${username}@${hostname}:${hostDestination}`) 
    console.log(`https://frontend.brightfind.com/${directory}`)
})