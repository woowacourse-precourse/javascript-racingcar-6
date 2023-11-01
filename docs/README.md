## 🎯 프로그래밍 요구사항

- Node.js 18.17.1 버전에서 실행 가능
- 프로그램 실행의 시작점은 `App.js`의 `play` 메서드
- `package.json`을 변경할 수 없고, 외부 라이브러리를 사용하지 않으며, 순수 Vanilla JS로만 구현
- Javascript 코드 컨벤션을 지키며 프로그래밍
- 프로그램 종료 시 `process.exit()` 호출 금지
- 프로그램 구현 완료 시, ApplicationTest의 모든 테스트가 성공
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동 금지
- indent depth를 3이 넘지 않도록 구현, 2까지 허용
- Jest를 이용하여 본인이 정리한 기능 목록이 정상 독작함을 테스트코드로 확인
- `@woowacourse/mission-utils`에서 제공하는 `Random` 및 `Console` API를 사용하여 구현

## 🚀 구현할 기능 목록

### 🛠 사용자가 게임 진행에 필요한 요소를 입력하는 기능(InputManager, Validation)

- [x] `enterCarNameList()`: 경주할 자동차 이름을 입력한다.
- [x] `isValidCarNames(carNames)`: 잘못된 자동차 이름 입력값인 경우 throw문을 통해 예외처리한다.
  - [x] `isValidCarNameLength(carName)`: 자동차 이름의 길이가 5보다 길거나 0인 경우
  - [x] `isEmptyCarNames(carNames)`: 아무 입력이 없는 경우
- [x] `enterTryNum()`: 시도할 횟수를 입력한다.
- [x] `isValidTryNum(input)`: 잘못된 시도할 횟수 입력값인 경우 throw문을 통해 예외처리한다.
  - [x] `isEmptyTryNum(input)`: 아무 입력이 없는 경우
  - [x] `isIncludeBlank(input)`: 입력에 공백이 포함된 경우
  - [x] `isNumber(input)`: 숫자가 아닌 경우
  - [x] `isSmallerTahnOne(input)`: 1보다 작은 값이 입력되는 경우

**📝 ValidationTest.js에 테스트 코드 작성**

### 🛠 사용자에게 받은 입력값을 기반으로 게임을 진행하는 기능(RacingGame)

- [x] `playRacing()`: 자동차 경주게임을 진행한다.
- [x] `getCarNameList(inputManager)`: InputManager로부터 자동차 이름 리스트를 받는다.
- [x] `generateCarObjects(carNameList)`: 자동차 이름 리스트를 이용하여, 이름 하나 당 각각의 자동차 인스턴스를 생성한다.
  - 자동차 인스턴트 생성 시, 자동차의 이름과 전진 횟수를 초기화한다.
- [x] `getTryNum(inputManager)`: InputManager로부터 시도할 횟수를 받는다.
- [x] `executeCycle()`: 시도할 횟수 만큼 사이클(전진 또는 정지)을 실행한다.
- [x] `printResult()`: 각 사이클별 실행 결과를 출력한다.

  - 각 자동차의 이름과 전진횟수만큼의 `-`를 출력한다.
  - `pobi`라는 자동차가 4회 전진했을 때의 출력 예시
    ```
    pobi : ----
    ```

- [x] `getWinners()`: 경주게임을 완료한 후 최종 우승자를 결정한다.
- [x] `printWinner()`: 최종 우승자의 이름을 출력한다.

**📝 RacingGameClassTest.js에 테스트 코드 작성**

### 🛠 각 자동차별 상태 정보를 저장하는 기능(Car)

- [x] `generateRandomNumber()`: 0에서 9 사이의 무작위값을 생성한다.
- [x] `getIsCanMove(randomNumber)`: 생성된 무작위 값을 통해 전진여부를 결정한다.
- [x] `updateMoveCount()`: 차수(사이클)별로 각 자동차의 전진 횟수를 갱신한다.
- [x] `move()`: 자동차를 전진 또는 정지한다.

**📝 CarClassTest.js에 테스트 코드 작성**
