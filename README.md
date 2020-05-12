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

   *주석으로 코드 포함 

   *player는 VolumeSlide, playTime, playBar(Canvas로 구현),
   play&stopBtn 구현

   *vanilla Js 이용 slide구현 autoSlide와 btnSlide구현 {
   --translate3d으로 옆으로 미는 방식 nextBtn과 prevBtn무리 없이 작동
   하지만 1페이지가 될때 setTimeout이 작동하면서 끝과 시작점으로 돌아오는 방식인데
   돌아오는 시작점이 1페이지에 겹치면 오작동.
   즉 1페이지에서 nextBtn와 prevBtn을 한번식 누르면 오작동.
   나머지는 제대로 구현 }

3. 위의 vanilla Js를 JQuery로 변환
   *jplayer 이용해 player연동
   
   *slick.js 이용해 slide 연동 
   구현-
   Main = Btn,auto
   News = Dots,auto
   Side_Nav = auto


4. 하단 Player Up
   
   * 오른쪽 리스트 클릭시 재생 메인 커버와 
     하단 Player에 현재 재생곡 커버&텍스트 변경.
     (실제 플레이곡의 변경 X)

## 추가 가능한 기능

반응형 CSS (@media)         