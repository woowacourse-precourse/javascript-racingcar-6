# 우아한테크코스 6기 프리코스 2주차 미션 - 자동차 경주

## 실행 결과 예시

```
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
시도할 횟수는 몇 회인가요?
5

실행 결과
pobi : -
woni :
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---

pobi : ----
woni : ---
jun : ----

pobi : -----
woni : ----
jun : -----

최종 우승자 : pobi, jun
```

---

## 구현할 기능 목록

1. 사용자 입출력 및 예외처리

- MissionUtils.Console.readLineAsync을 통한 입출력
  - 자동차 이름
    - [예외처리] 쉼표(,)를 기준으로 구분 시, 각 자동차 이름의 길이가 5자 초과했을 때
  - 이동 횟수
    - [예외처리] 숫자가 아닌 경우

2. 컴퓨터의 랜덤 값 추출

- 0부터 9까지의 숫자
- 값이 4 이상인 경우 전진
- 값이 4 미만인 경우 멈춤

3. 각 라운드별 실행 결과 출력

- [자동차이름] : [전진횟수] 형식

4. 우승자 안내 문구 출력

- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분
  ex) 최종 우승자 : pobi, jun

## 파일 구조

📦src
┣ 📂constants
┃ ┣ 📜message.js
┃ ┗ 📜setting.js
┣ 📂controller
┃ ┗ 📜AppController.js
┣ 📂model
┃ ┣ 📜Car.js
┃ ┗ 📜RacingApp.js
┣ 📂utils
┃ ┗ 📜generateNumber.js
┣ 📂validators
┃ ┣ 📜nameValidator.js
┃ ┗ 📜numberValidator.js
┣ 📂views
┃ ┣ 📜InputView.js
┃ ┗ 📜OutputView.js
┣ 📜App.js
┗ 📜index.js
