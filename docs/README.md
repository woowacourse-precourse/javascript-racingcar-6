## Racing Car Game

예외 처리

- [x] 유저 입력 값 오류 - 레이싱카 이름
  - [x] 레이싱카 이름을 입력하지 않고 엔터를 입력한 경우 (입력 값 = undefined) ⇒ “[ERROR] 빈 값을 입력할 수 없습니다.”
  - [x] 레이싱카 이름이 5자를 넘어가는 경우 (반복 필요) ⇒ "[ERROR] 자동차 이름의 길이는 1에서 5까지의 자연수여야 합니다."
  - [x] 레이싱카 이름에 빈 칸이 들어가는 경우 (”,”으로 split을 진행함) ⇒ "[ERROR] 자동차 이름을 입력할 때에는 빈 칸이 들어가면 안됩니다.”
- [x] 유저 입력 값 오류 - 경기 횟수
  - [x] 경주 횟수를 입력하지 않고 엔터를 입력한 경우 (입력 값 = undefined) ⇒ “[ERROR] 빈 값을 입력할 수 없습니다.”
  - [x] 경주 횟수를 숫자가 아닌 수로 입력하는 경우 (ex. “ac34”) ⇒ "[ERROR] 경주 시도 횟수는 숫자를 입력해야 합니다.”
  - [x] 경주 횟수를 1 이상의 자연수로 입력하지 않는 경우 (ex. “1.2313”) ⇒ "[ERROR] 경주 시도 횟수는 1 이상의 자연수로 입력해주세요.”

<br />

기능 구현

- [x] App 클래스 - feat(App Class):

  - [x] 멤버 변수
    - racingCars - `Array<Car>` / default: []
    - racingRepeatNumber - `number` / default: 0
  - [x] play - feat(App Class play method): 레이싱 게임을 시작하는 메서드
  - [x] registerRacingCars - feat(App Class): 레이싱카 이름 등록 메서드
  - [x] registerRacingRepeatNumber - feat(App Class): 경기 반복 횟수 등록 메서드
  - [x] racing - feat(App Class): 레이싱 경기 반복 진행 메서드
  - [x] releaseWinner - feat(App Class): 레이싱 경기 우승자 발표 메서드

- [x] Car 클래스 - feat(Car Class):

  - [x] 멤버 변수
    - name - `string` / default: 생성자 입력값
    - moveCount - `number` / default: 0
  - [x] moveOrStop - feat(Car Class): 레이싱카의 이동 여부를 확인하는 메서드

- [x] Validation 객체 - feat(Validation Object):

  - [x] validateGoForward - feat(Validate car can go forward): 랜덤으로 생성된 수를 확인하여 앞으로 갈 수 있는지 정지해야 하는지 확인하는 메서드
  - [x] validateRacingCarName - feat(Validate racing car name inputs): 유저가 입력한 레이싱카 이름 문자열을 검증하는 메서드
  - [x] validateRacingRepeatNumber - feat(Validate racing repeat number): 유저가 입력한 레이싱 경기 반복 횟수를 검증하는 메서드

- [x] Utility 함수 - feat(Utility Function):

  - [x] printConsole - 입력받은 메시지를 Console.print api에 넘겨 반환하는 함수
  - [x] generateRandomNumber - 0 ~ 9 사이의 숫자 중에서 랜덤한 숫자 하나를 생성하는 함수
  - [x] inputConsoleAsync - Console.readLineAsync api를 실행시켜 입력받은 값을 반환하는 비동기 함수

- [x] Constant 파일
  - [x] message - 경기에 사용될 메시지가 반영된 객체
