## ✅ 구현 기능 목록

#### 1. mission-utils의 Random API를 활용하여 0~9 사이 전진값 추출

#### 2. mission-utils의 Console API(Console.readLineAsync)를 활용하여 입력 기능 구현하기

- 경주 할 자동차 이름(쉼표로 구분)<br>
  `pobi,woni,jun`

- 시도 횟수<br>

#### 3. mission-utils의 Console API(Console.print)를 활용하여 출력 기능 구현하기

- 실행 결과<br>
  `pobi : --
woni : ----
jun : ---`

- 최종 우승자<br>
  i) 단독 우승자 <br>
  `최종 우승자 : pobi`<br>
  ii) 공동 우승자 <br>
  `최종 우승자 : pobi, jun`

<br>

## ✏️ 메서드 설명

### getRacingCarName()

경주할 자동차 이름을 입력받는 역할

⚠️ 예외 사항

1. 자동차 이름이 5자 초과 시<br>
   `[ERROR] 자동차 이름은 5자 이하만 가능합니다.`

2. 자동차 이름이 중복된 경우<br>
   map 자료구조 사용으로 중복값은 나중값으로 대체됨.

3. 빈 값일 경우<br>
   `[ERROR] 자동차 이름을 입력해주세요. `

### getTryCount()

시도할 횟수를 입력받는 역할

⚠️ 예외 사항

1. 숫자가 아닐 경우<br>
   `[ERROR] 숫자가 잘못된 형식입니다.`

2. 0일 경우<br>
   `[ERROR] 1이상의 숫자만 입력 가능합니다. `

3. 빈 값일 경우<br>
   `[ERROR] 시도할 횟수를 입력해주세요. `

### playRacingCarGame()

- getTryCount()의 반환 값만큼 차수를 실행하고, getRacingCarName()의 반환 값마다 전진 값을 '-'로 출력하는 역할
- 전진 값은 0~9 사이의 random 값
- 차수만큼 random값을 생성하고 각 자동차의 전진 값이 4이상인 값만 누적하여 object에 담아 반환

### chooseWinner()

- playRacingCarGame()에서 반환한 object를 돌며 max 값을 구하여 자동차 이름 출력하는 역할
- max 값이 여러 개인 경우, 쉼표로 구분하여 출력

### printForwardSign()

- 각 자동차 별로 랜덤 값을 생성해 전진 값을 출력하는 역할

### checkRacingCarNameInputError()

- racingCar 입력값 에러 판별하는 역할

### checkTryCountError()

- 시도횟수 입력값 에러 판별하는 역할

<br>

## 🎯 코드리뷰 및 공통 피드백 개선

- 고차 함수 사용 : for문보다 forEach 등을 활용하여 반복문 사용하기
- 시작 지점인 play()메서드에서의 코드 내용 줄이기
- 전역 변수 지향하기
- i보다 idx, index와 같은 의미있는 매개변수 사용하기

<br>

## 📌 추가요구사항

- ndent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현. 2까지만 허용
- Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인
