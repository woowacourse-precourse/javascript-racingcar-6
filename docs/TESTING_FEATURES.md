## 테스트 도구 기능 설명

### 목차

1. [Model](#모델)
   - [Car 클래스](#car-클래스)
   - [Race 클래스](#race-클래스)
2. [View](#뷰)
   - [InputView 클래스](#inputview-클래스)
   - [OutputView 클래스](#outputview-클래스)
3. [Utils](#유틸)
   - [InputValidator 클래스](#inputvalidator-클래스)
   - [CarNameProcessor 유틸리티](#carnameprocessor-유틸리티)

### 모델

#### Car 클래스

- **목적**: `Car` 클래스는 자동차의 상태와 로직을 관리합니다.
- **테스트 설명**:
- `constructor` 메서드: `Car` 객체가 올바르게 초기화되는지 검증합니다.
- `getCarInformation` 메서드: 현재 자동차의 이름과 위치 정보를 올바르게 반환하는지 검증합니다.
- `move` 메서드: `shouldMove` 전략에 따라 자동차의 위치가 올바르게 변경되는지 검증합니다.

#### Race 클래스

- **목적**: `Race` 클래스는 레이스의 상태와 로직을 관리합니다.
- **테스트 설명**:
  - `playRound` 메서드: 모든 자동차 객체의 `move` 메서드가 호출되는지 검증합니다.
  - `getRoundResults` 메서드: 메서드가 각 자동차의 현재 상태를 정확히 반환하는지 확인합니다.
  - `getWinners` 메서드: 메서드가 가장 멀리 이동한 자동차의 이름을 반환하는지 검증합니다.

### 뷰

#### InputView 클래스

- **목적**: `InputView` 클래스는 사용자로부터 입력을 받는 역할을 합니다.
- **테스트 설명**:
  - `printCarNames` 메서드: 올바르게 자동차 이름을 입력받아 반환하는지 검증합니다.
  - `printNumberOfRounds` 메서드: 올바르게 라운드 수를 입력받아 반환하는지 검증합니다.

#### OutputView 클래스

- **목적**: `OutputView` 클래스는 프로그램의 출력을 담당합니다.
- **테스트 설명**:
  - `printRaceHeader` 메서드: 레이스의 헤더가 올바르게 출력되는지 검증합니다.
  - `printRoundResult` 메서드: 각 라운드의 결과가 올바르게 출력되는지 검증합니다.

### 유틸

#### InputValidator 클래스

- **목적**: 입력값의 유효성을 검사합니다.
- **테스트 설명**:
  - `validateCarName` 메서드: 이름이 5자 이상, 빈 문자열, 또는 `null`인 경우 에러를 던지고, 그렇지 않으면 에러를 던지지 않습니다.
  - `validateNumberOfRounds` 메서드: 라운드 수가 0 이하일 경우 에러를 던지고, 1 이상일 경우 에러를 던지지 않습니다.
  - `validateNumberOfCars` 메서드: 자동차 수가 1대 또는 2대 미만일 경우 에러를 던지고, 2대 이상일 경우 에러를 던지지 않습니다.

#### CarNameProcessor 유틸리티

- **목적**: 자동차 이름을 처리합니다.
- **테스트 설명**:
  - `processCarNames` 함수: 쉼표로 구분된 여러 이름을 배열로 반환합니다. 이름에 공백이 있을 경우 공백을 제거하며, 입력 문자열이 빈 문자열인 경우 빈 배열을 반환합니다.
