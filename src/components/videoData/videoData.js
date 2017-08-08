(function videoDataFunction(){

	let testID;
	let testSRC;
	let testContent;
	
	var recordTemplate = 
		`<section class="vidRecord">
			<figure>
				<img class="b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://placehold.it/1024x1024" data-src="${testSRC}"/>
				<figcaption>Video ID: ${testID}</figcaption>
			</figure>
			<h6></h6>
			<p>${testContent}</p>
		</section>`
	;


	const apiURL = 'https://dev.core.bantr.wow.public.aol.com/video/getFeatured';

	fetch(apiURL, {mode: 'cors'})  
	.then(function(response) { 
		return response.json();
	})
	.then(function(data){
		videoDataHandlerFunction(data);
	})
	.catch(function(error) {  
		console.log('Request failed', error)  
	});

	function videoDataHandlerFunction(data){
		//the "response" word here is actually from the data
		data.response.map(function(record){//map the records to functions
			console.log(record)
			console.log(recordTemplate)
		})
	}
	//




	// append fragments together before editing the DOM

	// once markup is there, attach listeners (or use Vue)


})();