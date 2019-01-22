const app = document.getElementById('content');
let pause = false;
const card = document.createElement('div');
let playbackIntervalId = null;

function replay(){
	var request = new XMLHttpRequest();
	card.setAttribute('class', 'card');
	request.open('GET', 'http://localhost:4000/screenshots', true);
	request.onload = function () {

	// Begin accessing JSON data here
	var data = JSON.parse(this.response);
	

	if (request.status >= 200 && request.status < 400) {
		data.forEach(screenshot => {
						//console.log(screenshot.screenshots_blob);
			if(screenshot.screenshots_blob){
			var blob = new Blob([screenshot.screenshots_blob], {type: 'text/html'});
			var iframe = document.createElement('iframe');
			iframe.src = window.URL.createObjectURL(blob);
			iframe.hidden = true;
			iframe.onload = playback(2000);
			
			app.appendChild(card);
			card.appendChild(iframe);
			}
			//card.appendChild(p);
		});
	} else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
request.send();
}

function playback(interval) {
  if (!card.children.length) {
    return;
  }
  var i = 0;
  if(!pause){
  playbackIntervalId = setInterval(function() {
    var iframe = card.children[i];
    if (i > 0) {
      card.children[i - 1].hidden = true;
    } else if (i == 0) {
      card.children[card.children.length - 1].hidden = true;
    }
    iframe.hidden = false;
    i++;
    i %= card.children.length;
  }, interval);
  }
  if(pause){
	  clearInterval(playbackIntervalId);
  }
  pause = !pause;
}
