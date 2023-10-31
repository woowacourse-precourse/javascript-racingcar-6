# 기능 구현 목록

## ✔️ 게임 시작

- App.js의 play 메서드로 프로그램 시작
  - CarRaceGameController클래스로 연결되어 CarRaceGameController클래스에서 게임이 진행된다.

## ✔️ 자동차 이름 입력

- MissionUtils 라이브러리에서 제공하는 Console.readLineAsync 사용
- 클래스명: CarRaceGameController
- 객체명: Input
- 함수명: InputRaceCarName(CarRaceGameController 폴더), readInputRaceCarName(Input 폴더)
- 기능: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`라는 문구가 나오면 경주 할 자동차 이름을 입력하고 경주 할 자동차 이름을 입력하면 입력한 자동차로 자동차 경주를 할 수 있다.
  - (예외처리) 자동차 이름이 5자 초과인 경우 throw 문으로 종료시킴 ([ERROR]이름이 5자 이하여야 합니다.)
  - (예외처리) 자동차 이름에 아무 값도 입력되지 않는 경우 throw 문으로 종료시킴 ([ERROR] 자동차의 이름에 공백이 포함될 수 없습니다.)
  - (예외처리) 자동차 이름이 중복되는 경우 throw 문으로 종료시킴 ([ERROR] 자동차의 이름은 중복될 수 없습니다.)
  - (예외처리) 자동차 이름에 공백이 포함되어 있는 경우 throw문으로 종료시킴 ([ERROR] 자동차의 이름에 공백이 포함될 수 없습니다.)

## ✔️ 시도할 횟수

- MissionUtils 라이브러리에서 제공하는 Console.readLineAsync 사용
- 클래스명: CarRaceGameController
- 객체명: Input
- 함수명: InputRaceCarNumberOfAttempts()(CarRaceGameController 폴더), readInputRaceCarNumberOfAttempts()(Input폴더)
- 기능: `시도할 횟수는 몇 회인가요?`라는 문구가 나오면 횟수를 입력하고 횟수를 입력하면 자동차 경주가 횟수에 따라 진행된다.
  - (예외처리) 숫자가 아닌 것이 들어올 경우 throw문으로 종료시킴 ([ERROR] 시도할 횟수는 숫자만 입력 가능합니다.)
  - (예외처리) 0이 입력된 경우 throw 문으로 종료시킴 ([ERROR] 시도할 횟수는 0이 될 수 없습니다.)

## ✔️ 자동차 상태 기능 생성

- 클래스명: CarRaceCondition
- 함수명: < style='color:skyblue'>getRaceCarName() : 자동차 이름 / getRaceCarForward(): 앞으로 나갈 수 있는 기능
- 기능: 이 클래스 자체가 자동차가 되고 이름이 붙으면 앞으로 나갈 수 있는 기능이 생깁니다.

## ✔️ 자동차 전진 조건 번호 생성

- MissionUtils 라이브러리의 Random.pickNumberInRange() 사용
- 클래스명: CarForwardRandomNumberGenerator
- 함수명: CarForwardRandomNumberGenerator()
- 기능: 컴퓨터가 0 ~ 9 사이의 숫자 중 랜덤으로 값을 선택하고 랜덤 값이 4 이상이면 앞으로 1칸 전진한다.

## ✔️ 자동차가 얼마나 전진했는지 출력

- MissionUtils 라이브러리에서 제공하는 Console.print 사용
- 기능: 랜덤 값이 4 이상이면 "-" 문자로 자동차 이름 옆에 출력된다
- 예시

```javascript
pobi : -
woni :
jun : -
```

## ✔️ 자동차 경주 우승자 출력

- MissionUtils 라이브러리에서 제공하는 Console.print 사용
- 기능: 시도할 횟수가 끝나면 각 자동차들 중 가장 많이 전진한 자동차가 최종 우승자로 출력된다.
- 예시

```javascript
최종 우승자 : pobi, jun
```
