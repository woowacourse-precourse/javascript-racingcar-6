# 우테코 프리코스 2주차 - 자동차 경주

## 기능 목록 초안

### [게임 로직 기능] - 테스트 완료

1. [O] 0에서 9 사이에 랜덤 값 추출 기능 - makeRandomNumber()
2. [O] 추출한 랜덤 값이 4이상일 경우만 전진 - advanceIfOverFour()
3. [O] 자동차 이름과 '-'.repeat(전진 횟수)로 출력 메시지 리턴 기능 - printAdvanceResult()
4. [O] 각각 전진한 횟수 누적값 저장 기능 - PlayRacingCar 클래스에 advance 변수에 저장
5. [O] 게임 완료 시 누적값을 비교하며 최종 우승자 체크 기능 - GameWinner 클래스
6. [O] 전진 횟수 리셋 기능 - resetAdvance()

### [입력 기능] - Input.js - 테스트 완료

1. [O] 경주할 자동차 이름 입력 - Input.text(GAME.CAR_NAME_INPUT)
2. [O] 시도할 횟수 입력 - Input.text(GAME.TRY_COUNT_INPUT)

### [출력 기능] - Output.js - 테스트 완료

1. [O] 게임 시작 문구 출력 - '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)' - GAME.CAR_NAME_INPUT
2. [O] 시도할 횟수 질문 출력 - '시도할 횟수는 몇 회인가요?' - GAME.TRY_COUNT_INPUT
3. [O] 시도할 횟수 입력받고 경주 시작 문구 출력 - '실행 결과' - GAME.RESULT
4. [O] 각 차수별 경주 실행 결과 출력 - 차수별 결과와 자동차 이름 함께 출력 - printAdvanceResult()
5. [O] 게임 완료 후 우승자 안내 문구 출력 - 여러 명일 경우 쉼표(,) 사용 - GAME.WINNER + printWinners()
6. [O] 잘못된 값을 입력하면 에러 문구 출력 - '[ERROR] 에러 원인 메시지' - PREFIX

### [검증 기능] - 테스트 완료

- 플레이어 입력에 대한 예외

1. [O] 자동차 이름을 입력하지 않은 경우 - checkIfEmpty()
2. [O] 콤마 사이에 공백 또는 빈 문자열일 경우(형식에 어긋날 경우) - checkIfInvalid()
3. [O] 중복되는 자동차 이름이 존재할 경우 - checkIfDuplicate()
4. [ ] 자동차 이름을 쉼표(,)로 구분하지 않았을 경우 - 쉼표로 구분하지 않아 길어질 경우 5번에 해당함
5. [O] 자동차 이름이 6자 이상일 경우(공백 포함) - checkIfOverLength()
6. [O] 숫자 형식에 어긋날 경우(빈칸, 공백, 문자 등) - checkIfInvalid()
7. [O] 시도 횟수가 0보다 큰 정수가 아닌 경우(-1, 0.5 등) - checkIfZeroOrLess()

## 파일 설명

- src/App.js

App 클래스의 play 메서드는 비동기적으로 게임을 실행하며, RacingCarGame의 start 메서드를 호출하여 게임을 시작합니다.

- src/constants.js

constants.js 파일에는 상수들을 정의하고 있습니다.
RANDOM 객체(랜덤 숫자 생성에 사용되는 최소(0) 및 최대(9) 값으로 구성)
GAME 객체(자동차 게임 관련한 메시지)
ERROR 객체(여러 오류 메시지들을 저장)

- src/RacingCarGame.js

자동차 경주 게임의 흐름을 관리하는 RacingCarGame 클래스를 정의합니다. start() 메서드로 게임을 시작하고, 자동차 이름과 시도 횟수를 입력받아 검증합니다. 그 후 CarController를 이용하여 자동차를 생성하고 경주를 시작합니다.

- racingcargame/CarController.js

CarController 클래스에서 자동차 이름을 받아 해당 이름으로 RacingCar 인스턴스를 생성하고, 자동차들을 관리합니다. 또한, 각 자동차들이 전진하도록 playAdvance 메서드를 통해 무작위 숫자를 생성하여 전진하도록 합니다. advanceResult 메서드는 전진 결과를 출력하고, racingResult 메서드는 각 자동차의 이름과 전진 거리를 객체 형태로 반환합니다.

- racingcargame/GameWinner.js

GameWinner 클래스에서 자동차 객체와 해당 자동차의 진행 상황을 가지고 최종 우승자를 결정합니다. findMaxValue 메서드는 객체 값 중 최대값을 찾고, getKeysOfMaxValue 메서드는 최대값과 일치하는 키를 찾아 리스트에 추가합니다. 마지막으로 printWinners 메서드는 우승자들의 이름을 쉼표로 구분하여 반환합니다.

- racingcargame/MakeRandomNumber.js

makeRandomNumber()를 통해 0에서 9사이에 랜덤값을 추출합니다.

- racingcargame/RacingCar.js

RacingCar 클래스에서 자동차 이름과 전진 상태를 가지고 있으며, 여러 메서드를 통해 전진 상태를 변경하고 출력하는 등의 기능을 수행합니다.

- racingcargame/RacingCarName.js

RacingCarName 클래스에서 주어진 이름에 대한 여러 유효성 검사를 수행하고, 각각의 조건에 맞지 않으면 해당하는 에러를 발생시킵니다.

- racingcargame/RachingTryCount.js

RacingTryCount 클래스에서 시도 횟수에 대한 유효성 검사를 수행하며, 해당 횟수가 유효하지 않거나 0보다 작거나 정수가 아닌 경우에 대해 예외를 발생시킵니다.

- racingcargame/index.js

각각 CarController, Winner, MakeRandomNumber, RacingCar, RacingCarName, RacingTryCount 모듈들을 내보내서 다른 파일에서 가져와 사용할 수 있게 적용했습니다.

- validation/CarNameValidation.js

CarNameValidation 클래스에서 자동차 이름에 대한 유효성 검사를 수행합니다.
이름이 비어있는지, 유효한 형식인지, 중복된 이름이 존재하는지, 길이가 5 이하인지 확인합니다.

- validation/TryCountValidation.js

TryCountValidation 클래스에서 시도 횟수에 대한 유효성을 검사하는데 사용됩니다.
시도 횟수가 유효한지, 0보다 큰 정수인지 확인합니다.

- view/input.js

주어진 메시지를 출력하고 사용자로부터 텍스트 입력을 받습니다.

- view/output.js

주어진 메시지를 출력합니다.

## 1주차 공동 피드백(커밋할 때마다 지켰는지 확인하기!)

- [애매] 요구사항을 정확히 준수한다. -> 커밋 메시지 컨벤션을 제대로 적용하지 않은 것 같다.
- [애매] 커밋 메시지를 의미있게 작성한다. -> 모든 커밋 메시지를 의미있게 작성하지는 않은 것 같다.
- [ ] git을 통해 관리할 자원에 대해서도 고려한다.
- [O] pull request를 보내기 전 브랜치를 확인한다.
- [ ] pr을 한 번 작성했다면 닫지 말고 추가 커밋을 한다.
- [O] 변수명, 함수명, 클래스명 등 이름을 통해 의도를 드러낸다.(축약하지 않는다.)
- [ ] 공백도 코딩 컨벤션이다.(공백 라인을 의미있게 사용한다.)
- [O] space와 tab을 혼용하지 않는다.
- [O] 의미없는 주석을 달지 않는다.
- [O] eslint와 prettier를 활용하자. - .eslint.cjs, .prettierrc.cjs
- [O] 최종 제출하는 코드에서 End Of Line을 확인한다. - endOfLine: 'auto' 적용함
- [O] 불필요한 console.log를 남기지 않는다.
- [O] js에서 제공하는 api를 적극 활용한다. - map, some 등
