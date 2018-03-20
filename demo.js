document.querySelector("#record").onclick = () => {
	let token = "AdIZLf6zDylbcqOOm36XOh%2FNNPk8KzxnEL%2Fpstn96oWuMvddKy1xVPI6KajQ%2Bns1k9j%2FJKQ1drMkxeXqrZWrr%2F%2B5OBaZ75iPFn2arGeR7n20YiHzKUqXUJmW5xMEBXjI4wVNIjBOtxg61iZhRqNQ30kxZlyORmmfhvyxlJGo9HtbQvWiOkjZIL8PRXKyc16Zw94lB0O0Zh1zUd%2FYKAf1Dnx2Bv2taIunIQSDvH78gx%2FKIhw77mJgNR402L6%2FBJ1t4CX0qNly5Aa1wtS6Wq16zluW14YBkQXw32FYa6Hc5D5q6przyEe0A0BOJXqeuIgxZ%2Bnk4dWjYjfvCPuL2OjU%2B1XXPNPLlTzkZu4UzI3HDssRgVdEf2NkDQIAiG6pArV%2FHnNOaNh%2B0NryeowKTCTSiNM0kjjRsZeGGmJUP3%2FVp0YuHbBUugo0lUkEEMOOmFbTHvuLYNuoQofJRLoqeIBZnjrQemJqqPGud3YZ50tiawqNIRDiiPRvWXLjMJu7AHAwc3ZeKPNzf%2FYrdcT3Te4ClRcD1%2BE57QJMDBmx8YmMP5XDbLnE7zXjooAMWnWuMj2glD9als7vF9zHPjXTj%2BY5XAP9ZnmXSQ4uuMOzXy6Lvvcd9VeyMrsYxWcMpCUMkdEj4d7nMPYR7ZsiXZFoSX10vlMPUZVMobhjPObYrk8W3atkWLEXAgeJ9ATrQS4pJ%2FMuJbT2zXRJ3dpCx4fFrFMtg92ekH60hl5osMvSaFKrFfcxoDIwmVikSqUZfmChwQWtQ0kiZo7kgCOOVfVyozx%2Fntl1cM%2FV3twzG%2Fipy4ysLbH9Y%2BnwoN%2BnrCIXLz25DodypQZh4%2FgYeV45QnqAnj%2FUN4Z7KTcSJXIPKeHSVJWVddM6EtptLgjBiKBRwVDCRHwaDP8m287IUALg97eehCA%2B0g%3D%3D";
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
