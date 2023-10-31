# [자동차 경주] 기능 목록

## 🔵 Model

---

### 1. 사용자 입력 기능 -> (`User`)

- [x] 자동차 이름 입력 : 자동차 이름(들)을 입력한 후 저장 `getCarNames`

- [x] 경주를 시도할 횟수 입력 : 경주를 시도할 횟수를 입력한 후 저장 `getNumberOfAttempts`<br /><br />

### 2. 입력값에 대한 유효성 검사 기능 -> (`Validator`)

- [x] 자동차 이름 검사 : 입력한 이름(들)이 조건에 맞는지 검사 `checkCarNamesValid`

  - [x] 빈 문자열일 경우
  - [x] 특수문자나 공백이 포함되어있을 경우
  - [x] 중복된 이름이 있을 경우
  - [x] 잘못된 길이일 경우<br /><br />

- [x] 횟수 검사 : 입력한 횟수가 조건에 맞는지 검사 `checkAttemptsValid`
  - [x] 빈 문자열일 경우
  - [x] 공백이 존재할 경우
  - [x] 0일 경우
  - [x] 숫자 외의 문자가 포함되어있을 경우<br /><br />

### 3. 스코어보드 기능 -> (`ScoreBoard`)

- [x] 자동차 이름을 스코어보드에 추가 `getScoreBoard`
- [x] 현재 경주 상태를 출력 `showCurrentRace`<br /><br />

### 4. 게임 관련 기능 -> `(Race`)

- [x] 0~9 사이의 무작위 값 도출 `getRandomNumber`
- [x] 랜덤 값이 4 이상일 시 한칸 전진 `rollDiceAndGoForward`<br /><br /><br />

## 🔵 View

---

### 1. 게임 안내 메세지 (`GUIDE_MESSAGE`)

1. [ ] 자동차 이름 입력 안내
2. [ ] 시도 횟수 입력 안내
3. [ ] 실행 결과 안내
4. [ ] 최종 우승자 안내<br /><br /><br />

## 🔵 Control

---

### 1. 게임 준비 (`readyGame`)

- [x] 입력값을 가져오고 저장<br />

### 2. 게임 진행 (`startGame`)

- [x] 횟수만큼 게임 반복
- [x] 무작위 값 생성
- [x] 무작위 값에 대한 검사 후 전진<br />

### 3. 게임 종료 (`endGame`)

- [x] 게임 종료 후 결과 발표<br /><br /><br />
