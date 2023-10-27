# 기능 요구 사항 구현 목록

# Controller

## 🎮 `RacingCarGame` 클래스

- 게임을 수행하는 `Controller` 클래스입니다.
- `askCarName()`: 각 자동차의 이름을 쉼표로 구분하여 입력받는 함수입니다.
- `askMoveCount()`: 자동차의 이동 횟수를 입력받는 함수입니다.
- `start()`: 입력받은 이동 횟수만큼 게임을 진행합니다.
- `prize()`: 최종 우승자를 선출하여 출력합니다.

<br/>

# Model

## 🏁 `Race` 클래스

- `Car` 인스턴스 간의 경주 데이터 및 인스턴스 배열을 관리하는 클래스입니다.

### 상태

- `cars`: `Car` 인스턴스(배열)

### 행동

- [x] `addCars(names)`: 입력받은 자동차를 `cars` 배열에 저장합니다.
- [x] `lap()`: 각 `Car` 인스턴스의 1회 전진을 지시합니다.
- [x] `makeOneLapResult()`: 각 자동차의 이동 결과를 합쳐서 문자열로 반환합니다.
- [x] `calMaxMove()`: 모든 `Car` 인스턴스 중 최대 전진 거리를 계산합니다.
- [] `electWinner()`: 각 `Car` 인스턴스의 전진을 비교하여 우승자를 도출합니다.

<br/>

## 🚘 `Car` 클래스

- `Car` 인스턴스를 생성하는 클래스입니다.

### 상태

- `name`: 자동차 이름입니다.
- `position`: `Car` 인스턴스의 이동 거리를 나타내는 문자열입니다.

### 행동

- [x] `canMove()`: 전진 가능 여부를 불리언으로 반환 (`MissionUtils.Random.pickNumberInRange` 메서드 사용)
- [x] `move()`: `Car` 인스턴스를 전진하거나 제자리에서 그대로 유지합니다.
- [x] `countMove()`: 현재 회차까지의 전진 길이를 반환합니다.
- [x] `toStringPosition()` 현재까지의 이동 결과를 생성하여 반환합니다.

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

- [] `validateCarName(name)`
  1. 각 이름이 5글자 이하인지 검사합니다.
  2. 이름을 입력하지 않은 경우를 검사합니다.
- [] `validateMoveCount(count)`: 시도할 횟수가 숫자인지 확인합니다.

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

- [] 각 자동차 이름은 5글자 이내
- [] 자동차 이름 입력 간 공백이 있는 경우 공백을 모두 제거 후 진행
- [] 시도 횟수는 숫자 타입

<br/>
