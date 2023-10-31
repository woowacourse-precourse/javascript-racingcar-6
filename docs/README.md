# 기능 요구 사항 구현

## class IOManager

- [x] input // 게임 내 사용자 입력 함수
- [x] output // 게임 내 디스플레이 함수

## class GameUtils

- [x] getRandomNumberInRange // 범위 안에서 랜덤 숫자를 얻는 함수
- [x] forEachApply // 배열과 함수를 받고, 해당 배열을 도는동안 함수를 실행시키는 함수

## class Car

- [x] constructor // State 초기화 함수, 여기서 이름이 정해지고, 자동차의 이동 거리가 0으로 초기화됨.
- [x] move // 자동차의 이동 거리를 변화 시키는 함수.
- [x] getName // 자동차의 이름을 반환하는 함수
- [x] getStep // 자동차의 이동 거리를 반환하는 함수

## class RacingCarGame

- [x] constructor // 자동차 State 초기화
- [x] getCarNames // 각 자동차에 이름을 부여할 수 있다
- [x] validateCarNames // 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다
- [x] createCarObjectsFromNames // n대의 자동차 생성
- [x] getTryCount // 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다
- [x] validateTryCount // 몇 번의 이동이기 때문에 '1 이상'의 '숫자'이어야 한다.
- [x] repeatMove // 자동차들과 횟수를 입력받고 Move를 반복하는 함수
- [x] decideToMove // 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- [x] displayCurrentProgress // 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [x] getWinners // 우승자들 배열을 반환하는 함수
- [x] displayResult // 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다. 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

## class RacingCarGameManager

- [x] initializeGame // 게임 초기화
- [x] runGame // 게임 시작
- [x] displayResult // 게임 결과 출력
