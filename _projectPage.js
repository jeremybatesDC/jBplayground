const fs = require('fs');
const pathToPages = 'src/views/pages';
//const thePages = fs.readdirSync(pathToPages, 'utf8');

var pagesList = [
  {'viewFile': 'src/views/pages/_rootProjectPage.hbs','pageName': 'index.html'},
  {'viewFile': 'src/views/pages/homepage.hbs','pageName': 'homepage.html'},
  {'viewFile': 'src/views/pages/test_page_1.hbs','pageName': 'compiled_1.html'},
  {'viewFile': 'src/views/pages/test_page_2.hbs','pageName': 'compiled_2.html'},
  {'viewFile': 'src/views/pages/_patternLibrary.hbs','pageName': '_patternLibrary_compiled.html'}
]//Move pagesList to own file. This list is used both to generate pages, and to auto-generate the project page with links to those pages

var theHTMLtoWrite = [];

for(let i=0; i < pagesList.length; i++){
	theHTMLtoWrite.push(`<p><a href="${pagesList[i].pageName}">${pagesList[i].pageName}</a></p>`);
}
	
fs.writeFile('src/views/projectPageListCOMPILED.hbs', theHTMLtoWrite);