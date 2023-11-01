## 구현할 기능 목록

- 경주 할 자동차 이름 입력 받기
- 시도할 횟수 입력 받기
- 전진할 무작위 값 생성하기
- 시도 횟수만큼 전진 값 업데이트하기
- 업데이트 된 자동차 현황 출력하기
- 우승자 출력하기

#### 예외 처리

- 자동차 이름은 5자 이하만 가능하다
- 시도할 횟수 입력은 숫자만 입력 가능하다.

## 추가 : 구현한 클래스와 함수 목차

#### model : Cars.js 클래스

- `constructor()` : 자동차 객체 배열, 횟수 생성자
- `setList()` : 자동차 객체 생성 setter
- `setTimes()` : 횟수 setter

#### view : View.js 클래스

- `userInputCar()` : 경주할 자동차 이름 입력
- `userInputTimes()` : 시도할 횟수 입력
- `printCarListAsTimes()` : 횟수만큼 이동한 자동차 거리 현황 출력
- `printWinner()` : 우승자 출력

#### App.js 클래스 (controller 역할)

- `constructor()`: model와 view 객체, 우승자리스트 생성자
- `receiveUserInputAndSave()` : 입력 함수 호출 및 데이터 저장
- `createObjectDistance()` : 랜덤 값 생성 후 전진하기
- `updateAsTimes()` : 횟수에 따라 전진하기
- `findMaxDistance()` : 객체 중 가장 전진 많이 한 거리 계산하기
- `whoIsWinner()` : 우승자 골라내기
- `play()` : 게임 play 함수

#### utils: message.js / validation.js

- message 객체 : input 질문 문구, 예외 처리 문구
- validation 함수 객체 : 예외처리
- `strSize()` : 이름 입력 시, 5글자 이하여야한다
- `isItNumber()` : 시도할 횟수 입력 시, 숫자여야한다.
