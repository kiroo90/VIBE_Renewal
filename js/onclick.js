$(document).ready(() => {
    // 상단 검색창
    $(".jsClick").click((e) => {
        const on = "on";
        $(".search_bar__none").toggleClass(on);
        $(".iconNone").toggleClass(on);
    });

    // 상단 snbNav
    $(".jsSnbNav").click(() => {
        const snbOn = "snbOn";
        $(".nav_snb__none").toggleClass(snbOn);
    });

    // 하단 플레이어 버튼
    $(".jsIcon").click((e) => {
        const white = "colorWhite";
        $(e.currentTarget).toggleClass(white);
    });

    // 하단 플레이어 하트 버튼
    $(".xi-heart").click((e) => {
        const accent = "colorAccent";
        $(e.currentTarget).toggleClass(accent);
    });

    // 디제이 스테이션 + 하단 플레이어 네비 버튼
    $(".onDrop").on("click", (e) => {
        const on = "on_02";
        const up = "up";
        $(e.currentTarget).toggleClass(on);
        $(e.currentTarget).next().toggleClass(up);
    });

    // 디제이 스테이션 + 하단 플레이어 네비 마우스아웃
    $(".list_dropdown").on("mouseleave", (e) => {
        const up = "up";
        const on = "on_02";
        $(e.currentTarget).removeClass(up);
        $(e.currentTarget).prev().toggleClass(on);
    })

    // 하단 플레이리스트  on버튼
    $(".arrowBtn").on("click", (e) => {
        const up = "up";
        const bgColor = "bgColor";
        const none = "none";
        $(".play_view__container").toggleClass(up);
        $(".play_view__btn").toggleClass(bgColor);

        if($(".xi-angle-up").hasClass(none) === true) {
            $(".xi-angle-down").addClass(none);
            $(".xi-angle-up").removeClass(none);
        } else {
            $(".xi-angle-down").removeClass(none);
            $(".xi-angle-up").addClass(none);
            $(".list_music").removeClass("close");  //새로 플레이리스트를 열때 삭제된 리스트 복구
            $(".list_music").css({              //새로 플레이리스트를 열때 삭제된 리스트 복구
                height : "40px",
                padding : "8px 28px 8px 20px"
            });
        }
    });

    // on플레이리스트 오른쪽 리스트 삭제버튼
    $(".jsItemClose").on("click", (e) => {
        $(e.currentTarget).parents(".list_music").addClass("close");
        let setCount = true
        if(setCount){
           setTimeout(()=>{  //시간차를 둬서 왼쪽으로 사라진후 리스트가 줄어듬
                $(e.currentTarget).parents(".close").css({
                    height : "0px",
                    padding : "0px"
                });
            } ,410);
            setCount = false;
        }
    });

    //on플레이리스트 리스트 클릭시 해당 리스트로 텍스트,커버 변경 & 선택 디브 컬러변경
    $(".container").on("click", (e) => {
        const targetImg = $(e.currentTarget).find("img").attr("src");
        console.log(targetImg);
        const targetText = $(e.currentTarget).children("div").html();
        $(".jsCover").attr("src" , targetImg);
        $(".play_title").html(targetText);
        if($(".list_music").hasClass("co") === true) {
            $(".list_music").removeClass("co");
            $(e.currentTarget).parents(".list_music").addClass("co");
        };
    });
});


// 바닐라 자바스크립트 연습

// const search = document.querySelector(".search_bar__none"),
//       btns = document.querySelectorAll(".jsClick"),
//       snbNavBtn = document.querySelectorAll(".jsSnbNav"),
//       snbNav = document.querySelector(".nav_snb__none"),
//       playIcon = document.querySelectorAll(".jsIcon"),
//       heart = document.querySelector(".xi-heart"),
//       arrowBtn = document.querySelectorAll(".arrowBtn"),
//       playView = document.querySelector(".play_view__container"),
//       arrowBg = document.querySelector(".play_view__btn"),
//       arrowTop = document.querySelector(".xi-angle-up"),
//       arrowBot = document.querySelector(".xi-angle-down"),
//       onDrop = document.querySelectorAll(".onDrop"),
//       dropUp = document.querySelectorAll(".list_dropdown");

      
// 디제이 스테이션 드롭다운



// for(let i = 0; i < onDrop.length; i++){
//     onDrop[i].addEventListener("click", () => {
//         const up = "up";
//         const on = "on_02"
//         dropUp[i].classList.toggle(up);
//         onDrop[i].classList.toggle(on);
//     });
// }

//하단 플레이어 하트버튼

// heart.addEventListener("click", () => {
//     const accent = "colorAccent";
//     heart.classList.toggle(accent);
// });


// 하단 플레이어 버튼 컬러
// for(let i = 0; i < arrowBtn.length; i++) {
//     arrowBtn[i].addEventListener("click", function(){
//         const up = "up";
//         const bgColor = "bgColor";
//         const none = "none";
//         playView.classList.toggle(up);
//         arrowBg.classList.toggle(bgColor);

//         if (arrowTop.classList.contains(none)) {
//             arrowBot.classList.add(none);
//             arrowTop.classList.remove(none);
            
//         } else {
//             arrowTop.classList.add(none);
//             arrowBot.classList.remove(none);
//         }
//     })
// };


// 하단 플레이어 버튼

// for(let i = 0; i < playIcon.length; i++) {
//     playIcon[i].addEventListener("click", () => {
//         const white = "colorWhite";
//         playIcon[i].classList.toggle(white);
//     })
// };
//


// 상단 검색,네비버튼

// for(let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", () => {
//         const on = "on";
//         search.classList.toggle(on);
//     })
// };

// for(let i = 0; i < snbNavBtn.length; i++) {
//     snbNavBtn[i].addEventListener("click", () => {
//         const snbOn = "snbOn";
//         snbNav.classList.toggle(snbOn);
//     })
// };