const screen = document.getElementsByClassName("screen")[0];
const startingProps = ["dot", "text1", "text2", "text3", "text4"];

function createDiv(name) {
	var div = document.createElement("div");
	div.classList.add(name);
	screen.appendChild(div);
	return div
}

function introScene() {
	for (let i = 0; i < startingProps.length; i++) {
		createDiv(startingProps[i]);
	}
}

function createButton(name, innerText) {
	var but = document.createElement("button");
	but.classList.add(name);
	but.type = "button"
	but.innerHTML = innerText;
	screen.appendChild(but);
	return but;
}

function chatWriter (elem, chatText, timeout) {
	if (timeout > 0) {
		for (let i = 0; i < chatText.length; i++) {
			setTimeout(() => {
				elem.innerHTML += chatText[i];
			}, timeout + timeout * i)
		}
	} else {
		elem.innerHTML = chatText;
	}
}

function createChatbox(screenVar, chatSpeakerClass, chatSpeakerName, chatText, duration, textTimeout, animString) {
	var chatbox = createDiv("chatbox");
	var chatSpeaker;
	setTimeout(() => {
		chatSpeaker = createDiv(chatSpeakerClass);
		chatSpeaker.style = "animation: " + animString;
		chatWriter(chatbox, chatSpeakerName + ":<br>", 0);
		chatWriter(chatbox, chatText, textTimeout);
		setTimeout(() => {
			screenVar.removeChild(chatSpeaker);
			chatbox.innerHTML = "";
			chatbox.style = "animation: chatboxanim2 1s;"
			setTimeout(() => {
				screenVar.removeChild(chatbox);
			}, 850)
		}, duration)
	}, 1000)
}

var newProps1;
function chooseDotScene() {
	var optionsText = createDiv("optionsText");
	var dot1 = createDiv("dot1");
	var dot2 = createDiv("dot2");
	var dot3 = createDiv("dot3");
	var dot4 = createDiv("dot4");
	
	var option1 = createButton("option1", "Dot");
	var option2 = createButton("option2", "Blob");
	var option3 = createButton("option3", "Spot");
	var option4 = createButton("option4", "Sprinkle");
	
	newProps1 = {optionsText, dot1, dot2, dot3, dot4, option1, option2, option3, option4};
	
	option1.addEventListener('mouseover', () => {
		dot1.style = "animation: dotanim2 0.4s 0.2s infinite alternate"
	});
	option1.addEventListener("mouseleave", (event) => {
		dot1.style = "animation: dotanim1 0.4s 0.2s infinite alternate"
	});
	
	option2.addEventListener('mouseover', () => {
		dot2.style = "animation: dotanim2 0.4s 0s infinite alternate"
	});
	option2.addEventListener("mouseleave", (event) => {
		dot2.style = "animation: dotanim1 0.4s 0s infinite alternate"
	});
	
	option3.addEventListener('mouseover', () => {
		dot3.style = "animation: dotanim2 0.4s 0.3s infinite alternate"
	});
	option3.addEventListener("mouseleave", (event) => {
		dot3.style = "animation: dotanim1 0.4s 0.3s infinite alternate"
	});
	
	option4.addEventListener('mouseover', () => {
		dot4.style = "animation: dotanim2 0.4s 0.1s infinite alternate"
	});
	option4.addEventListener("mouseleave", (event) => {
		dot4.style = "animation: dotanim1 0.4s 0.1s infinite alternate"
	});
	
	screen.style = "animation: screenanim1 1s 8s;";
	screen.style = "animation: screenanim1 1s 9s reverse;";
	setTimeout(() => {
		createChatbox(screen, "chatdot4", "Sprinkle", "What was that?", 4000, 150, "chatdotanim2 0.5s infinite alternate, chatdotanim1 0.5s infinite alternate;");
		setTimeout(() => {
			createChatbox(screen, "chatdot2", "Blob", "I'm not sure!", 4000, 150, "chatdotanim2 0.5s infinite alternate, chatdotanim1 0.5s infinite alternate;");
			setTimeout(() => {
				createChatbox(screen, "chatdot3", "Spot", "It was probably nothing.", 4000, 120, "chatdotanim2 0.5s infinite alternate, chatdotanim1 0.5s infinite alternate;");
				
				screen.style = "animation: screenanim2 1s 7s;";
				screen.style = "animation: screenanim2 2s 8s reverse;";	
				setTimeout(() => {
					createChatbox(screen, "chatdot4", "Sprinkle", "There it is again!", 4000, 150, "chatdotanim2 0.5s infinite alternate, chatdotanim1 0.5s infinite alternate;");
					setTimeout(() => {
						createChatbox(screen, "chatdot3", "Spot", "I saw it this time!", 4000, 120, "chatdotanim2 0.5s infinite alternate, chatdotanim1 0.5s infinite alternate;");
							setTimeout(() => {
								createChatbox(screen, "chatSquare1", "Unknown", "Muwhahaha!", 4000, 120, "chatdotanim2 0.5s infinite alternate, chatdotanim1 0.5s infinite alternate;");
								setTimeout(() => {
									createChatbox(screen, "chatdot2", "Blob", "Uhmm... Who is that?", 4000, 150, "chatdotanim2 0.5s infinite alternate, chatdotanim1 0.5s infinite alternate;");
									}, 6000)
							}, 6000)
					}, 6000)
				}, 10000)
			}, 6000)
		}, 6000)
	}, 11000)
}

var button1;
var button2;
screen.addEventListener("animationend", (event) => {
	if (event.animationName == "screenintro2") {
		button1 = createButton("button1", "Yes")
		button2 = createButton("button2", "No")
		
		for (let i = 0; i < startingProps.length; i++) {
			screen.removeChild(document.getElementsByClassName(startingProps[i])[0]);
		}		

		button1.addEventListener('click', () => {
			if (document.getElementsByClassName("lamp").length < 1) {
				var lamp = document.createElement("div");
				lamp.classList.add("lamp");
				screen.appendChild(lamp);
				lamp.style="animation: lampanim0 1s, lampanim1 2s 1s, lampanim2 2s 1s reverse both";
			}
		});
	}
});

//--------END OF INTRO---------//
screen.addEventListener("animationend", (event) => {
	if (event.animationName == "lampanim2") {
		screen.removeChild(button1);
		screen.removeChild(button2);
		
		chooseDotScene();
	}
});

introScene();