# 우아한 테크 코스 프리코스 2주차 미션 - 자동차 경주
## 구현 기능 목록
### 클래스 - APP
- Constructor
  - cars : 자동차 객체들을 담을 배열
  - carNames : 자동차 이름 중복 확인을 위해 이름만을 담을 배열
  - loopNumber : 반복 횟수를 담을 변수
- getCar메서드
  - `@woowacourse/mission-utils`에서 제공하는 `Console.readLineAsync` 사용
  - 이름 길이, 중복에 대한 예외처리
  - split으로 구분하여 각각의 자동차 객체 생성 후 배열에 담기
- getLoopNumber메서드
  - `@woowacourse/mission-utils`에서 제공하는 `Console.readLineAsync` 사용
  - 입력 형식이 숫자가 아닐 경우에 대한 예외처리
- processRound메서드
  - 자동차 객체 배열을 돌며 라운드당 각 자동차별로 이동 수행
- printWinner메서드
  - 반복문 & 조건문을 이용하여 우승자를 구한 후 출력
- play메서드
  - 클래스 내부 함수들을 이용하여 게임 진행
  - GetCar → GetLoopNumber → ProcessRound → PrintWinner

### 클래스 - Car
- Constructor
  - name : 자동차 이름을 담을 변수
  - countMove : 현재 전진 횟수를 담을 변수
  - showMove : 현재 전진 상태를 출력할때 쓰일 변수
- move메서드
  - getRandomNumber함수를 호출하여 4 이상일 경우 countMove에 1을 더하고 showMove에 `-`추가

### 메세지
- 기타 출력 문구
  - GetCarNameMessage : 게임 시작 후 자동차 이름을 입력받을 때 출력되는 문구
  - GetLoopNumberMessage : 라운드 반복 횟수를 입력받을 때 출력되는 문구
  - AfterMoveMessage : 한 라운드에 자동차 각각의 이동 결과를 출력하는 문구
  - WinnerMessage : 최종 우승자를 출력하는 문구
  - LineBreakMessage : 중간 개행을 넣을 때 출력하는 문구
- Error
  - CAR_NAME_LENGTH_ERROR : 자동차 이름 길이 오류
  - CAR_NAME_DUPLICATE_ERROR : 자동차 이름 중복 오류
  - LOOP_NUMBER_TYPE_ERROR : 반복 횟수 입력 시 형식 오류