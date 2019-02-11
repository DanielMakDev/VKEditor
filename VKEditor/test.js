


// DELETING BY ARTIST



var audioRows         = document.getElementsByClassName("audio_row"),
	audioRows_final   = [],
	audioPerformers   = [],
	counterForDel     = 0,
	finalParents      = [],
	performersContent = "";


for (i = 0; i < audioRows.length; i++) {
	audioPerformers.push(audioRows[i].getElementsByClassName("audio_row__performers")[0]);
}

for (i = 0; i < audioPerformers.length; i++) {

	


	performersContent = audioPerformers[i].textContent;
	performersContent = performersContent.toLowerCase();

	

	if (performersContent.indexOf(artistName.toLowerCase()) != -1) {

		audioRows_final.push(audioPerformers[i]);

		

	}
} 

console.log(audioRows_final);


for (i = 0; i < audioRows_final.length; i++) {

	finalParents.push(audioRows_final[i].parentElement.parentElement.parentElement.parentElement);
} 

// console.log(finalParents);

function parseAudioToDel() {
	// if (!(counterForDel <= finalParents.length)) return !1;
	// clearTimeout(e), AudioUtils.onRowOver(finalParents[counterForDel], onmouseover), counterForDel++;
	// var e = setTimeout(parseAudioToDel, 700);
	// counterForDel > finalParents.length && delClicking()

	if (counterForDel <= finalParents.length) {
	    var delCounter = 0;

		clearTimeout(parseTime);
		AudioUtils.onRowOver(finalParents[counterForDel], onmouseover);


		
		

		var parseTime = setTimeout(parseAudioToDel ,700);

		counterForDel++;


		if (counterForDel >= finalParents.length + 1) {
			delClicking();
		}

		


		console.log(counterForDel);
		console.log(finalParents.length);

	}
	else {
		return false;
	}
}

function delClicking() {
	for (i = 0; i <= finalParents.length; i++) {
		finalParents[i].querySelectorAll('.audio_row__action_delete')[0].click();		
	}
}
parseAudioToDel();


//                    ^			
// DELETING BY ARTIST |



// DELETING ALL AUDIO

var audioRows         = document.getElementsByClassName("audio_row"),
	audioRows_final   = [],
	audioPerformers   = [],
	counterForDel     = 0,
	finalParents      = [],
	performersContent = "";


for (i = 0; i < audioRows.length; i++) {
	audioPerformers.push(audioRows[i].getElementsByClassName("audio_row__performers")[0]);
}

for (i = 0; i < audioPerformers.length; i++) {

	


	performersContent = audioPerformers[i].textContent;
	performersContent = performersContent.toLowerCase();

	



		audioRows_final.push(audioPerformers[i]);

		

	
} 

console.log(audioRows_final);


for (i = 0; i < audioRows_final.length; i++) {

	finalParents.push(audioRows_final[i].parentElement.parentElement.parentElement.parentElement);
} 

// console.log(finalParents);

function parseAudioToDel() {
	// if (!(counterForDel <= finalParents.length)) return !1;
	// clearTimeout(e), AudioUtils.onRowOver(finalParents[counterForDel], onmouseover), counterForDel++;
	// var e = setTimeout(parseAudioToDel, 700);
	// counterForDel > finalParents.length && delClicking()

	if (counterForDel <= finalParents.length) {
	    var delCounter = 0;

		clearTimeout(parseTime);
		AudioUtils.onRowOver(finalParents[counterForDel], onmouseover);


		
		

		var parseTime = setTimeout(parseAudioToDel ,700);

		counterForDel++;


		if (counterForDel >= finalParents.length + 1) {
			delClicking();
		}

		


		console.log(counterForDel);
		console.log(finalParents.length);

	}
	else {
		return false;
	}
}

function delClicking() {
	for (i = 0; i <= finalParents.length; i++) {
		finalParents[i].querySelectorAll('.audio_row__action_delete')[0].click();		
	}
}
parseAudioToDel();

// 					  ^
// DELETING ALL AUDIO |