//const config = require('webpack.config')
const fs = require('fs');
//const path = require('path');
const pathToComponents = 'src/components/';
var componentsList = fs.readdirSync(pathToComponents, 'utf8');

var indexOfDsStore = componentsList.indexOf('.DS_Store');
//slice uses different index
var componentsListMinusDSstore = componentsList.slice(indexOfDsStore + 1);

componentsListMinusDSstore.map(function(component){
	writeThisFileName(component);
});

function writeThisFileName(component){
	console.log(component);
	//only add to array if there is an hbs file in a folder
	const htmlElementToCreate = document.createElement('html');
	const componentHTML = '{{> ../../components/' + component + '/' + component + '.hbs}}';

	ObjectOfHTMLtoWrite.push(componentHTML)
}

console.log(componentsListMinusDSstore);




//function writePatternCodeBlock(){
function patternLibFunction(){
	//for demo purposes
	var nodeListOftheSections = document.querySelectorAll('.patternLib__section');
	for(let i=0; i < nodeListOftheSections.length; i++){
		let elementToAdd = document.createElement('div');
		elementToAdd.classList.add('patternLib__codeBlock');
		let cleanedInnerHTMLOfTheSection = nodeListOftheSections[i].innerHTML.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
		let wrappedCleanHTML = `<pre><code>${cleanedInnerHTMLOfTheSection}</code></pre>`
		elementToAdd.innerHTML = wrappedCleanHTML;
		nodeListOftheSections[i].appendChild(elementToAdd);
	}
}

document.addEventListener('DOMContentLoaded', patternLibFunction)

}


fs.writeFile('src/views/pages/_patternLib_precompiled.hbs', ObjectOfHTMLtoWrite);