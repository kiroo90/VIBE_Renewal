$(document).ready(() => {
    $("#jquery_jplayer").jPlayer({
        ready: (e) => {
            $(e.target).jPlayer("setMedia", {
                m4a: "./MIBS.mp3"
            });
        },
        swfPath: "./",		
        supplied: "m4a, mp3, oga, wav",
        cssSelectorAncestor: "#jp_container_2",
        autoBlur: true
    });
});




// 바닐라 자바스크립트로 구현연습

// const canvasWidth = 800;
// const audioEl = document.getElementById("audio");
// const canvas = document.getElementById("progress").getContext('2d');
// const playBtn = document.querySelector('.xi-play');
// const playBtnImg = document.querySelector('.play img');

// audioEl.addEventListener('loadedmetadata', function() {
//     const duration = audioEl.duration;
//     const currentTime = audioEl.currentTime;
//     document.getElementById("duration").innerHTML = convertElapsedTime(duration);
//     document.getElementById("current_time").innerHTML = convertElapsedTime(currentTime);
//     canvas.fillRect(0, 0, canvasWidth, 80);
// });

// playBtnImg.addEventListener("click", togglePlaying);

// playBtnImg.addEventListener("click", () => {

//     if(playBtnImg.src.match("playbtn")) {
//         playBtnImg.src = "./img/stopbtn.png";
//     } else {
//         playBtnImg.src = "./img/playbtn.png";
//     }
// })
  
// function togglePlaying() {
//     let play = playBtn.innerHTML === `play`;
//     let method;

//     if (play) {
//         playBtn.innerHTML = `pause`; 
//         method = 'play';
//     } else {
//         playBtn.innerHTML = `play`;
//         method = 'pause';
//     }
//     audioEl[method]();
// };

// function updateBar() {
//     canvas.clearRect(0, 0, canvasWidth, 80);
//     canvas.fillStyle = "#000";
//     canvas.fillRect(0, 0, canvasWidth, 80);
    
//     const currentTime = audioEl.currentTime;
//     const duration = audioEl.duration;
    
//     if (currentTime === duration) {
//       playBtn.innerHTML = "Play";
//     };
    
//         document.getElementById("current_time").innerHTML = convertElapsedTime(currentTime);
        
//     const percentage = currentTime / duration;
//     const progress = (canvasWidth * percentage);
//         canvas.fillStyle = "#FA3A54";
//         canvas.fillRect(0, 0, progress, 80);
// };
  
// function convertElapsedTime(inputSeconds) {
//     let seconds = Math.floor(inputSeconds % 60);
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     };
//     let minutes = Math.floor(inputSeconds / 60);
//     return minutes + ":" + seconds;
// };