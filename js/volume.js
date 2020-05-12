// 바닐라 자바스크립트 볼륨 슬라이드바 연습

// const volume = document.querySelector('.volume');
// const volumeRange = document.querySelector('.volume_range');
// const volumeContainer = document.querySelector('.volume_container');
// const volumeIcon = document.querySelector(".xi-volume-up");

// const volumeRangeWidth = volumeRange.getBoundingClientRect().width; 

// let mouseIsDown = false;

// window.addEventListener("mouseup", up);
// volumeContainer.addEventListener("mousedown", down);
// volumeContainer.addEventListener("mousedown", volumeSlide);
// volumeContainer.addEventListener("mousemove", volumeSlide);
// volumeIcon.addEventListener("click", () => {
//       volumeIcon.classList.toggle("color");
// });

// function down() {
//   mouseIsDown = true;
// }

// function up() {
//   mouseIsDown = false;
//   firstClick = true;
// }

// let firstClick = true; 

// function volumeSlide(e) {
//     if (mouseIsDown && !firstClick) {
//         let x = Math.floor(e.offsetX );
//         if (x < 0) x = 0; 
//         if (x > volumeRangeWidth) x = volumeRangeWidth; 
//         volume.style.width = (x + 0) + 'px';
//     }
//     firstClick = false;
// }
