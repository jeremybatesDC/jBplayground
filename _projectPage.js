const fs = require('fs');
const pathToPages = 'src/views/pages';
var pagesList = fs.readdirSync(pathToPages, 'utf8');
