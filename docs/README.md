### 기능 목록

##### 게임 시작

- [x] 경주할 자동차 입력 받기 : getCarRacePlayer()
  - [x] 참가자 문자열 입력 받기
  - [x] validate 이름 : validatePlayerName()
  - [x] 플레이어 객체 생성 : class Player
  - [x] 생성된 객체 플레이어 그룹에 추가 : registerPlayer()
- [x] 시도할 횟수 입력 받기 : getAttemptCount()
  - [x] validate 시도 횟수 : validateAttemptCount()

##### Play Racing

- [x] 시도 횟수만큼 루프 실행 : playRacing()
- [x] 각 시행마다 모든 플레이어가 전진 시도 : performAttempt()
  - [x] 0과 9 사이의 무작위 값이 4 이상인지 판별 : shouldGoForward()
- [x] 각 시행 결과 출력 : printCurrentProgress()

##### The Winner is...

- [x] 우승자 찾기 : findWinner()
- [] 우승자 발표

---

### 클래스 연관 관계

App : 프로젝트 시작 지점

RacingGame : 게임 인스턴스 생성

- 메서드

  - startGame() : 게임 시작 진입점
  - getCarRacePlayer() : 경주할 자동차 입력 받기
  - getAttemptCount() : 시도 횟수 입력 받기
  - playRacing() : 시도 횟수만큼 race 시행

GameManager : 자동차 경주 게임을 관리하고 진행하는 기능 제공

- 프로퍼티

  - this.playerGroup : 전체 참가자 배열
  - this.attemptCount : 게임의 시도 횟수

- 메서드

  - registerPlayer() : 참가자를 플레이어 그룹에 추가
  - playRacing() : 시도 횟수만큼 루프 실행
  - perforAttempt() : 각 시행마다 참가자 전진 시도
  - shouldGoForward() : 전진 여부 판별
  - printCurrentProgress() : 각 시행별 경주 상황 출력
  - findWinner() : 가장 멀리 간 참가자 찾기

Player : 참가자 인스턴스 생성

- 프로퍼티

  - this.name : 참가자 이름
  - this.moveDistance : 이동한 총 거리

---

### 예외 처리

- 사용자 입력
  - [x] 이름
    - [x] 5자 이하
    - [x] 입력하지 않는 경우
  - [x] 시도 횟수
    - [x] 숫자 x
    - [x] 입력하지 않는 경우
    - [x] 0 입력한 경우 : 모두 우승자 (의도한 작동)

---

### 리팩토링 및 추가 요구 사항

- [] 하드코딩 제거
- [] 의존성 주입
- [] JS 컨벤션

- [] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
- [] Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.

---

### 미션 수행 기록

- 2023.10.26 : 기능 목록 작성 및 기능 구현
- 2023.10.27 : 예외 처리
