

// VIDEO I AUDIO *********************************************************
var $ = selector => document.querySelector(selector);

//niz naziva pesama
var songsArr = ['Alabama Shakes - Dont Wanna Fight', 'Blue Ridge Mountains - Fleet Foxes', 'Editors - The Phone Book', 'Fly Boy Blue - Elbow', 'For 12 - Other Lives', 'In the morning -Fleet Foxes', 'Magnificent -Elbow', 'Mykonos - Fleet Foxes', 'Shearwater - Backchannels', 'The Beach Boys - Good Vibrations'];

const playSong = $('#play');

const pauseSong = $('.pause');

const stopSong = $('.stop');

const playNext = $('#next');

const playPrev = $('#prev');

const volSlider = $('.volume_slider');

const buttonActive = $('.button');

const muteButton = $('.mute');

const soundIcon = $('.sound_icon');
soundIcon.setAttribute('src', 'sound.png');

const songsList = $('.songs_holder');

var songsSrc = [];

// ubacivanje rednog broja i naziva pesama u player
for (let i = 0; i < songsArr.length; i++) {
	
	//pravljenje niza src-a pesama
	songsSrc.push(songsArr[i] + '.mp3');

	if (i < 9) {
	
		var songNumber = document.createTextNode('0' + (i + 1) + '. ');
    }

    else {
    	var songNumber = document.createTextNode((i + 1) + '. ');
    }
	
	var songDiv = document.createElement('div');
	songDiv.setAttribute('class', 'pusti_pesmu' + i);
	songDiv.style.cursor = 'pointer';

	var songParagraph = document.createElement('p');
	songParagraph.setAttribute('class', 'song_' + (i + 1));
	
	var songNumberHolder = document.createElement('span');
	songNumberHolder.appendChild(songNumber);

	var songName = document.createTextNode(songsArr[i]);
	songParagraph.appendChild(songName);
	songParagraph.style.display = 'inline';
	
	songDiv.appendChild(songNumberHolder);
	songDiv.appendChild(songParagraph);

	songDiv.style.margin = '5px';
	
	songsList.appendChild(songDiv);
}; //kraj petlje


const zvuk = new Audio();

var n = 0;

var songDivClass = '.pusti_pesmu' + n;

var songColored = $(songDivClass);

// zvuk.addEventListener('play', function() {
	
// 	songColored.classList.add('boja_pesme');
// });

function pustiPesmu() {

	zvuk.src = songsSrc[n];
			
	zvuk.play();

	if (zvuk.paused) {
		
		zvuk.currentTime

		zvuk.play()
    }
};

function pauzirajPesmu() {

	if (!zvuk.paused) {
		
		zvuk.pause()

		pauseSong.focus()
    }

    else if (zvuk.currentTime == 0) {

    	zaustaviPesmu()

    	!pauseSong.focus()

    }

    else {

    	zvuk.currentTime

    	zvuk.play()

    	playSong.focus();
    }
};

function zaustaviPesmu() {

	zvuk.pause()
	
	zvuk.currentTime = 0
};

function pustiSledecuPesmu() {
		
	if (n == songsSrc.length - 1) {

		n = 0

		pustiPesmu()

		playSong.focus();
	}

	else {

		n = n + 1

		pustiPesmu()

		playSong.focus();
	}
};

function pustiPrethodnuPesmu() {
	
	if (n == 0) {
		
		n = songsSrc.length -1;

		pustiPesmu()

	}

	else {

		n = n - 1;

		pustiPesmu()

		playSong.focus();
	}

};

function mute() {
	
	if (zvuk.muted === false) {    
    	
    	zvuk.muted = true;
    	
    	soundIcon.setAttribute('src', 'sound_mute.png');
    	soundIcon.style.background = '#ff4d4d';
    	
    	muteButton.style.background = 'darkorange';
    }

	else {
		
		zvuk.muted = false;
		
		soundIcon.removeAttribute('src', 'sound_mute.png');
		
		soundIcon.setAttribute('src', 'sound.png');
		
		muteButton.style.background = 'lightgray';

		soundIcon.style.background = 'lightgray';

		if (zvuk.currentTime != 0) {
		
		playSong.focus();}
	}
};

function jacinaZvuka() {
	
	zvuk.volume = volSlider.value / 100;

};

playSong.addEventListener('click', pustiPesmu);

pauseSong.addEventListener('click', pauzirajPesmu); 
	
stopSong.addEventListener('click', zaustaviPesmu); 

playNext.addEventListener('click', pustiSledecuPesmu);

playNext.addEventListener('mouseover', function () {

	playNext.addEventListener('mousedown', function() {
		playNext.classList.add('prev_next')
	})

	playNext.addEventListener('mouseup', function() {
		playNext.classList.remove('prev_next')
	})
});

playPrev.addEventListener('click', pustiPrethodnuPesmu);

playPrev.addEventListener('mouseover', function () {

	playPrev.addEventListener('mousedown', function() {
		playPrev.classList.add('prev_next')
	})

	playPrev.addEventListener('mouseup', function() {
		playPrev.classList.remove('prev_next')
	})
});

muteButton.addEventListener('click', mute);

volSlider.addEventListener('mousemove', jacinaZvuka);































