## 기능 그룹 (MVC)

* Models
    - [ ] 경주 데이터: Race
        - [ ] 참가 자동차 목록: Race#racingCars
        - [ ] 시도 횟수: Race#totalRound
    - [ ] 자동차 데이터: Car
        - [ ] 이름: Car#name  
        - [ ] 전진 횟수: Car#numberOfAdvance


* Views
    - [ ] 입력창 및 메세지 출력: InputView 
        - [ ] 경주 자동차 입력: InputView#racingCars
        - [ ] 시도 횟수 입력: InputView#totalRound
    - [ ] 출력창 및 메세지 출력: OutputView 
        - [ ] 경주 실행 결과 출력: OutputView#procedureOfRace
        - [ ] 우승자 출력: OutputView#winners


* Controllers
    - [ ] 경주 게임: raceGameController
        - [ ] 게임 시작: raceGame#run
        - [ ] 자동차 이름 유효성 검사: raceGameController#isValidCarName
        - [ ] 무작위 값 선택: raceGameController#selectRandomNumber
        - [ ] 전진 가능 여부 확인: raceGameController#canCarAdvance
        - [ ] 전진 횟수 업데이트: raceGameController#updateNumberOfAdvance
        - [ ] 라운드별 경주 결과 연산: raceGameController#calculateProcedureOfRace
        - [ ] 우승자 연산: calculateWinners


* constants
    - [ ] 입출력에 사용되는 메세지들: MESSAGES
        > 자동차 이름 & 시도 횟수 입력/Error, 실행 결과, 전진 표시(-)
    - [ ] 입출력 형식에 대한 조건들: CONDITIONS
        > 자동차 이름 & 시도 횟수 입력 형식, 단독 우승자, 공동 우승자, 무작위 최소값, 무작위 최대값, 전진 조건값, 전진 값


<br/>

## 테스트 목록
- [ ] 입력창 유효성 테스트: InputViewTest
  - [ ] 자동차 이름 입력 유효성 테스트: checkRacingCarNames
  - [ ] 시도 횟수 입력 유효성 테스트: checkTotalRound
- [ ] 연산 정확성 테스트: ControllerAccuracyTest
  - [ ] 특정 라운드의 결과 연산 테스트: checkCalculateProcedureOfRace
  - [ ] 우승자 연산 테스트: checkCalculateWinners
- [ ] 출력 정확성 테스트: OutputViewTest
  - [ ] 특정 라운드의 결과 연산 테스트: checkPrintProcedureOfRace
  - [ ] 우승자 출력 테스트: checkPrintWinners


<br/>

## 코드 스타일 및 브랜치 전략
* 코드 스타일
    - <details>
      <summary>eslint(airbnb style) 사용</summary>

      `npm init @eslint/config` 로 eslint(airbnb style)를 설치한다.

      .eslintrc.cjs 파일을 생성하여 코드 스타일을 정의한다.

      test 코드를 위해 `jest : true` 를 기입한다.
  </details>

    - <details>
      <summary>prettier 사용</summary>

      `npm i -D prettier eslint-config-prettier` 로 prettier와 eslint-config-prettier를 설치한다.

      > `eslint-config-prettier`: prettier와 겹치는 eslint 룰을 비활성화한다.

      .eslintrc.cjs의 `extends : [...]` 에 `prettier` 를 추가한다.

      .prettierrc.cjs 파일을 생성한 후 prettier 규칙을 추가한다.
  </details>

    - <details>
      <summary>JSDoc 작성</summary>

      클래스, 함수, 변수의 문서화 및 타입을 명확히 하기 위해 JSDoc을 작성한다.

      ```js
      /**
       * 두 숫자의 합을 연산하는 함수
       * @param {number} a
       * @param {number} b
       * @returns {number}
       */
      function sum(a, b) {
        return a + b;
      }
      ```
  </details>


* 브랜치 전략
    - Git Flow 전략을 기본으로 사용하되 아래의 사항을 지킨다.
    - 최종 브랜치는 'jinmidnight01' 이다.
    - 기능 그룹 단위로 'feature/{feature}' 브랜치에서 작업한다. 
        > 특정 기능 그룹에서 merge를 통해 다른 기능 그룹의 코드를 불러와 작업한다.
    - 특정 기능 그룹이 완성되면 'develop' 브랜치에 병합한다.
    - 애플리케이션이 완성되면 'develop' 브랜치를 최종 브랜치에 병합한다.
