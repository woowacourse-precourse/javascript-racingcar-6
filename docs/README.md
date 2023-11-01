## 기능 목록

- [ X ] 게임 시작.
- [ X ] 사용자 입력 받기.
  - [ X ] 자동차 이름 입력.
  - [ X ] 시도 횟수 입력.
  - [ X ] 사용자 입력 유효성 검사.
    - [ X ] 자동차의 이름이 쉼표를 기준으로 5자 이하인지.
    - [ X ] 자동차의 이름이 공백인지.
    - [ X ] 자동차의 이름이 중복 됐는지.
    - [ X ] 자동차의 이름에 공백(스페이스)가 포함됐는지.
    - [ X ] 시도할 횟수가 숫자인지.
- [ X ] 스코어보드판 만들기.
- [ X ] 무작위 값 생성.
- [ X ] 무작위 생성값이 4 이상인지 확인.
- [ X ] 자동차의 무작위 생성값이 4 이상이 맞는경우 카운트 1 증가.
- [ X ] 실행결과 출력.
- [ X ] 게임 결과 출력.
  - [ X ] 우승자 판단.

---

## 모듈화

- userInput : 사용자 입력 담당. getCarNames, getTryNumber
- inputValidation : 사용자 입력 유효성 검사. checkCarNamesAreValid, checkTryNumberIsValid
- scoreBoard : 자동차 게임 점수 관련. createScoreBoard, calcurateScore, printScore
- gameResult : 자동차 게임 결과 관련. printGameResult, findWhoIsWinner
- utils : 유틸리티 함수. createRandomNumber, checkCanMove, validationUtils.

---

## 함수

### App.js

- playRacingGame()
  - 기능 : 레이싱 게임 스타트.
  - input : none
  - output : none

### userInput.js

- getCarNames()

  - 기능 : 자동차 이름 입력.
  - input : 사용자 입력.
  - output: 사용자가 입력한 자동차 이름 문자열.

- getTryNumber()
  - 기능 : 시도횟수 입력.
  - input : 사용자 입력.
  - output : 사용자가 입력한 시도 횟수.

### scoreBoard.js

- createScoreBoard()

  - 기능 : 자동차들에 대한 스코어 보드를 생성.
  - input : 자동차 이름.
  - output : 자동차 스코어 보드.
  - parameter : 자동차 이름 배열.

- calcurateScore()

  - 기능 : 자동차가 전진할 수 있는지 판단 및 스코어 기록.
  - input : 스코어보드.
  - output : 기록된 스코어 보드.
  - parameter : 기록될 스코어 보드.

- printScore()
  - 기능 : 경기 경과를 출력한다.
  - input : 기록된 스코어 보드.
  - output : none

### inputValidation.js

- checkCarNamesAreValid()

  - 기능 : 사용자 입력으로 받은 자동차 이름의 유효성을 검사.
  - input : 자동차 이름 문자열.
  - output : 유효성 검사 이상없는 사용자 입력 자동차 이름 배열.
  - parameter : 사용자 입력 문자열.

- checkTryNumberIsValid()
  - 기능 : 사용자 입력으로 받은 시도 횟수의 유효성을 검사.
  - input : 사용자가 입력한 시도 횟수.
  - output : none
  - parameter : 사용자 입력 문자열.

### gameResult.js

- findWhoIsWinner()

  - 기능 : 경기 종료시 스코어보드를 판독해 누가 우승자인지 판별.
  - input : 경기 종료시 기록된 스코어 보드.
  - output : 최종 우승자 배열.
  - parameter : 기록된 스코어 보드.

- printGameResult()
  - 기능 : 게임결과 최종 우승자 출력.
  - input : 경기 종료시 기록된 스코어 보드.
  - output : none.
  - parameter : 기록된 스코어 보드.

### validationUtils.js

- validationUtils
  - 기능 : 사용자 입력 유효성 검사 유틸리티 객체.
  - checkCarNamesHaveBlank() : 사용자가 입력한 자동창 이름이 공백인지 확인.
  - checkCarNameIsOverFive() : 사용자가 입력한 자동차 이름의 길이가 5자리 이하인지 확인.
  - checkCarNameWithBlank() : 사용자가 입력한 자동차 이름에 공백이 포함 됐는지 확인.
  - checkCarNamesAreDuplicated() : 사용자가 입력한 자동차 이름이 중복됐는지 확인.
  - checkTryNumberWithBlank() : 사용자가 입력한 시도 횟수가 공백인지 확인.
  - checkTryNumerIsCharacter() : 사용자가 입력한 시도 횟수가 숫자가 아닌 문자인지 확인.

### scoreUtils.js

- createRandomNumber()

  - 기능 : 0 ~ 9 사이 랜덤 숫자 생성.
  - input : none
  - output : 랜덤 숫자 1자리.

- checkCanMove()
  - 기능 : 생성된 랜덤 숫자가 4 이상인지 확인.
  - input : none.
  - output : true, false.

---

## 기능요구사항

초간단 자동차 경주 게임을 구현한다.

주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
사용자가 잘못된 값을 입력한 경우 throw문을 사용해 "[ERROR]"로 시작하는 메시지를 가지는 예외를 발생시킨 후, 애플리케이션은 종료되어야 한다.
