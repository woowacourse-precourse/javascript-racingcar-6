bbbb# Lv1. 기능 분석

## 기본 입출력 요구사항
> - 입력
>   - 경주 할 자동차 이름
>     - 쉼표(,)로 구분
>     - 5자 이하
>   - 시도할 횟수 : 자연수
> </br></br>
> - 출력
>   - 상황별 안내메시지
>     - `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`
>     - `시도할 횟수는 몇 회인가요?`
>     - `실행 결과`
>   - 차수 별 실행 결과
>     - `${car_name} : --`
>     - 매 차수마다 출력 (하이픈(-)은 이동 거리)
>   - 우승자 안내 문구
>     - 단독 우승 : `최종 우승자 : ${car_name}`
>     - 공동 우승 : `최종 우승자 : ${car_name1}, ${car_name2}`
>   - 예외 발생 : `[ERROR] ${context}` 형식으로 출력

</br>

## 기능 요구사항
> - [ ] 게임 시작
>   - [ ] 자동차 이름 입력
>     - [ ] 안내메시지 출력
>     - [ ] 사용자 입력
>     - [ ] 유효성 검사 (예외처리)
>   - [ ] 시도 횟수 입력 (안내메시지 출력 및 사용자 입력)
>     - [ ] 안내메시지 출력
>     - [ ] 사용자 입력
>     - [ ] 유효성 검사 (예외처리)
> </br></br>
> - [ ] 게임 진행
>   - [ ] 시도 횟수만큼 반복
>   - [ ] 각 자동차 이동/정지 (0~9 사이 난수가 4 이상일 경우 이동)
>   - [ ] 각 자동차 위치 저장
>   - [ ] "실행 결과" 및 차수 별 실행 결과 출력
> </br></br>
> - [ ] 게임 종료
>   - [ ] 최종 우승자 선별
>   - [ ] 최종 우승자 출력

</br>

## 체크포인트
> - [ ] SOLID 원칙을 준수하였는가
> - [ ] 기능을 최소단위로 분리하였는가
> - [ ] 접근제한자를 적절히 적용하였는가 (`#`, `_`)
> - [ ] indent의 depth가 2를 초과하지 않았는가
> - [ ] 문자열 생성 시 template strings을 이용하였는가

</br>
</br>

# Lv2. 설계

## 🕹️ GameManager
프로그램의 전체적인 흐름을 처리하는 클래스
> ### variables
> - `Board` `_board` : 게임보드
> </br></br>
> ### functions
> - `play` `()` : 프로그램 실행
>   - `this._startGame()`
>   - `this._playGame()`
>   - `this._finishGame()`
> </br></br>
> - `_startGame` `()` : 게임 시작 (사용자 입력)
>   - `this.board = new Board()` : 게임보드 생성
>   - `Strings.INPUT_CAR_NAMES`
>   - `this._board.setCars()` : 레이싱카 셋팅
>   - `Strings.INPUT_NUM_TURNS`
>   - `this._board.setNumTurns()` : 턴 수 입력
> </br></br>
> - `_playGame()` : 게임 진행
>   - `numTurns = this._board.getNumTurns()`
>   - `Strings.GAME_RESULT`
>   - `for (numTurns)` : 턴 진행
>     - `this._board.executeTurn()` : 하나의 턴 수행
>     - `this._board.printMiddleResult()` : 중간 결과 출력
> </br></br>
> - `_finishGame` `()` : 게임 종료 (최종 우승자 출력)
>   - `this._board.pickOutWinner()` : 우승자 선별
>   - `this._board.printFinalResult()` : 최종 결과 출력

</br>

## 🎮 Board
게임의 진행 상태를 담당하는 클래스
> ### Members
> - `Number` `_numTurns` : 턴 수
> - `Array<Car>` `_cars` : 레이싱카 리스트
> - `Array<Car>` `_winners` : 최종 우승자 리스트
> </br></br>
> ### Functions
> - `setCars` `()` : 레이싱카 셋팅
>   - `carNames = this._inputCarNames()`
>   - `this._cars.push(new Car(carNames[i]))`
> </br></br>
> - `Array<String>` `_inputCarNames` `()` : 레이싱카 이름 입력
> </br></br>
> - `setNumTurns` `()` : 턴 수 입력
>   - `this._numTurns`
> </br></br>
> - `executeTurn` `()` : 턴 수행
>   - `this._cars.forEach((car) => { })`
>     - `this._getRandomDigit()`
>     - `if (randomDigit >= 4)`
>       - `car.move()`
> </br></br>
> - `Number` `_getRandomDigit` `()` : 0~9 사이 정수 랜덤 반환
> </br></br>
> - `printMiddleResult` `()` : 중간 결과 출력
>   - `this._cars.forEach((car) => )`
>   - `[car.getName(), Strings.COLON, Strings.DISTANCE.repeat(car.getDistance())].join(' ')`
> </br></br>
> - `pickOutWinner` `()` : 우승자 선별
>   - `this._sortCarsByDistanceDescending()`
> </br></br>
> - `_sortCarsByDistanceDescending` `()` : Cars를 distance를 기준으로 내림차순 정렬
>   - `this._cars.sort((a, b) => b.getDistance() - a.getDistance())`
> </br></br>
> - `printFinalResult` `()` : 최종 결과 출력
>   - `[Strings.FINAL_WINNER, Strings.COLON].concat(this._getWinnerNames().join(', ')).join(' ')`
> </br></br>
> - `Array<String>` `_getWinnerNames` `()` : 최종 우승자 이름 배열 반환
>   - `winnerNames.push(this._cars[i].getName())`

</br>

## 🎮 Car
레이싱카의 정보를 저장하는 클래스
> ### Members
> - `String` `_name` : 이름
> - `Number` `_distance = 0` : 이동 거리
> </br></br>
> ### Functions
> - `constructor` `(String name)` : 생성자
>   - `this._name = name`
> </br></br>
> - `move` `()` : 1만큼 이동
>   - `this._distance++;`
> </br></br>
> - `String` `getName` `()` : 이름 반환
> </br></br>
> - `Number` `getDistance` `()` : 이동 거리 반환

</br>

## 💬 Strings
프로그램에서 사용되는 문자열을 포장, 관리
> ### Members
> - `DISTANCE` : `-`
> - `COLON` : ` :`
> - `INPUT_CAR_NAMES` : `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`
> - `INPUT_NUM_TURNS` : `시도할 횟수는 몇 회인가요?`
> - `GAME_RESULT` : `실행 결과`
> - `FINAL_WINNER` : `최종 우승자`
