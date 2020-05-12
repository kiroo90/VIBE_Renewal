$(document).ready(function(){
    $('.slide_wrap').slick({
        arrows: true,
        autoplay: true,
        appendArrows: $(".header_main__container"),
        prevArrow: $(".icon_arrow-left"),
        nextArrow: $(".icon_arrow-right"),
        autoplaySpeed: 5000
    });

    $('.slide_wrap_02').slick({
        arrows: false,
        autoplay: true,
        appendDots: $(".slide_wrap_02"),
        dots: true,
        dotsClass: "slide_line",
        autoplaySpeed: 4000
    });

    $('.benner').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
});



// 바닐라 자바스크립트 연습

// const item = document.querySelector(".slide_wrap");
// const slideItem = document.querySelectorAll(".slider_item");
// const item02 = document.querySelector(".slide_wrap_02");
// const nextBtn = document.querySelector(".icon_arrow-right");
// const prevBtn = document.querySelector(".icon_arrow-left");
// const slideLen = slideItem.length;
// console.log(slideLen);
// let num = 0;
// let num02 = 0;


// const firstItemClone = item.firstElementChild.cloneNode(true);
// const firstItemClone02 = item02.firstElementChild.cloneNode(true);
    
// item.appendChild(firstItemClone); 
// item02.appendChild(firstItemClone02); 

// let curIndex = 0;
// let curIndex02 = 0;

// nextBtn.addEventListener("click", function(){
//     if (curIndex <= slideLen - 1) {
//         cur = num+1;
//         item.style.transition = '0.6s';
//         item.style.transform = `translate3d(-${1180*cur}px, 0px, 0px)`;
//         num++;
//         curIndex++
//     }
//     console.log(cur ,"클릭cur");
//     if (num === slideLen) {
//         setTimeout(function(){
//             item.style.transition = '0s';
//             item.style.transform = "translate3d(0px, 0px, 0px)";
//         },501);
//         curIndex = 0;
//         num = 0;
//     }
// });

// prevBtn.addEventListener("click", function(){
//     if (curIndex >= 0) {
//         cur = num-1;
//         item.style.transition = '0.6s';
//         item.style.transform = `translate3d(-${1180*cur}px, 0px, 0px)`;
//         num--;
//         curIndex--;
//     }
//     if (curIndex === 0) {
//         setTimeout(function(){
//             item.style.transition = '0s';
//             item.style.transform = `translate3d(-${1180*slideLen}px, 0px, 0px)`;
//         },501);
//         curIndex = slideLen;
//         num = slideLen;
//         cur = 0;
//     }
// });

// function move(){
//         setInterval(function(){
//             cur = curIndex+1;
//             item.style.transition = '0.6s';
//             item.style.transform = `translate3d(-${1180*cur}px, 0px, 0px)`;
//             curIndex++;
//             num++
//             if(curIndex === 10){
//                 setTimeout(function(){
//                     item.style.transition = '0s';
//                     item.style.transform = "translate3d(0px, 0px, 0px)";
//                 },601)
//                 curIndex = 0;
//                 num = 0;
//                 cur = 0;
//             } 
//         },5000);
// }

// document.addEventListener("DOMContentLoaded",function(){
//     move();
// });



// function move02(){
//     setInterval(function(){
//         cur02 = curIndex02+1;
//         item02.style.transition = '0.6s';
//         item02.style.transform = `translate3d(-${1180*cur02}px, 0px, 0px)`;
//         curIndex02++;
//         num02++
//         if(curIndex02 === 5){
//             setTimeout(function(){
//                 item02.style.transition = '0s';
//                 item02.style.transform = "translate3d(0px, 0px, 0px)";
//             },601)
//             curIndex02 = 0;
//             num02 = 0;
//             cur02 = 0;
//         } 
//     },4000);
// }

// document.addEventListener("DOMContentLoaded",function(){
//     move02();
// });
