var bg               = chrome.extension.getBackgroundPage(),
	artistNameInput  = document.getElementsByClassName('artistNameInput')[0],
	audioAmountInput = document.getElementsByClassName('audioAmount')[0],
	btn              = document.getElementById('button'),
	btnDeleteAll     = document.getElementById('deleteAll');




btn.addEventListener('click', function() {
	// Send message (input value) to background.js which then send it to content_script.js 
	bg.pop_alert(artistNameInput.value);

	setTimeout(clearValue , 400);

	function clearValue() {
		artistNameInput.value = '';
	}
});

btnDeleteAll.addEventListener('click', function() {
	// Send message (btnScroller is clicked) to background.js which then send it to content_script.js 
	bg.pop_alert('btnDeleteAllClicked');
});










