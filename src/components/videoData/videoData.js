(function videoDataFunction(){

	let testID = '999';
	let testTitle = 'Test Title'
	let testSRC = '';
	let testContent = 'this is test content';
	
	var recordTemplate = 
		`<section class="vidRecord">
			<figure>
				<img class="b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="${testSRC}"/>
				<figcaption>Video ID: ${testID}</figcaption>
			</figure>
			<h6>${testTitle}</h6>
			<p>${testContent}</p>
		</section>`
	;

	const apiURL = 'https://dev.core.bantr.wow.public.aol.com/video/getFeatured';

	fetch(apiURL)  
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

	//next steps 
	// append fragments together before editing the DOM
	// attach one listener to containing object -- then just get the target
	// modal -- video element

})();