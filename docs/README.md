# javascript-racingcar-6 #

## 작성자
프론트엔드 6기 참가자 조수민

# 기능 구현 목록 ##

## RacingGame.js ##

### variable ###
	carNames - input을 통해 받은 자동차 이름
	cars - 차량 객체 배열
	repeatTime - 게임을 반복할 횟수

### moveCar(car) ###
	car.canMove() 메소드를 통해 차량 이동 여부를 판단하고 차량을 이동시킨다

### getCurrentDistance(car) ###
	car.currentDistance를 통해 차량의 현재 위치를 출력한다

### getWinners(cars)
	cars객체를 순회하면서 우승자를 join 하여 승리 메세지를 출력한다

---

## Car.js ##

### variable ###
	carName - 자동차의 이름
	carDistance - 자동차가 간 거리를 '-'를 통해 표시

### constructor(carName) ###
	자동차의 이름을 인자로 받아 carName을 초기화 한다

### canMove() ###
	randomNumber를 받고 차가 움직일 수 있다면 (randomNumber >= 4) true 아니면 false를 반환한다

### move() ###
	carDistance에 += 연산자를 통해 '-' 를 더해준다

### currentDistance() ###
	carName과 carDistance를 합친 템플릿 리터럴을 반환한다

___

## View.js ##

### readCarsName() ###
	사용자의 input을 받고 validation 검사를 진행 후 유효한 인자라면 list로 만들어 반환한다. 유효하지 않다면 throw Error

### readRepeatTime() ###
	게임을 반복할 횟수를 input 으로 받고 validation 검사를 진행 후 유효한 인자라면 반환한다. 유효하지 않다면 throw Error

### print(message) ###
	message를 인자로 받아 출력한다

---

## Validation.js ##

### hasSpecialCharacters(carsName) ###
	특수문자가 들어갔는 지 확인한다

### isMoreThanFiveLetters(carsName) ###
	이름이 5글자를 초과하는 지 확인한다

### isDuplicate(carsName) ###
	자동차 이름의 중복을 확인한다

### hasSpace(carsName) ###
	input에 공백이 있는 지 확인한다

### isNotNumeric(repeatTime) ###
	숫자로 변환될 수 있는 지 체크한다

---

# 구조
```
+ src
  + constants
    └ constants.js --- constants를 선언한 파일
	+ racing
		└ RacingGame.js	-- game의 진행을 맡는 class
		└ Car.js	-------- 자동차 객체를 정의한 class
	+ view
		└ View.js	-------- 입출력을 관리하는 class
		└ Validation.js	-- 입출력 유효성을 관리하는 class
  └ App.js  ---------  프로그램 실행 진입점
	└ index.js  -------- App.play() 
```

