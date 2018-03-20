document.querySelector("#record").onclick = () => {
	let token = "";
	let stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
		token: token,
		outputElement: "#output"
	});

	stream.on("error", err => {
		console.log(err);
	});

	document.querySelector("#stop").onclick = () => {
		stream.stop();
	};
};
