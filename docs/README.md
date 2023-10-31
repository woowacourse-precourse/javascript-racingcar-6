## 기능 목록

- [x] 5자 이하의 자동차 이름을 쉼표를 기준으로 구분해 입력받는다. - getCarNames()

  - [x] 입력값을 검증한다. - validateCarName()
    - [x] 하나의 이름만 입력하면 예외를 발생시킨다. - validateNumberOfNames()
    - [x] 중복된 이름을 입력하면 예외를 발생시킨다. - validateDuplicateName()
    - [x] 이름이 5자를 초과하거나 1자 미만이면 예외를 발생시킨다. - validateNameLength()
    - [x] 이름에 특수문자가 포함되어 있으면 예외를 발생시킨다. - validateTypeOfName()

- [x] 시도할 횟수(몇 번의 이동을 할 것인지)를 입력받는다. - getGameCount()

  - [x] 입력값을 검증한다. - validateGameCount()
    - [x] 숫자가 아닌 값을 입력하면 예외를 발생시킨다. - validateTypeOfCount()
    - [x] 0을 입력하면 예외를 발생시킨다. - validateRangeOfCount()

- [x] 입력한 횟수만큼 게임을 진행한다. - Race#start()

  - [x] 각 자동차가 게임을 진행한다. - Race#playRound()

    - [x] 무작위 값이 4 이상이면 전진하고, 미만이면 멈춘다. - Car#move()

  - [x] 게임 차수별 실행 결과를 출력한다. - Race#printRoundResult()
    - `자동차 이름 : --` (-는 전진한 횟수만큼 출력한다.)

- [x] 최종 우승자를 출력한다. - Race#getWinners()
  - [x] 우승자가 여러 명일 경우 쉼표로 구분한다.
    - `최종 우승자: 이름1, 이름2`
