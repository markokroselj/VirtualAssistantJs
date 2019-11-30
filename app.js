// list of languages is probably not loaded, wait for it
if (window.speechSynthesis.getVoices().length == 0) { }


function textToSpeech(textInput) {
	// get all voices that browser offers
	var available_voices = window.speechSynthesis.getVoices();

	// this will hold  voice name
	var voice = '';

	voice = available_voices[1];

	console.log(available_voices);
	var utter = new SpeechSynthesisUtterance();
	utter.rate = 1;
	utter.pitch = 0.5;
	utter.text = textInput;
	utter.voice = voice;

	// speak
	window.speechSynthesis.speak(utter);
}
const speakbtn = document.querySelector('#speak');
const input = document.querySelector('.input');
const startConversation = document.getElementById("start");
const sedem = document.getElementById("container");
startConversation.addEventListener('click', () => {
	textToSpeech("hello, my name is Amanda!");
	startConversation.style.pointerEvents = "none";
	setTimeout(() => {
		startConversation.style.display = "none";
		sedem.style.display = "block";

	}, 1800);
})


//run ai bot
speakbtn.addEventListener('click', () => {
	run(input.value.toLowerCase())
})
function run(userInput){

	if (userInput == "hello") {

		textToSpeech("what's your name?");

		setTimeout(() => {
			input.value = "";
		}, 1400);

	}
	if (userInput == "marko") {

		textToSpeech("Nice name " + userInput + " How can I help you?");

		setTimeout(() => {
			input.value = "";
		}, 1500);

	}
	if (userInput == "what's your channel name") {

		textToSpeech("My channel name is Marko Krošelj");

		setTimeout(() => {
			input.value = "";
		}, 1500);

	}
	if (userInput == "how are you") {

		textToSpeech("I'm feeling good today. What about you?");

		setTimeout(() => {
			input.value = "";
		}, 1500);

	}
	if (userInput == "open your channel") {

		textToSpeech("opening...");
		setTimeout(() => {
			input.value = "";
			window.open("https://www.youtube.com/channel/UCzLqjAzrLMWv0XcZPReTxsg?", '_blank');
		}, 1200);

	}
	if (userInput == "what's the time") {
		const d = new Date();
		let h = d.getHours();
		let m = d.getMinutes();
		let time = h + " : " + m

		textToSpeech(time);
		setTimeout(() => {
			input.value = "";
		}, 1400);

	}
	if (userInput == "tell me a letter") {

		textToSpeech("b");
		setTimeout(() => {
			input.value = "";
		}, 1200);

	}
	
}

const micBtn = document.getElementById("talk");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
	console.log("voice is actived, you cn talk to micropohone");
};
recognition.onresult = function(){
	const current = event.resultIndex;
	const micinput = event.results[current][0].transcript;
	console.log(micinput);
	run(micinput);
};

micBtn.addEventListener('click', ()=>{
	recognition.start();
});
