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
const container = document.getElementById("container");

startConversation.addEventListener('click', () => {
	textToSpeech("hello, my name is Amanda!");
	startConversation.style.pointerEvents = "none";
	setTimeout(() => {
		startConversation.style.display = "none";
		container.style.display = "block";

	}, 1800);
})

input.addEventListener('keyup', (e) => {
	if (e.code === "NumpadEnter" || e.code === "Enter") 
	run(input.value.toLowerCase())
  });

speakbtn.addEventListener('click', () => {
	run(input.value.toLowerCase())
})

//run ai bot
function run(userInput){
	let appOutput;
	if(userInput != '')DisplayText(userInput,true);

	if (userInput == "hello") {

		appOutput = "what's your name?"
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
		}, 1400);

	}
	if (userInput == "marko" || userInput == "marco") {

		appOutput = "What a byautiful name! " + userInput + " How can I help you?";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
		}, 1500);

	}

	if (userInput.includes("my name is")) {

		const name = lastWord(userInput);
		appOutput = "Nice name " + name + " How can I help you?";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
		}, 1500);

	}

	if (userInput == "what's your channel name") {

		appOutput = "My channel name is Marko Krošelj";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
		}, 1500);

	}
	if (userInput == "how are you") {

		appOutput = "I'm feeling good today. What about you?";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
		}, 1500);


	}
	if (userInput == "i'm doing fine") {

		appOutput = "Nice to hear.";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
		}, 1500);

	}
	if (userInput == "sing me a song") {

		appOutput = 'Ooh, aw, manHell go, "Ah, yeah!" Blip-blopOoh, aw, manHell go, hell go, "Ah, yeah!" YeahOoh, aw, manHell go, "Ah, yeah!" Blip-blopAh, yeah, yeah, yeah-yeah-yeah-yeahYeah, Id frick a CreeperBlip-blop, Blip-blop-blipBlip-blop, Blip-blop-blip-blopBlip-blop, Blip-blop-blipHed be begging for it deeperBlip-blop, Blip-blop-blipBlip-blop, Blip-blop-blip-blopBend his sexy ass overHed be begging for it deeperBlip-blop, Blip-blop-blipBlip-blop, Blip-blop-blip-blopBlip-blop, Blip-blop-blipHed be begging for it deeperBlip-blop, Blip-blop-blipBlip-blop, Blip-blop-blip-blopBend his sexy ass overHed be begging for it deeper Blip-blop';
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
		}, 1500);

	}
	if (userInput == "what's your name") {

		appOutput = "I'm Amanda";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
		}, 1500);

	}
	if (userInput == "who made you" || userInput == "who created you" || userInput == "kdo te je naredil") {

		appOutput = "I was made by the two best web developers: Marko and Marcel";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
		}, 1800);

	}
	if (userInput == "how old are you" || userInput == "old are you") {

		appOutput = "I am still in development, so technically i am not born yet";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
		}, 1500);

	}
	if (userInput == "open your channel") {

		appOutput = "opening...";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
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

		appOutput = time;
		textToSpeech(time);
		DisplayText(time,false);
		setTimeout(() => {
			input.value = "";
		}, 1400);

	}
	//tell me a random joke
	const randomLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	
	if (userInput == "tell me a letter") {
		const letter = randomLetter[Math.floor(Math.random() * randomLetter.length)];
		appOutput = letter;
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
		}, 1200);

	}
	//tell me a random number
	if (userInput == "tell me a random number") {
		const number = Math.floor(Math.random() * 100000);
		appOutput = number;
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
		}, 1200);

	}
	//tell me a joke
	const jokes = ["What's the best thing about a Boolean? | Even if you're wrong, you're only off by a bit.","Don't look at the eclipse through a colander. | You'll strain your eyes","What did the digital clock say to the grandfather clock? | Look, no hands!","Did you hear the news? | FedEx and UPS are merging. They’re going to go by the name Fed-Up from now on.", "What kind of magic do cows believe in? | MOODOOO", "Do you know why Java developers wear glasses? | Because they can't  C  #"];

	if (userInput == "tell me a joke") {
		const joke = jokes[Math.floor(Math.random() * jokes.length)];
		const jokeSetup = joke.split("|")[0];
		const jokePunchline = joke.split("|")[1];

		appOutput = jokeSetup + " " + jokePunchline;
		textToSpeech(jokeSetup);
		setTimeout(() => {
		textToSpeech(jokePunchline);
		}, 3000);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
		}, 1200);

	}
	//play music
	if (userInput == "play alan walker unity") {

		appOutput = "playing Unity...";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
			window.open("https://www.youtube.com/watch?v=E3x_dLVTEuA", '_blank');
		}, 1200);

	}
	if (userInput == "play fortunate son") {

		appOutput = "playing fortunate son...";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
			window.open("https://www.youtube.com/watch?v=40JmEj0_aVM", '_blank');
		}, 1200);

	}
	if (userInput == "play bitch lasagna" || userInput == "play beach lazanja") {

		appOutput = "playing bitch lasagna...";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
			window.open("https://www.youtube.com/watch?v=6Dh-RL__uN4", '_blank');
		}, 1200);

	}
	if (userInput == "play alan walker play") {

		appOutput = "playing Alan Walker play...";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
			window.open("https://www.youtube.com/watch?v=YQRHrco73g4", '_blank');
		}, 1200);

	}
	if (userInput == "play i feel like im fixin to die rag") {

		appOutput = "playing Country Joe McDonald - I-Feel-Like-I'm-Fixin'-To-Die Rag...";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
			window.open("https://www.youtube.com/watch?v=3W7-ngmO_p8", '_blank');
		}, 1500);

	}
	if (userInput == "play alan walker tired") {

		appOutput = "playing Alan Walker ft. Gavin James - Tired...";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
			window.open("https://www.youtube.com/watch?v=g4hGRvs6HHU", '_blank');
		}, 1800);

	}
	if (userInput == "play alan walker ghost") {

		appOutput = "playing AuRa, Alan Walker - Ghost (Official Video)...";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
			window.open("https://www.youtube.com/watch?v=1DCiUhNn9rc", '_blank');
		}, 3200);

	}
	if (userInput == "play final song") {

		appOutput = "playing MØ - Final Song (Official Video)...";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
			window.open("spotify:track:4qqArAiTPueDxIp7cf87h7", '_blank');
		}, 3200);

	}
	
}

//split the word and return the last word
function lastWord(words) {
    var n = words.split(" ");
    return n[n.length - 1];

}
const micBtn = document.getElementById("talk");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';

//SpeechRecognition
recognition.onstart = function(){
	micBtn.classList.add("micActive");
	console.log("voice is actived, you can talk to microphone");
};
recognition.onresult = function(){
	micBtn.classList.remove("micActive");
	const current = event.resultIndex;
	const micinput = event.results[current][0].transcript;
	console.log(micinput);
	run(micinput.toLowerCase());
};



document.addEventListener('keyup', (e) => {
  if (e.code === "KeyF") 
  recognition.start();
});

micBtn.addEventListener('click', ()=>{
	recognition.start();
});

const textOutputContainer = document.getElementById("textDisplayContainer");
function DisplayText(text,pos){
	const p = document.createElement("p");
	if(pos) p.classList.add('right');
	else p.classList.add('left');
	const node = document.createTextNode(text);
	p.appendChild(node);
	textOutputContainer.appendChild(p);

let	shouldScroll = textOutputContainer.scrollTop + textOutputContainer.clientHeight === textOutputContainer.scrollHeight;

	if (!shouldScroll) {
		scrollToBottom();
	  }
}
function scrollToBottom() {
	textOutputContainer.scrollTop = textOutputContainer.scrollHeight;
  }
  
  scrollToBottom();