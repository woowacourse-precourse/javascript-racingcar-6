## 과제 진행 시 주의사항
- 총 indent depth는 2까지만 허용된다.
- jest를 사용하여 정리할 기능 목록이 작동함을 테스트코드로 확인한다. (각 모듈마다 테스트 코드 구현 필요)



## 기능 요구 사항
초간단 자동차 경주 게임을 구현한다.
주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.

각 자동차에 이름을 부여할 수 있다.
자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.

사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.

전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.

자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

사용자가 잘못된 값을 입력한 경우 throw문을 사용해 "[ERROR]"로 시작하는 메시지를 가지는 예외를 발생시킨 후, 애플리케이션은 종료되어야 한다.


# 기능 목록

## `GameController` class 
- ### 메소드
    - [x] `inputCars()` : 경주 자동차들의 이름을 입력받는다.
        - [x] 입력 안내 문구를 출력한다.
        - [x] 이름은 쉼표(,) 기준으로 구분한다.
        - [x] 자동차 등록 수 제한은 없다.
        - [x] 경주 자동차 이름 검사
            - `Validate` 클래스의 `validateCarName()` 활용
    - [x] `inputTryMoveCount()` : 전진 시도 횟수를 입력받는다.
        - [x] 전진 시도 횟수 검사
            - `Validate` 클래스의 `validatTryMoveCount()`

    - [x] `start()` : 전진 시도 횟수에 따른 게임 진행
    - [x] `result()` : 게임 결과 (우승자 발표)
    
## `Racing` class
- ### 멤버 변수
    - `cars` : `Car` 인스턴스로 구성된 배열
- ###  메소드 
    - [x] `registCar()` : 입력받은 자동차 데이터를 `cars` 배열에 저장한다.
        - `cars` 에 `inputCars()`의 값을 배열로 변환하여 넣는다. 
    - [x] `moveCycle()` : 모든 `Car` 인스턴스를 `move()` 시킨다.
    - [x] `oneMoveCycleResult()` : 경주 자동차들의 이동 결과를 문자열로 반환한다.
    - [x] `getMaxDistance` : 경주 자동차의 최대 이동거리를 산출한다.
    - [x] `getWinner` : 이동거리를 비교하여 경주 우승자를 구한다. 
        - 우승자는 여러 명이 나올 수 있다.

## `Car` class
- ### 멤버 변수
    - `name` : 경주 자동차 이름
    - `distance` : 경주 자동차 이동 거리
- ### 메소드
    - [x] `isMove()` : `Car` 인스턴스 의 전진 여부를 파악하여 bolean형으로 리턴한다.
        - return 3이하: false 4이상 : true
    - [x] `move()` : 특정 조건에 따라 경주 자동차를 전진시킨다.
    - [x] `getDistance` : 이동거리를 숫자로 수치화한다.
    - [x] `toStringResult` : 현재 이동거리를 문자열로 생성한다.
        - 예시
        ```
        name: 'hongs'
        distance: '--' 일때
        this.toStringResult = "hongs : --
        ```


## `Validate` class
- [x] `validateCarName()` : 경주 자동차의 이름을 검사한다.
    - [x] 에러 발생 시 프로그램 종료
    - [x] `checkLength()`,`checkIndexBlank()`,`removeBlankSplit()`, `checkDuplication()` `checkNameLength()`을 활용하여 검사한다. 
- [x] `checkLength()` : 경주 자동차가 1대일 경우 에러를 던진다.
- [x] `checkIndexBlank()` : 경주 자동차의 이름이 공백만으로 이루어질 경우 에러를 던진다.
- [x] `removeBlankSplit()` : 공백 제거 후, 배열로 반환한다.
- [x] `checkDuplication()` : 자동차 이름들의 중복 검사한다.
- [x] `checkNameLength()` : 자동차 이름 길이 검사한다 (5자 이하).

- [x] `validateTryMoveCount()` : 전진 시도 횟수를 검사한다.
    - [x] 전진 시도 횟수는 자연수로만 이루어진다.
    - [x] 에러 발생 시 프로그램 종료
## `constants`
- [x]  `MESSAGES` : 출력 메세지에 고정적으로 사용되는 문자열들

- [x]  `ERRORS` : 에러 메세지에 고정적으로 사용되는 문자열들

- [x] `RULES` : 게임 룰에 사용되는 상수들

## `utils`
- ### API 
    - [x] `print()` : 문자열을 출력한다.
        - `MissionUtils.Console.print()` 활용

    - [x] `readLineAsync()` : 문자열을 출력한 후 데이터를 입력받는다.
        - `MissionUtils.Console.readLineAsync()` 활용

    - [x] `pickNumberInRange()` :  무작위 숫자를 생성한다
        - ` MissionUtils.Random.pickNumberInRange()` 활용

- ### ERROR
    - [x] `throwError()` : 조건에 따른 에러를 처리한다.






