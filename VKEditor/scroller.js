var scrollerCounter = 0;
var scrollEnd = 1500;

function scrollToEnd() { 
	if (scrollerCounter < 20) {
		window.scrollTo(0 , scrollEnd);
		scrollerCounter++;
		scrollEnd = scrollEnd + 1500;
		setTimeout(scrollToEnd , 100); 
	}
}

scrollToEnd();