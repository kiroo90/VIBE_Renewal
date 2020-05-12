# VIBE Renewal 

NAVER VIBE Music Renewal

## VIBE CSS 기능

1. 기본적인 MouseOver , Hover 효과

2. Side_Nav 구현 

3. 검색창 구현

4. 들려주고 싶어서 Snb_Nav(Dropbox) 구현

5. 로봇 대응 마크업

## VIBE JS 기능

1. 기본적은 onClick Event 구현 

2. vanilla Js를 이용해서 player,slide 구현 연습 

   * 주석으로 코드 포함 

   * player
        * VolumeSlide
        * playTime
        * playBar(Canvas로 구현)
        * play&stopBtn 구현

   * vanilla Js 이용 slide구현 autoSlide와 btnSlide구현 
        > setInterval() 사용 translate3d으로 옆으로 미는 방식
   * nextBtn과 prevBtn무리 없이 작동
        > 하지만 1페이지가 될때 setTimeout이 작동하면서 끝과 시작점으로 돌아오는 방식인데
   돌아오는 시작점이 1페이지에 겹치면 오작동, 즉 아래의 코드가 겹치게 되면 오작동
       <pre>
       <code>
        setTimeout(function(){
            item.style.transition = '0s';
            item.style.transform = `translate3d(-${1180*slideLen}px, 0px, 0px)`;
         },501);
        setTimeout(function(){
            item.style.transition = '0s';
            item.style.transform = "translate3d(0px, 0px, 0px)";
            },601)
        </code>
        </pre>

3. 위의 vanilla Js를 JQuery로 변환
   * jplayer.js 이용해 player연동
   
   * slick.js 이용해 slide 연동 
        * Main = Btn,auto
        * News = Dots,auto
        * Side_Nav = auto


4. 하단 player Up
   
    * 오른쪽 리스트 클릭시 재생 메인 커버와 
     하단 Player에 현재 재생곡 커버&텍스트 변경.
     >실제 플레이곡의 변경 X

    * 오른쪽 리스트 X 클릭시 해당 리스트 삭제 구현
     >player down후 다시 up시 리스트 복구


## 추가로 필요한 기능

1. 반응형 CSS (@media)         