# 기능 요구 사항 구현 목록

# Controller

## 🎮 `RacingCarGame` 클래스

- 게임을 수행하는 `Controller` 클래스입니다.
- [x] `start()`: 게임의 엔트리 포인트 함수입니다.
- [x] `askCarName()`: 각 자동차의 이름을 쉼표로 구분하여 입력받는 함수입니다.
- [x] `askLapCount()`: 자동차의 총 시도 횟수를 입력받는 함수입니다.
- [x] `compete()`: 자동차끼리 경쟁하도록 지시하는 함수입니다.
- [x] `prize()`: 최종 우승자를 선출합니다.

<br/>

# Model

## 🏁 `Race` 클래스

- `Car` 인스턴스 간의 경주 데이터 및 인스턴스 배열을 관리하는 클래스입니다.

### 상태

- `cars`: `Car` 인스턴스(배열)
- `lapCount`: 시도 횟수 (숫자)

### 행동

- [x] `setLapCount(lapCount)`: 시도 횟수를 저장합니다.
- [x] `addCars(names)`: 입력받은 자동차를 `cars` 배열에 저장합니다.
- [x] `lap()`: 각 `Car` 인스턴스의 1회 전진을 지시합니다.
- [x] `logLap()`: 해당 시도에 시행된 모든 `Car` 인스턴스의 전진 결과를 반환합니다.
- [x] `formatResult()`: 모든 자동차의 이동 결과를 합쳐서 문자열로 반환합니다.
- [x] `calMaxMove()`: 모든 `Car` 인스턴스 중 최대 전진 거리를 계산합니다.
- [x] `electWinner()`: 각 `Car` 인스턴스의 전진을 비교하여 우승자를 도출합니다.

<br/>

## 🚘 `Car` 클래스

- `Car` 인스턴스를 생성하는 클래스입니다.

### 상태

- `name`: 자동차 이름입니다.
- `position`: `Car` 인스턴스의 이동 거리를 나타내는 문자열입니다.

### 행동

- [x] `getName()`: 현재 자동차의 이름을 반환합니다.
- [x] `canMove()`: 전진 가능 여부를 불리언으로 반환합니다. (`MissionUtils.Random.pickNumberInRange` 메서드 사용)
- [x] `move()`: `Car` 인스턴스를 전진하거나 제자리에서 그대로 유지합니다.
- [x] `countMove()`: 현재 회차까지의 전진 길이를 반환합니다.
- [x] `formatPosition()` 현재까지의 이동 결과를 생성하여 반환합니다.

<br/>

# View

### `Input` 클래스

- [x] 유저의 입력을 비동기로 받아 반환합니다. (`Console.readLineAsync` 라이브러리 사용)

### `Output` 클래스

- [x] 유저에게 보여줄 문자열을 출력합니다. (`Console.print` 라이브러리 사용)

<br/>

## `Validator` 클래스

- 유효성 검사를 수행하여 에러를 반환합니다.

<br>

- [x] `validateCarNames(names)`
  - [x] `validateNameLength(carNames)` 메서드를 사용하여 각 이름의 길이를 검사합니다.
  - [x] `validateCarNameDuplication(carNames)` 메서드를 사용하여 중복된 이름을 검사합니다.
- [x] `validateLapCount(number)`
  - [x] `validateSafeInteger(number)` 메서드를 사용하여 시도 횟수가 `2^53` 이하의 안전한 자연수인지 확인합니다.

<br/>

## ValiationError 클래스

- 반복되어 사용되는 `'[ERROR]'` 문자열에 유지보수성을 높이기 위한 에러 클래스입니다.

<br/>

## `constants` 디렉토리

- [x] `message.js`: 유저에게 보여질 문자열에 관한 상수입니다.
- [x] `number.js`: 전역에 사용되는 숫자에 관한 상수입니다.
- `index.js`를 통해 `import`합니다.

<br/>

# 예외 처리

- [x] 각 자동차 이름은 5글자 이내
- [x] 자동차 이름 입력 간 공백이 있는 경우 공백을 모두 제거 후 진행
- [x] 시도 횟수는 `2^53` 이하의 자연수인지
- [x] `'[ERROR]'`로 시작하는 에러 메시지
- [x] 중복된 자동차 이름이 있는 경우

<br/>

# 단위 테스트

- 아래 클래스에 단위 테스트를 적용하였습니다.

<br/>

- [x] `Car` 클래스의 메서드
- [x] `Race` 클래스의 메서드
- [x] `Validator` 클래스의 메서드

<br/>

# 커밋 컨벤션

- [AngularJs 커밋 컨벤션](https://gist.github.com/stephenparish/9941e89d80e2bc58a153#commit-message-conventions)을 사용합니다.
