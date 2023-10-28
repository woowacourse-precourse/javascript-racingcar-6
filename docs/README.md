# prologue

이번엔 mvc패턴을 참고하여 코드를 설계
여기서 view의 경우 콘솔에 출력만 하면 되기에 제외

종합적으로
생성할 파일은

-   App.js : 메인함수(시작지점)
-   Data.js : 상수 및 변수들 저장
-   Controller.js : 데이터 조작 후 출력까지 이후 데이터 업데이트

# Data.js

데이터베이스 느낌으로 객체로 저장

### 변수

-   플레이어 객체 ex) 이름 : 주행거리(숫자로)
-   반복 횟수

### 상수

-   플레이어 객체 인풋 메시지
-   반복 횟수 인풋 메시지
-   "실행결과"
-   "최종우승자 :"

# Controller.js

### 입력 함수

-   setPlayer

    -   사용자로부터 경기참가자들의 이름을 받아 객체로 변환후
    -   Data.js의 player에 저장

-   setNumber
    -   사용자로부터 반복횟수를 받아 숫자로 리턴
    -   Data.js의 number에 저장

### 경기 진행 함수

-   raceProgress
    -   데이터의 player에 접근해 랜덤숫자가 4이상이면 1을 증가시킴

### 결과 문자열 반환 함수

-   getRaceResultText

    -   현재 참가자들의 거리를 원하는 출력에 맞게 텍스트로 변경해서 리턴

-   getWinnerText
    -   우승자를 텍스트로 변환해서 리턴
