# 프리코스 2주차 구현 사항

---

## 프로젝트 구조

```shell
__tests__
├── ApplicationTest.js
├── StringTest.js
├── unit.ErrorTest.js
├── unit.createExecutionLogTest.js
├── unit.getGoAndStop.js
├── unit.receiveCarNameTest.js
└── unit.receiveGameCountTest.js
docs
└── README.md
src
├── App.js
├── index.js
├── service
│   ├── gameInProgress.js
│   ├── gameStart.js
│   └── rootService.js
└── util
    ├── error
    │   ├── errorCode.js
    │   └── errorhandler.js
    ├── libraryFeatures
    │   └── MissionUtilsHandler.js
    ├── progress
    │   ├── createExecutionLog.js
    │   ├── getGoAndStop.js
    │   └── identifyWinner.js
    └── ready
        ├── checkInputValid.js
        ├── parseArrayToMap.js
        ├── receiveCarName.js
        └── receiveGameCount.js
```

---

## 기능

---

- ## Util

### MissionUtilsHandler.js

목적: 반복되는 라이브러리의 import 최소화
기능: 'MissionUtils' 라이브러리의 기능을 반환

- consoleInput()

> MissionUtils.Console.readLineAsync()를 반환

- consolePrint()

> MissionUtils.Console.pring()를 반환

- getRandomNumberInRange()

> MissionUtils.Random.PickNumberInRange()를 반환

### errorHandler.js / errorCode.js

목적: 반복되는 코드의 최소화, 담당 기능의 구체화  
기능: 예외처리된 error 혹은 예상치 못한 error를 Promise.reject()로 반환

> 1.  예외 처리 지점에서 오류 코드를 받는다
> 2.  오류 코드가 정의되어 있을 경우 해당 메시지를 반환한다
> 3.  오류 코드가 정의되어 있지 않을 경우 '예상치 못한 에러 발생' 메시지를 반환한다
> 4.  커스텀 Error를 발생 시켜 애플리케이션을 종료한다

### checkInputValid.js

목적: 담당 기능의 관심사 분리로 함수를 모듈화  
기능: Console로 입력된 값의 유효성을 검사

- checkCarNameValid()

> 입력값을 배열로 파싱
> 파싱된 배열의 값의 length <= 5 인 값, 빈값, 중복 값을 판별  
> 배열 내에 false가 존재할 경우 error code를 throw  
> 유효할 경우 파싱된 배열을 반환

- checkRaceCountValid()

> 입력값을 숫자로 변환
> 입력값이 0, NaN, 빈값일 경우 해당하는 error code를 throw  
> 유효할 경우 변환된 입력값을 반환

### parseArrayToMap.js

목적: 유효한 자동차의 데이터를 파싱  
기능: 자동차의 입력값의 배열을 Map 자료구조로 파싱해서 반환

### receiveCarName / receiveGameCount

목적: 모듈화된 함수들을 호출  
기능: 안내 문구를 출력 후 입력값의 유효성을 검사

### getGoAndStop.js

목적: 입력된 race 시행횟수 만큼 게임을 진행하기 위해 전진 여부를 결정하는 데이터 생성  
기능: 입력된 자동차의 갯수만큼의 길이를 가진 배열을 입력된 race의 시행 횟수 만큼의 길이를 가지는 2차원 배열을 반환

### createExecutionLog.js

목적: 한번의 실행에 대한 결과 값을 시행 횟수만큼 출력  
기능: 자동차 map을 입력 받아서 시행 횟수 만큼 진행 결과를 Console로 출력, 자동차 map의 데이터를 최신화 해서 시행 횟수만큼 출력을 한 후 최종 데이터를 반환

### identifyWinner.js

목적: 시행 횟수의 결과인 최신화된 자동차 데이터에서 우승자를 판단하기 위한 기능  
기능: 최신화된 자동차 map의 value 값이 가장 큰 값을 판단, 해당 값과 동일한 value를 가진 데이터가 존재하는지 판단 후 우승자들을 문자열에 포함하여 반환

---

- ## Service

### gameStart.js

호출 함수:  
receiveCarName(), receiveGameCount(), parseArrayToMap()

기능:
모듈화된 게임 시작에 해당하는 input의 기능을 담당하는 함수를 호출,
생성된 데이터를 Object 형태로 반환

### gameInProgress.js

호출 함수:  
getGoAndStop(), createExecutionLog(), identifyWinner();

기능:  
모듈화된 게임 진행에 해당하는 함수를 호출, 최종 우승자를 출력

### rootService.js

호출 함수:
gameStart(), gameInProgress()

기능:
자동차 게임의 Service 담당 함수를 관리, 호출

---

- ### Test

unit.ErrorTest.js
unit.receiveCarNameTest.js
unit.receiveGameCOuntTest.js
unit.createExecutionLog.js
unit.getGoAndStop.js

---

## Commit Convertion

| Type 키워드 | 사용 시점                                                             |
| ----------- | --------------------------------------------------------------------- |
| feat        | 새로운 기능 추가                                                      |
| fix         | 버그 수정                                                             |
| docs        | 문서 수정                                                             |
| style       | 코드 스타일 변경 (코드 포매팅, 세미콜론 누락 등)기능 수정이 없는 경우 |
| design      | 사용자 UI 디자인 변경 (CSS 등)                                        |
| test        | 테스트 코드, 리팩토링 테스트 코드 추가                                |
| refactor    | 코드 리팩토링                                                         |
| build       | 빌드 파일 수정                                                        |
| ci          | CI 설정 파일 수정                                                     |
| chore       | 빌드 업무 수정, 패키지 매니저 수정 (gitignore 수정 등)                |
| rename      | 파일 혹은 폴더명을 수정만 한 경우                                     |
| remove      | 파일을 삭제만 한 경우                                                 |
