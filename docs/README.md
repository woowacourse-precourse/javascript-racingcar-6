# 자동차 경주

#### 예상 실행 단계

![](https://velog.velcdn.com/images/kjh10555/post/cee6596d-cb08-4693-acb0-06a7e6f08833/image.png)

#### 앱 로직

![](https://velog.velcdn.com/images/kjh10555/post/5801ff02-1673-4b64-b566-54a55cb839d5/image.png)

## 기능 목록

app객체

- [x] 자동차에 이름을 부여할 수 있다. carName
- [x] 사용자가 횟수를 입력한다. gameLap
- [x] 입력값을 배열로 바꾼다. convertToArray()
- [x] 게임을 시작한다. play()
- [x] 자동차 이름을 입력할 수 있다. enterCarName()
- [x] 레이스 횟수를 입력할 수 있다. entreRaceLaps()

Random 객체

- [x] 무작위 값이 4이상인지 확인한다. isGreaterThanFour()
- [x] 무작위 값을 구한다. getRandomNumber()

RacingCar 객체

- [x] 출전하는 자동차 명단을 만든다. createEntry()
- [x] 횟수만큼 자동차를 전진하고 멈출 수 있다. moveForwardCar()

출력
RaceOrganizer 객체

- [x] 전진하는 자동차를 출력할 땐 자동차 이름을 같이 출력한다. talkToCarMovingForward()
- [x] 자동차 경주 게임이 끝나고 누가 우승했는지를 알려준다. talkToWinner()
  - [x] 우승자가 여러 명일 경우 쉼표를 이용하여 구분한다. getCandidates()
- [x] 전진한 차의 lap을 변경한다. reportRaceStatus()

예외사항

CarNaming 객체

handleException()

- [x] 자동차 이름이 1글자에서 5글자이하여야 한다.
- [x] 자동차 이름에 공백이 포함되면 안된다.
- [x] 자동차 이름에 특수기호가 없어야 한다.
- [x] 자동차가 한 대면 게임을 실행할 수 없다.
- [x] 한 경기에 최대 출전 자동자의 수가 20를 넘을 수 없다.

Frequency 객체

handleException()

- [x] 횟수가 1이상의 숫자여야 한다.
- [x] 숫자만 입력해야 한다.

RaceStatus 객체

reportTrackIssue()

- [x] 출발한 사람이 없으면 에러 발생

## 기능 요구 사항

**초간단 자동차 경주 게임을 구현한다.**

주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.

각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.

전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.

자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

사용자가 잘못된 값을 입력한 경우 throw문을 사용해 "[ERROR]"로 시작하는 메시지를 가지는 예외를 발생시킨 후, 애플리케이션은 종료되어야 한다.

```
예시) [ERROR] 숫자가 잘못된 형식입니다.
```
