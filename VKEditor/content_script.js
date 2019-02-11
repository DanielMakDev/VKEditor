	
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

    	if (request.message != 'btnDeleteAllClicked') {

			// Creating script elements to add them to DOM later
			var mainScript     = document.createElement('script');
			var scrollerScript = document.createElement('script');
			
			// Getting scroller.js (must be in "web_accessible_resources" in manifest.json)
			scrollerScript.src = chrome.extension.getURL('scroller.js')
			mainScript.innerHTML = ' var artistName = ' + '"' + request.message + '"' + ' ;var audioRows=document.getElementsByClassName("audio_row"),audioRows_final=[],audioPerformers=[],counterForDel=0,finalParents=[],performersContent="";for(i=0;i<audioRows.length;i++)audioPerformers.push(audioRows[i].getElementsByClassName("audio_row__performers")[0]);for(i=0;i<audioPerformers.length;i++)-1!=(performersContent=(performersContent=audioPerformers[i].textContent).toLowerCase()).indexOf(artistName.toLowerCase())&&audioRows_final.push(audioPerformers[i]);for(i=0;i<audioRows_final.length;i++)finalParents.push(audioRows_final[i].parentElement.parentElement.parentElement.parentElement);function parseAudioToDel(){if(!(counterForDel<=finalParents.length))return!1;clearTimeout(e),AudioUtils.onRowOver(finalParents[counterForDel],onmouseover);var e=setTimeout(parseAudioToDel,700);++counterForDel>=finalParents.length+1&&delClicking()}function delClicking(){for(i=0;i<=finalParents.length;i++)finalParents[i].querySelectorAll(".audio_row__action_delete")[0].click()}parseAudioToDel();';


			//  Adding scroller to DOM
			(document.head || document.documentElement).appendChild(scrollerScript);


			// Adding mainScript to DOM After scroller is done
			setTimeout(function() {
				(document.head || document.documentElement).appendChild(mainScript);
			} , 10000);

    	}

    	else {

			// Creating script elements to add them to DOM later
			var mainScript     = document.createElement('script');
			var scrollerScript = document.createElement('script');

			
			// Getting scroller.js (must be in "web_accessible_resources" in manifest.json)
			scrollerScript.src = chrome.extension.getURL('scroller.js')
			mainScript.innerHTML = ' var audioRows=document.getElementsByClassName("audio_row"),audioRows_final=[],audioPerformers=[],counterForDel=0,finalParents=[],performersContent="";for(i=0;i<audioRows.length;i++)audioPerformers.push(audioRows[i].getElementsByClassName("audio_row__performers")[0]);for(i=0;i<audioPerformers.length;i++)performersContent=(performersContent=audioPerformers[i].textContent).toLowerCase(),audioRows_final.push(audioPerformers[i]);for(console.log(audioRows_final),i=0;i<audioRows_final.length;i++)finalParents.push(audioRows_final[i].parentElement.parentElement.parentElement.parentElement);function parseAudioToDel(){if(!(counterForDel<=finalParents.length))return!1;clearTimeout(e),AudioUtils.onRowOver(finalParents[counterForDel],onmouseover);var e=setTimeout(parseAudioToDel,700);++counterForDel>=finalParents.length+1&&delClicking(),console.log(counterForDel),console.log(finalParents.length)}function delClicking(){for(i=0;i<=finalParents.length;i++)finalParents[i].querySelectorAll(".audio_row__action_delete")[0].click()}parseAudioToDel();';


			//  Adding scroller to DOM
			(document.head || document.documentElement).appendChild(scrollerScript);


			// Adding mainScript to DOM After scroller is done
			setTimeout(function() {
				(document.head || document.documentElement).appendChild(mainScript);
			} , 10000);

    	}
    	

    }
);












