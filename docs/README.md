# 📝 자동차 경주 게임

주어진 횟수 동안 n대의 자동차가 전진하여 우승한 자동차 이름을 출력하는 게임이다.

## 📦 폴더 구조

📦javascript-racingcar-6  
┣ 📂`__tests__`  
┃ ┣ 📜ApplicationTest.js  
┃ ┣ 📜StringTest.js  
┃ ┗ 📜UnitTest.js  
┣ 📂docs  
┃ ┗ 📜README.md  
┣ 📂src  
┃ ┣ 📂constants  
┃ ┃ ┗ 📜constants.js  
┃ ┣ 📂utils  
┃ ┃ ┣ 📜createRandomNumber.js  
┃ ┃ ┣ 📜Utils.js  
┃ ┃ ┗ 📜validate.js  
┃ ┣ 📜App.js  
┃ ┗ 📜index.js  
┣ 📜.eslintrc.cjs  
┣ 📜.gitignore  
┣ 📜.npmrc  
┣ 📜.prettierrc  
┣ 📜package-lock.json  
┣ 📜package.json  
┗ 📜README.md

## 🚩 진행 순서

1. 사용자는 쉼표(,)를 기준으로 구분하여 `자동차 이름`을 입력한다.
2. 이름이 `5자 이하로 입력`되었는지 예외 검사한다.
3. 사용자는 자동차가 몇 번의 이동을 할 것인지 `횟수`를 입력한다.
4. 이동 횟수가 `숫자`인지 예외 검사한다.
5. `실행 결과` 메시지를 출력한다.
6. 각 자동차의 이름과 무작위 숫자, 전진 거리를 담은 `자동차 객체`를 생성한다.
7. 각 자동차별 `0 ~ 9 사이의 무작위 값`을 생성한다.
8. 각 자동차별로 `전진 또는 정지`한다.
9. `자동차 이동 현황`을 출력한다.
10. 자동차 이동 횟수만큼 `7 ~ 9번을 반복`한다.
11. `전진 거리가 가장 큰 자동차`를 최종 우승자로 선정한다.
12. `최종 우승자`를 출력하고 게임을 종료한다.

## ⚡️ 입출력

### `Console.readLineAsync(MESSAGE)`

> readLineAsync 함수를 통해 값을 입력받는다.

- [x] **n대의 자동차 이름 입력**
  - MESSAGE: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`
- [x] **자동차 이동 횟수 입력**

  - MESSAGE: `시도할 횟수는 몇 회인가요?`

### `Console.print(MESSAGE)`

> print 함수를 통해 값을 출력한다.

- [x] **실행 결과 출력**
  - MESSAGE: `실행 결과`
- [x] **자동차 이동 현황 출력**
  - MESSAGE: `"자동차 이름" : "이동 횟수"`
  - `-`: 이동 횟수
- [x] **최종 우승자 출력**

  - MESSAGE: `"최종 우승자" : "우승 자동차명"`

## ✨ 기능 구현 목록

### `Utils`

- [x] **자동차 객체 생성** `createCarData(carNameList)`: `자동차 이름`, `무작위 숫자`, `전진 거리`를 담은 자동차 객체를 생성한다.
- [x] **무작위 숫자 생성** `createRandomNumber(carData)`: `0 ~ 9 사이의 무작위 값`을 생성한다.
- [x] **자동차 전진** `goStopCar(carData)`: 무작위 값이 `4 이상`인 경우, 자동차는 전진한다.
- [x] **우승 자동차 선정** `pickWinner(carData)`: `이동 횟수가 가장 많은 자동차`가 최종 우승자이다.

  - 우승자는 한 명 이상이며, 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

### Utils: `throw new Error(MESSAGE)`

> throw문을 사용해 메시지를 표시하고 예외를 발생시킨 후, 애플리케이션을 종료한다.

- [x] **자동차 이름 길이 예외 검사** `validateLength(carName)`:
  - MESSAGE: `[ERROR] 이름은 5자 이하로 입력해야 합니다.`
- [x] **자동차 이동 횟수 예외 검사** `validateIsNumber(count)`:

  - MESSAGE: `[ERROR] 이동 횟수는 숫자로만 입력해야 합니다.`

### ✅ Test

- [x] 자동차 이름 길이 예외 검사
- [x] 자동차 이동 횟수 예외 검사
- [x] 자동차 객체 생성
- [x] 무작위 숫자 생성
- [x] 자동차 전진
- [x] 우승 자동차 선정

## 🎨 코딩 컨벤션

[우아한테크코스의 자바스크립트 스타일 가이드](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)

[Airbnb JavaScript 스타일 가이드 - 한국어 번역](https://github.com/ParkSB/javascript-style-guide)
