const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('audio');
const prgress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-bar');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// Song title
const songs = ['Alan Walker x Jamie Miller','Alan Walker','baba','tarai-taria'];

const mathCal = Math.floor(Math.random() * songs.length);


let songIndex = mathCal;

// initial song
loadSong(songs[songIndex]);

function loadSong(song){
    title.innerHTML = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `image/${song}.jpg`;
}




function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    // if(songIndex > mathCal){
    //     songIndex = 0
    // audio.play()

    // }
    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');

    audio.pause()
}

// prev song

function prevSong(){
    songIndex--

    if(songIndex < 0){
        songIndex = songs.lenght - 1
       
    }
    loadSong(songs[songIndex]);
    playSong()
}

// next song
function nextSong(){
    songIndex++

    if(songIndex > songs.length -1 ){
        songIndex = 0
        }

    loadSong(songs[songIndex]);
    playSong()
}

// updatePgrogreaa
function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progressPercentage = (currentTime / duration) * 100;
    prgress.style.width = `${progressPercentage}%`
}

function setProgress(e) {
    const width = this.clientWidth;
    const clientX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clientX / width) * duration
}
// add event linter
playBtn.addEventListener('click',() => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})

// chnage song event
prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);
audio.addEventListener('timeupdate',updateProgress);
progressContainer.addEventListener('click',setProgress)
audio.addEventListener('ended',nextSong)