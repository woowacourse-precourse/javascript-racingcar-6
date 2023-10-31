<details>
  <summary> 프로그래밍 요구 사항 </summary>
  <div markdown="1"> 

  - Node.js 버전 18.17.1 이상 설치
  - ESLint, Prettier 설정
    - Airbnb 자바스크립트 스타일 가이드 컨벤션 지키기
  - `package.json`을 변경 X
    - 깃허브에는 ESLint 설정 반영 X
  - `@woowacourse/mission-utils` 를 import 하여 API 사용
    - `Random.pickNumberInRange()` 를 이용하여 랜덤 숫자 생성
    - `Console.readLineAsync`, `Console.print` 를 활용하여 입/출력
  - 프로그램 종료 시 `process.exit()`를 호출 X
  - 파일, 패키지 이름을 수정하거나 이동 X
  - 요구 사항에 명시된 출력값 형식을 지키기
  - indent(인덴트, 들여쓰기) depth는 2까지만 허용
  - Jest를 이용하여 아래의 기능 목록을 테스트 코드 작성해서 정상 동작 확인 
    - `npm test` 입력하여 ApplicationTest.js 테스트
  - 기능 목록 단위로 Git 커밋

  </div>
</details>


## 구현할 기능 목록

- [x] 객체 별 파일 모듈화
- [x] 유효성 검사 모듈화
- [x] 상수 모듈화


### 프로그램(CarRacing)
- [x] 자동차 경주 하기 - `CarRacing#playGame()`
  - [x] 사용자에게 정보 입력 받기 
  - [x] 입력 받은 시도 횟수만큼 게임 반복
  - [x] 게임 결과 보여주기 - `CarRacing#showResult()`
    - [x] 시도 횟수만큼 게임 진행 이후, 자동차 별 전진 횟수로 최종 우승자 판단 - `CarRacing#decideWinners()`
    - [x] 최종 우승자 출력 - `CarRacing#printWinners()`

### 사용자(User)
- [x] 게임에 필요한 정보 입력 - `User#beReady()`
  - [x] 프로그램 시작하면, 경주할 자동차의 이름 쉼표로 구별하며 입력 - `User#enterNames()`
    - [x] `throw` 문 사용해서 이름 입력 예외 처리 - `ValidationName#isCorrectName()`
      - [x] 아무 입력을 안하고 엔터 - `ValidationName#isNull()`
      - [x] 쉼표(,)만 입력 - `ValidationName#isEmpty()`
      - [x] 글자 수가 5자 초과 - `ValidationName#isLong()`
  - [x] 이동 시도 횟수 입력 - `User#enterTryCounts()`
    - [x] `throw` 문 사용해서 횟수 입력 예외 처리 - `ValidationTry#isCorrectTryCount()`
      - [x] 아무 입력을 안하고 엔터 - `ValidationTry#isNull()`
      - [x] 숫자 입력 O, 공백 존재 - `ValidationTry#isBlank()`
      - [x] 문자(공백 포함) 입력(숫자 + 문자 포함) - `ValidationTry#isChar()`

### 자동차 리스트(CarList)
- [x] 자동차 리스트 경주 하기 - `CarList#race()`
  - [x] 전체 시도 내, 자동차 별 전진 횟수 리스트 생성 - `CarList#constructor()`
  - [x] 자동차 별, 0에서 9 사이의 이동 무작위 값 리스트 생성 - `CarList#generateRandomNumbers()`
  - [x] 각 자동차 별 전진 횟수 카운트 - `CarList#move()`
    - [x] 4 이상 값인 경우에 카운트 증가
    - [x] 0 ~ 3 값인 경우에 원래 카운트
  - [x] 자동차 리스트 위치 출력 - `CarList#printPositions()`
  

## 테스트 목록

<details>
  <summary> 프로그램 </summary>
  <div markdown="1"> 

  - [ ] 자동차 경주 하기 - `CarRacing#playGame()`
  - [ ] 사용자에게 정보 입력 받기 
  - [ ] 입력 받은 시도 횟수만큼 게임 반복
  - [ ] 게임 결과 보여주기 - `CarRacing#showResult()`
    - [ ] 시도 횟수만큼 게임 진행 이후, 자동차 별 전진 횟수로 최종 우승자 판단 - `CarRacing#decideWinners()`
    - [ ] 최종 우승자 출력 - `CarRacing#printWinners()`

  </div>
</details>

<details>
  <summary> 사용자 </summary>
  <div markdown="1">

  - [ ] 게임에 필요한 정보 입력 - `User#beReady()`
  - [ ] 프로그램 시작하면, 경주할 자동차의 이름 쉼표로 구별하며 입력 - `User#enterNames()`
    - [ ] `throw` 문 사용해서 이름 입력 예외 처리 - `ValidationName#isCorrectName()`
      - [ ] 아무 입력을 안하고 엔터 - `ValidationName#isNull()`
      - [ ] 쉼표(,)만 입력 - `ValidationName#isEmpty()`
      - [ ] 글자 수가 5자 초과 - `ValidationName#isLong()`
  - [ ] 이동 시도 횟수 입력 - `User#enterTryCounts()`
    - [ ] `throw` 문 사용해서 횟수 입력 예외 처리 - `ValidationTry#isCorrectTryCount()`
      - [ ] 아무 입력을 안하고 엔터 - `ValidationTry#isNull()`
      - [ ] 숫자 입력 O, 공백 존재 - `ValidationTry#isBlank()`
      - [ ] 문자(공백 포함) 입력(숫자 + 문자 포함) - `ValidationTry#isChar()`

  </div>
</details>

<details>
  <summary> 자동차 리스트 </summary>
  <div markdown="1"> 

  - [ ] 자동차 리스트 경주 하기 - `CarList#race()`
  - [ ] 전체 시도 내, 자동차 별 전진 횟수 리스트 생성 - `CarList#constructor()`
  - [ ] 자동차 별, 0에서 9 사이의 이동 무작위 값 리스트 생성 - `CarList#generateRandomNumbers()`
  - [ ] 각 자동차 별 전진 횟수 카운트 - `CarList#move()`
    - [ ] 4 이상 값인 경우에 카운트 증가
    - [ ] 0 ~ 3 값인 경우에 원래 카운트
  - [ ] 자동차 리스트 위치 출력 - `CarList#printPositions()`

  </div>
</details>






