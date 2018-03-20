document.querySelector("#record").onclick = () => {
	let token = "xNvI%2B4BqBWEKEYaNceHTEnwa2J8dqjmDA%2FEDDDo46RfTN3YBddJVMTyIM1c%2FKm1XooC1Hb6cKKIT3hoJQyrn%2Bws%2FmSj%2FdxBMmJkjyUorShNKZM8o5HbY5DHJzhpwDPP9qi5y3gmughVEpas0kODeEQXhgeWDYrTqJelzd7N3p%2FKU3bj3WPfUHUlbq2WIWoTimCgP9lTWzR8%2BljW9jjuLdcPGsk4VQAZQMHPeAEqIkk8jC9L8sKmJbdMBUwS1jsfDfP70heSQ77zHDLZMWuuZ6zrsqO8Selzx1UX47in%2BRHKgxQE413WBWP9%2BHOkgfMAVXVSawuLzFYc5zPIFCgffIPJg46hInFlu079kWUWs8ThRw58Soosb1U1BLCHB86cMZJdkBMR9Q%2FXG7zQ%2BlAVUbK2xok03WelmmZP6TTIcVzf8FoeIS4B8SsX4folSKRkBmMlg8L6I4a4DW3WezkZ0BcoDs70TNAJlsBVzOZPdoKdSgXR8q933jE3Y5iU7nhcynVGuo8W4gWUmDo5mriBwky5wmvpw1AJOAprS1aYNSq0uwxYtY7yCEIlynP8vnHCrUqlGliKvMX%2BmnUwwNYo9fSRFBVt0LCSPlC9lBPzXeC4q%2BpFhoHzJOxejp05T7c6CTSrLVJELyABvPmtE9d9O5TzdLFBT3o24QmbteSnOPYavkG2qwQJKNK5obLiiLzZUtF6KWKz%2BeoMXprgPp9AYpbfCbkm1dYY2kd8sh%2FObb93Dce8As6kWVzQ9FqQD%2FXa0XdqzKP8ZWPrsmUIDEYsuHcQYVj33O6vKVVgcz9q8N8yq8GfzpVkLnAyVKJTgKXleq5ddz%2FiqSY7VctUozr56ISyjCPGboM4mnjnHffCC7YeyuprqiMsoX6qxD5JS5jY3CSGPEthCMLN4yHaftNh%2BikjGXnuzOMjEZmJqntU2KTO%2FXTRJDD%2Fa4mWgQ%2FwofjJcNGOrHcUTk%2BufD243Gp7n5bl6OYSLN1hV";
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