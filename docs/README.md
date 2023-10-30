# 자동차 경주 기능 목록

### 클래스

- `App()`

  - 입력을 받는다.(자동차이름, 실행횟수) [v]

  - 자동차이름은 쉼표(,)를 기준으로 구분하며, 이름은 5자 이하만 가능하다. [v]

  - 사용자가 잘못된 값을 입력한 경우 throw문을 통해 [ERROR]로 시작하는 메세지 발생 후 앱을 종료한다. [v]

  - `lap`인스턴스를 생성한다. [v]

  - `lap`인스턴스에 자동차 이름 배열과, 실행횟수를 전달한다. [v]

  - `lap`의 `printStage()`메서드를 실행횟수 만큼 실행한다. [v]

  - `lap`의 `record`를 통해 우승자를 확인하고, 출력한다. [v]

- `Lap(entry, labLength)`

  - 차수별 실행 결과를 출력한다. `printStage()`[v]

  - 각 차수별 실행 결과를 기록한다. `record`배열 [v]

### 게임 로직 함수

- `Lap.js`

  - `makeRecord` 

    - 자동차 이름을 넣은 출력 용 배열 생성 

  - `recordCheck`[+]

    - `goFoward` 메서드와 `printStage` 메서드를 외부에서 호출할 때 사용 

  - `goFoward`[+]

    - 참가한 자동차들의 전진 가능 여부 판단 로직

  - `printStage`

    - 위에서 생성된 배열을 요구사항에 맞게 출력

- `printResult.js`

  - 최종 결과 배열에서 우승자 판단 후 출력 [v]

- `validatate.js`

  - 자동차 이름 입력 시 검증 항목 `carName`

    - 입력이 최소 1개에서 최대 5자 사이로 들어오게 [v]

    - 최대 9대까지만 등록이 가능하도록 [v]

    - undefined와 null 입력으로 받지 않도록 [v]

  - 실행횟수 입력 시 검증 항목 `lapLength`

    - 숫자만 입력받도록(문자 제외) [v]

    - 0은 받지 않도록 [v]

    - udefined와 null은 받지 않도록 [v]

    - 최대 99까지 입력이 가능하도록 [v]

  ### 유틸리티 함수

- `console.js`

    - `Console` 유틸리티 추상화, 네이밍 고민 [v]

- `constanst.js`

    - 상수 메세지 객체 [v]

 ### 디렉토리 구조

   - scr
    - game
      - Lap.js
      - printResult.js
      - validation.js
    - utils
      - console.js
      - constants.js
    - App.js
    - index.js

 ### 테스트 시나리오

  - story1. 자동차 이름 입력
  - story2. 실행횟수 입력
  - story3. 입력이 잘못들어온 경우 예외처리
  - story4. 차수별 진행상황 출력
  - story5. 최종 우승자 출력

 ### 테스트 스펙 정리

  - story1. 자동차 이름 입력 [v]
    - 입력 받기 [v]
    - 입력 배열로 변환 [v]

  - story2. 실행횟수 입력 [v]
    - 입력 받기 [v]
    - 입력 숫자로 변환 [v]

  - story3. 입력이 잘못들어온 경우 예외처리 [v]
    - 유효성 검증 로직 [v]

  - story4. 차수별 진행상황 출력 [v]
    - 자동차 이름으로 출력용 배열 만들기 [v]
    - 숫자가 4이상일 경우 레코드 배열에 '-' 추가 [v]

  - story5. 최종 우승자 출력
    - '-'의 인덱스 위치값 확인
    - 기록 (' ') 나눠서 배열로 변환
    - 우승자에 경우 첫번째 원소 출력 
