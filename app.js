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
		input.disabled = false;
		speakbtn.disabled = false;
		micBtn.disabled = false;
	}, 1800);
})

input.addEventListener('keyup', (e) => {
	if (e.code === "NumpadEnter" || e.code === "Enter") {
		run(input.value.toLowerCase());

	}

  });

speakbtn.addEventListener('click', () => {
	run(input.value.toLowerCase())
})


//Cookies
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }
  function delete_cookie( name ) {
	document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

//run virtual assistant
const run = (userInput) =>{
	
	let appOutput;
	if(userInput != '')DisplayText(userInput,true);

	if (userInput == "hello") {

		appOutput = "Hi there"
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
		}, 1400);

	}

	if (userInput == "hey" || userInput == "hi") {

		appOutput = "hi";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
		}, 1500);

	}

	if (userInput == "what's your name" || userInput == "what is your name") {

		appOutput = "I'm Amanda";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
		}, 1500);

	}
	if (userInput == "who are you" || userInput == "what are you") {
		const aboutresponses = ['Amanda. Your personal assistent', 'I am Amanda, your personal assistent', 'I am Amanda, your personal assistent. To learn more what I can do ask me "What can you do?".']
		appOutput = aboutresponses[Math.floor(Math.random() * aboutresponses.length)];
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
		}, 1500);

	}
	if (userInput == "marko" || userInput == "marco") {

		appOutput = "What a beautiful name! " + userInput + " How can I help you?";
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

		//save name to cookie
		document.cookie=  "name="+name;
		setTimeout(() => {
			input.value = "";
		}, 1500);

	}

	if (userInput == "what's my name" || userInput == "what is my name") {

		const userName = getCookie("name");
		if(userName!="")
		appOutput = "Your name is " + userName;
		else appOutput = "You didn't tell me what is your name 😢";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
		}, 1500); 
	}
	if (userInput == "forget my name" || userInput == "forget me") {

		appOutput = "Ok, I forgot you."
		delete_cookie("name");
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
		}, 1500); 
	}
	if (userInput == "who am i") {

		const userName = getCookie("name");
		if(userName!="")
		appOutput = "Your name is " + userName;
		else appOutput = "I don't know";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
		}, 1500); 
	}
	if (userInput == "do you even know who i am" || userInput == "do you even know who am i") {

		const userName = getCookie("name");
		if(userName!="")
		appOutput = "Yes, I know. You are " + userName;
		else appOutput = "No";
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
	if (userInput == "do you love me") {
		const response = [
			'Of course','Yes of course','True','Of course i love you, why wouldn\'t I','Of course i love you','Yes','No!'
		];
		appOutput = response[Math.floor(Math.random() * response.length)];;
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
		}, 1500);


	}
	if (userInput == "i'm doing fine" || userInput == "i am good thanks" || userInput == "i'm doing good" || userInput == "i'm good" || userInput == "i am doing good" || userInput == "i'm ok" || userInput == "i'm feeling good" || userInput == "i'm okay") {

		appOutput = "Nice to hear.";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
		}, 1500);

	}
	if (userInput == "i'm hungry" || userInput == "i am hungry") {

		appOutput = "Here, i brought you some 🍕 and 🍟.";
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
	if (userInput == "send nudes") {
		const response =  [
			'https://www.pornhub.com/album/45981432','https://www.pornhub.com','https://www.pornhub.com/album/43936631'
		]
		appOutput = 'Ok, you little horny bitch';
		
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
			window.open(response[Math.floor(Math.random() * response.length)], '_blank');

		}, 1500);

	}

	if (userInput == "how many trees have been planted" || userInput == "#teamtrees") {

		fetch("https://cors-anywhere.herokuapp.com/https://teamtrees.p.rapidapi.com/status", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "teamtrees.p.rapidapi.com",
			"x-rapidapi-key": "a60600e791msh04d6085d18c57c7p1d237fjsn211c89301bb1"
		}
	})
	.then(response => {
	console.log(response);
	return response.json();
	})
	.then(data =>{
		const trees = data.trees;
	
		appOutput = `${trees} trees have been planted`;
		textToSpeech(appOutput);
		DisplayText(appOutput,false);

		setTimeout(() => {
			input.value = "";
		}, 1500);
	})
	}
	if (userInput == "what's up" || userInput == "what is up") {

		const api = "https://uselessfacts.jsph.pl/random.json?language=en";
		
		fetch(api)
			.then(response => {
				return response.json();
			})
			.then(data => {
				
				const fact = data.text;

				appOutput = fact;
				console.log(appOutput)
				textToSpeech(appOutput);
				DisplayText(appOutput,false);
				setTimeout(() => {
					input.value = "";
				}, 1200);	
			})
		
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
	if (userInput == "what's the time" || userInput == "what is the time" || userInput == "what time it is" || userInput == "what time is it") {
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
	if (userInput == "what's the day" || userInput == "what day it is" || userInput == "what day is today" || userInput == "what day is" || userInput == "what day is it" || userInput == "what's the day today" ) {
		const d = new Date();
		let day = d.getDay();
		const weekday = [
			'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'
		]
		appOutput = `Today is ${weekday[day]}`;
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
		}, 1400);

	}
	if (userInput == "what day was yesterday" || userInput == "what day it was yesterday") {
		const d = new Date();
		let day = d.getDay();
		const weekday = [
			'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'
		]
		appOutput = `Yesterday was ${day == 0 ? weekday[6] : weekday[day-1]}`;
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
		}, 1400);

	}
	if (userInput == "what day it will be tomorrow" || userInput == "what day will be tomorrow") {
		const d = new Date();
		let day = d.getDay();
		const weekday = [
			'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'
		]
		appOutput = `Tomorrow will be ${day == 6 ? weekday[0] : weekday[day+1]}`;
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
		}, 1400);

	}
	//square root 📕🤓 
	if (userInput.startsWith("what is the square root of ")) {

		const sqRoot = userInput.split("what is the square root of")[1].replace(/\s+/g, '');
		const sqRootRes = Math.round(Math.sqrt(sqRoot) * 100) / 100;
		appOutput = `Square root of ${sqRoot} is ${sqRootRes}`;
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
		}, 900);

	}
	//pi 🥧
	if (userInput.startsWith("what is pi")) {

		appOutput = Math.PI;
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
		}, 900);

	}
	//calculator
	if (userInput.startsWith("what is") && (/^([-+]?[0-9]*\.?[0-9]+[\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)*$/.test(userInput.split("what is")[1].replace(/\s+/g, '')) )) {
		const tmp = userInput.split("what is")[1];
		const fnum = parseInt(tmp.split(/[+*\/-]/g)[0]);
		const snum = parseInt(tmp.split(/[+*\/-]/g)[1]);
		const operator = tmp.match(/[+*\/-]/g)[0];
		console.log(operator);
		console.log(fnum + " "+operator+" " + snum);
		let res = 0;
		switch(operator){
			case '+': res =  fnum + snum;
			break;
			case '-': res = fnum - snum;
			break;
			case '*': res =  fnum * snum;
			break;
			case '/': res =  fnum / snum;
			break;
			default:
				console.log('Operator error!');
		}
		console.log(res);
		appOutput = res;
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
		}, 1200);

	}
	//google search
	if (userInput.startsWith("google what is")) {

		const searchQ = userInput.split("google what is")[1].replace(/\s+/g, '');
		appOutput = `${searchQ} is:`;
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			window.open(`https://www.google.com/search?q=${searchQ}`, '_blank');
			input.value = "";
		}, 900);

	}
	//weather
	if (userInput.includes("what's the weather in")) {
		const city = userInput.split("in")[1];
		
		const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b3d1c8791ebad33f0668ac31861245ac`;
		
		fetch(api)
			.then(response => {
				return response.json();
			})
			.then(data => {
				
				const main = data["weather"][0]["main"];
				const description =  data["weather"][0]["description"];
				const temp = data["main"]["temp"];
				const celsius = Math.floor(temp - 273.15);

				appOutput = `${description}  ${celsius}℃`
				console.log(appOutput)
				textToSpeech(appOutput);
				DisplayText(appOutput,false);
				setTimeout(() => {
					input.value = "";
				}, 1200);	
			})
		

	}

	//tell me a random letter
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
		const number = Math.floor(Math.random() * 100);
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
	//tell me all numbers between x and y
	if (userInput.startsWith("tell me all the numbers between")) {
		const tmp = userInput.split("tell me all the numbers between")[1];
		const x = tmp.split("and")[0];
		const y = tmp.split("and")[1]; 
		console.log(x + "  " + y)
		appOutput="";
		for (let i = x; i <= y; i++) {
			appOutput+=i+" ";
		}
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
		}, 1200);

	}
	//play music
	if(firstWord(userInput) == "play" && (userInput.split("play")[1] != "")){
	if (userInput == "play alan walker unity") {

		appOutput = "playing Unity...";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
			window.open("https://www.youtube.com/watch?v=E3x_dLVTEuA", '_blank');
		}, 1200);

	}else if (userInput == "play fortunate son") {

		appOutput = "playing fortunate son...";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
			window.open("https://www.youtube.com/watch?v=40JmEj0_aVM", '_blank');
		}, 1200);

	} else if (userInput == "play bitch lasagna" || userInput == "play beach lazanja" || userInput == "play b**** lasagna") {

		appOutput = "playing bitch lasagna...";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
			window.open("https://www.youtube.com/watch?v=6Dh-RL__uN4", '_blank');
		}, 1200);

	} else if (userInput == "play alan walker play") {

		appOutput = "playing Alan Walker play...";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
			window.open("https://www.youtube.com/watch?v=YQRHrco73g4", '_blank');
		}, 1200);

	} else if (userInput == "play i feel like im fixin to die rag") {

		appOutput = "playing Country Joe McDonald - I-Feel-Like-I'm-Fixin'-To-Die Rag...";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
			window.open("https://www.youtube.com/watch?v=3W7-ngmO_p8", '_blank');
		}, 1500);

	}else if (userInput == "play alan walker tired") {

		appOutput = "playing Alan Walker ft. Gavin James - Tired...";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
			window.open("https://www.youtube.com/watch?v=g4hGRvs6HHU", '_blank');
		}, 1800);

	}else if (userInput == "play alan walker ghost") {

		appOutput = "playing AuRa, Alan Walker - Ghost (Official Video)...";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
			window.open("https://www.youtube.com/watch?v=1DCiUhNn9rc", '_blank');
		}, 3200);

	} else if (userInput == "play final song") {

		appOutput = "playing MØ - Final Song (Official Video)...";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
			window.open("spotify:track:4qqArAiTPueDxIp7cf87h7", '_blank');
		}, 3200);
	}else if (userInput == "play i took a pill in ibiza") {

		appOutput = "playing Mike Posner - I Took A Pill In Ibiza (Seeb Remix) (Explicit)...";
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
			window.open("https://www.youtube.com/watch?v=foE1mO2yM04", '_blank');
		}, 1800);

	
	}else{
		const q =	userInput.split("play")[1];
		appOutput = `searching ${q}...`;
		textToSpeech(appOutput);
		DisplayText(appOutput,false);
		setTimeout(() => {
			input.value = "";
			window.open(`https://www.youtube.com/results?search_query=${q}`, '_blank');
		}, 1000);
	}
}
}

//split the word and return the last word
function lastWord(words) {
   const n = words.split(" ");
    return n[n.length - 1];

}
//get last word of the string
function firstWord(words){
	const n = words.split(" ");
    return n[0];
}

const micBtn = document.getElementById("talk");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';

//SpeechRecognition
recognition.onstart = function(){
	micBtn.classList.add("micActive");
	const audio = new Audio('micActive.mp3');
	audio.play();
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
		if (e.code === "KeyF" && input != document.activeElement) 
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