# 🚀 기능 구현 목록

### 초기 설정

- [x] `index.js`: 애플리케이션의 진입점, `App` 클래스를 초기화하고 게임을 시작한다.
- [x] `App.js`: `RacingGameController()`를 초기화하고 게임을 시작한다.

### 컨트롤러

#### RacingGameController 클래스

- [x] `start()`: 게임을 시작합니다. `#initializeRaceGame`, `#runRace`, `#displayWinners` 메서드를 순차적으로 호출합니다.
- [x] `#initializeRaceGame()`: 게임을 초기화합니다. `#createCarNames`와 `#createRounds` 메서드를 호출하여 설정합니다.
- [x] `#createCarNames()`: 사용자로부터 자동차 이름을 입력받아 처리하고 유효성을 검사합니다.
- [x] `#createRounds()`: 사용자로부터 라운드 수를 입력받아 유효성을 검사합니다.
- [x] `#runRace()`: 경주를 실행합니다. `#executeRounds` 메서드를 호출하여 각 라운드의 결과를 출력합니다.
- [x] `#executeRounds()`: 설정된 라운드 수에 따라 경주를 실행하고 각 라운드의 결과를 출력합니다.
- [x] `#displayWinners()`: 경주가 끝난 후 우승자를 출력합니다.

### 모델

#### Car 클래스

`Car` 객체는 초기화될 때 이름과 움직임 전략을 인자로 받습니다.

- [x] `getCarInformation()`: 현재 자동차의 이름과 위치 정보를 객체로 반환합니다.
- [x] `move()`: 자동차를 움직이는 메서드입니다. 내부적으로 `#shouldMoveBasedOnStrategy()` 메서드를 사용하여 실제로 움직일지 여부를 결정합니다.
- [x] `#shouldMoveBasedOnStrategy()`: 주입된 전략(`carMovementStrategy`)에 따라 자동차가 움직일지 말지를 결정합니다.

#### movementStrategies (전략 객체)

- [x] `randomMovementStrategy`: 자동차의 움직임을 랜덤으로 결정하는 전략 객체.
- [x] `shouldMove()`: 랜덤한 숫자를 생성하여 움직임 여부를 결정. 숫자가 설정된 임계값 이상이면 움직인다.

#### Race 클래스

`Race` 객체는 초기화될 때 참여하는 자동차들을 인자로 받습니다.

- [x] `playRound()`: 모든 자동차의 `move()` 메서드를 호출하여 움직임을 시도합니다.
- [x] `getRoundResults()`: 현재까지의 라운드에서 모든 자동차의 이름과 위치 정보를 배열로 반환합니다.
- [x] `getWinners()`: 현재까지의 경주에서 가장 멀리 이동한 자동차들의 이름을 배열로 반환합니다.
- [x] `getWinnersString()`: 가장 멀리 이동한 자동차들의 이름을 쉼표로 구분한 문자열로 반환합니다.

### 뷰

#### InputView 클래스

- [x] `printCarNames()`: 사용자로부터 자동차 이름을 입력받는다.
- [x] `printNumberOfRounds()`: 사용자로부터 경주할 라운드 수를 입력받는다.

#### OutputView 클래스

- [x] `printRaceHeader()`: 경주 시작을 알리는 헤더를 출력한다.
- [x] `printRoundResult()`: 각 라운드의 결과를 출력한다. 자동차의 이름과 현재 위치를 출력한다.
- [x] `printWinners()`: 경주의 최종 우승자를 출력한다.

### 유틸리티

#### CarNameProcessor 함수

- [x] `processCarNames()`: 사용자로부터 입력받은 자동차 이름 문자열을 배열로 변환하고 공백을 제거한다.

#### InputValidator 클래스

- [x] `validateCarName()`: 자동차 이름의 유효성을 검사한다. 이름의 길이가 초과하거나 비어있는 경우 에러를 발생시킨다.
- [x] `validateNumberOfRounds()`: 라운드 수의 유효성을 검사한다. 라운드 수가 0 이하인 경우 에러를 발생시킨다.
- [x] `validateNumberOfCars()` : 자동차 경주를 위해 2대 미만의 자동차만 있으면 에러를 발생시킨다.

### 상수

- [x] `ErrorMessages`: 에러 메시지를 저장한 객체. 유효성 검사 실패 시 사용되는 메시지들을 저장한다.

- [x] `GameSettings`: 게임 설정을 저장한 객체. 랜덤 숫자 범위, 움직임 임계값, 자동차 표현 등 게임 로직에 사용되는 설정값을 저장한다.

- [x] `MESSAGES`: 사용자 인터페이스에서 사용되는 메시지를 저장한 객체. 프롬프트 메시지, 경주 헤더, 최종 우승자 메시지 등을 저장한다.

- [x] `VALIDATION_RULES`: 유효성 검사 규칙을 저장한 객체. 이름의 최소/최대 길이, 라운드의 최소 숫자 등을 저장한다.
