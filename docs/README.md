# ⚒️구현할 기능 목록 정리(ver2)
ver1 : 2023-10-29 23:01 작성   
ver2 : 2023-10-30 22:30 작성
### 1. Car 클래스
- 각 자동차의 상태를 관리하는 클래스
- Properties
  - `name`: 자동차의 이름 (String)
  - `position`: 자동차의 현재 위치 (Number)
- Methods
  - `constructor(name)`: 자동차의 이름을 받아 객체를 생성
  - `advance()`: 0에서 9사이의 랜덤한 숫자를 생성하여, 그 숫자가 4 이상일 경우 자동차의 position을 1 증가
  - `printPosition()`: 자동차의 현재 위치를 콘솔에 출력 (`name : -----` 형태)

### 2. Race 클래스
- 자동차 경주 게임을 진행하는 클래스
- Properties
  - `cars`: 참가하는 자동차 객체들의 배열
  - `tries`: 전체 시도 횟수 (Number)
- Methods
  - `constructor(cars, tries)`: 참가하는 자동차 객체들과 전체 시도 횟수를 받아 객체를 생성
  - `run()`: 경주를 진행, 각 시도마다 모든 자동차의 `advance()` 메서드 호출 후 `printRaceResult()` 호출
  - `printRaceResult()`: 모든 자동차의 현재 위치를 출력
  - `findWinners()`: 경주가 끝난 후 우승자를 찾아 반환

### 3. App 클래스
- 애플리케이션의 메인 로직을 담당하는 클래스
- Methods
  - `start()`: 사용자로부터 입력을 받아 경주를 시작, 결과 출력
  - `getCars()`: 사용자로부터 자동차 이름을 입력 받아 Car 객체들을 생성
  - `getTries()`: 사용자로부터 시도 횟수를 입력 받아 반환
  - 입력 값 예외 처리 포함

### 4. main 함수
- 애플리케이션의 시작점
- App 인스턴스를 생성하고 `start()` 메서드 호출

### 5. 사용자 입력 및 출력
- `MissionUtils.Console.readLineAsync()`: 사용자로부터 입력 받기
- `MissionUtils.Console.print()`: 콘솔에 출력하기
- 예외 메시지 출력 포함

### 예외 처리
- 사용자가 잘못된 형식의 자동차 이름을 입력한 경우 에러를 던진다.
- 사용자가 잘못된 형식의 시도 횟수를 입력한 경우 에러를 던진다.
