# 🚘 자동차 경주

## 기능 요구사항 요약

- n대의 자동차는 전진 또는 멈춤 동작
- 각 자동차에는 이름을 부여
- 자동차 이름은 쉼표로 구분하고 5자 이하만 가능
- 사용자가 n번 입력
- 0~9사이에 무작위 값을 구해서 4이상이면 전진 아니면 정지
- 끝나면 우승이고 우승자는 한 명 이상일 수 있음
- 우승자가 여러명이면 쉼표를 이용해 구분
- 잘못된 값이면 throw error

## 유저 플로우

1. ‘경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)’ 메시지 출력
2. 사용자가 쉼표로 구분해 자동차이름 입력 ex) ‘pobi, woni, jun’ (여기서 쉼표 기준으로 split하고 각각 문자열 trim 해주면 좋을듯 ⇒ 사용자 편의)
3. ‘시도할 횟수는 몇 회인가요?’ 메시지 출력
4. 사용자가 횟수를 입력
5. ‘실행 결과’ 메시지 출력
6. 입력된 이름의 순서를 기준으로 ‘${이름} : ${dashedLine}’ 형식으로 라운드 진행 결과를 출력 ⇒ 횟수에 따라 반복
7. ‘최종 우승자 : ${winners}’ 출력, 여러명은 쉼표를 기준으로 구분
8. 종료


## 기능 목록

### ⭐ Util

- 0부터 9까지 랜덤 생성하여 수가 4이상이면 true, 4미만이면 false 리턴 - Util # isForward
- 어레이를 순회하면서 해당 인덱스의 문자열 양쪽의 공백을 제거 - Util # trimStringInArray
- carStateArray를 통해 우승자를 판단하여 문자열로 반환 - Util # getWinners

### ⭐ Validator

- 입력받은 자동차 이름이 다음과 같을 때 에러 Validator # validateCarsName
    1. 빈 문자열이 전달 ⇒ ‘[ERROR] 자동차 이름을 입력해주세요’
    2. 콤마 안에 공백이 포함 ⇒ ‘[ERROR] 모든 자동차에 이름을 지정해주세요’
    3. 이름이 6자이상 ⇒ ‘[ERROR] 5자 이하의 자동차 이름을 지정해주세요’
    4. 이름이 중복 ⇒ ‘[ERROR] 중복되지 않은 이름을 지정해주세요’

- 입력받은 시도 횟수가 0이거나 숫자가 아니면 에러 - Validator # validateRoundsCount
    1. 시도 횟수를 0으로 입력 ⇒ ‘[ERROR] 자연수를 입력해주세요’
    2. 자연수가 아닌 수(소수)를 입력 ⇒ ‘[ERROR] 자연수를 입력해주세요’
    3. 숫자가 아닌 문자를 입력 ⇒ ‘[ERROR] 자연수를 입력해주세요’

### ⭐ CarClass

- util의 isForward를 실행하여 true면 forwardCount += 1, false면 변화없음 - Car # tryMoveForward
- 해당 인스턴스의 name, forwardCount를 반환함 - Car # getCarState

### ⭐ RacingClass

- 자동차 이름 어레이를 받아 생성한 인스턴스 어레이를 프로퍼티에 저장 Racing # setCarArray
- 자동차의 정보들(name, forwardCount)을 반환함 - Racing # getCarStateArray
- 자동차들 action을 한 사이클 try함 - Racing # tryCarsMove

### ⭐ RacingController

- RacingClass에서 playRound를 실행하고, 이후 carStateArray를 받아 OutputView로 넘김 - RacingController # runRound
- InputView에서 자동차 이름들을 RacingClass의 setCarArray로 넘김 - RacingController # setupCars
- InputView에서 시도횟수를 받음 - RacingController # setupRoundsCount
- InputView에서 전달받은 횟수 동안 runRound 실행 - RacingController # startRacing
- RacingClass에서 carStateArray를 받아 util의 getWinners를 거쳐 OutView로 우승자 정보를 넘김 - RacingController # finishRacing
- setUpCars, setupRoundsCount, startRacing, finishRacing 실행 - RacingController # start

### ⭐ InputView

- 자동차 이름을 입력받음 - InputView # inputCarsName
- 시도할 횟수를 입력받음 - InputView # inputTryCount

### ⭐ OutputView

- ‘실행 결과’ 출력(앞에 \n) - OutputView # printRacingStart
- 자동차들의 이름과 움직인 상태를 출력 (이름 : - * moveCount 형식, 끝에 \n) - OutputView # printRoundResult
- 우승자를 출력함 (최종 우승자 : name 형식, 여러대면 쉼표로 구분) - OutputView # printWinners

### ⭐ Constants
- 에러메시지들을 저장 - Constants # errorMessage
- 사용자에게 보여줄 메시지들을 저장 - Constants # printMessage
