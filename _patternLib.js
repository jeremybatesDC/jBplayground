const fs = require('fs');
const pathToComponents = 'src/components/';
var componentsList = fs.readdirSync(pathToComponents, 'utf8');
var ObjectOfHTMLtoWrite = [];

const arrayOfThingsToOmit = ['.DS_Store', '_bfComponents', 'navMain', 'footer' ];

componentsList.map(function(component){
	if(arrayOfThingsToOmit.indexOf(component) < 0){
		writeThisFileName(component);
	}
});

function writeThisFileName(component){
	let theIDtoWrite = `patterLibSection_${componentsList.indexOf(component)}`
	const testHTML = `<section id="${theIDtoWrite}" class="patternLib__section">{{> ../../components/${component}/${component}.hbs}}</section>`;
	ObjectOfHTMLtoWrite.push(testHTML);
}

var rejoinedObjectOfHTMLtoWrite = ObjectOfHTMLtoWrite.join('');
fs.writeFileSync('src/views/_compiledPartials/patternLib_componentListCOMPILED.hbs', rejoinedObjectOfHTMLtoWrite);