# 프로그램 구조

```
App.js
- RacingCar.service.js

IO.controller.js
- Input.service.js
- Output.service.js

Validation.controller.js
- Validation.service.js
```

의존성 주입은 아래와 같이 이루어져 있습니다.

App <- IO <- Validation

# App 컨트롤러 (App.js)

## play

- 레이싱 게임을 시작하기 위해 RacingCar 서비스의 racingCarQuery 메서드를 호출합니다.

### returns

`Promise<void>`

# App 서비스 (RacingCar.service.js)

## racingCarQuery

- `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`를 출력하고 입력 받습니다.
- `시도할 횟수는 몇 회인가요?`를 출력하고 입력 받습니다.

### Returns

`Promise<void>`

## pickRandomNumber

- 0에서 9사이의 숫자를 뽑습니다.

### Returns

`number`

## play

- `실행 결과`를 출력합니다.
- 시도할 횟수만큼 매턴을 진행합니다.
- 각 자동차는 0에서 9사이의 랜덤한 숫자를 뽑고 4이상이면 전진합니다.

### Parameters

| Name     | Type                | Description            |
| -------- | ------------------- | ---------------------- |
| progress | { carName: string } | 경주할 자동차의 진행도 |
| cars     | string[]            | 경주할 자동차 이름     |
| tries    | number              | 시도할 횟수            |

### Returns

`undefined`

# IO 컨트롤러 (IO.controller.js)

## readCarName

- 자동차 이름을 가진 배열을 반환합니다.

### Returns

`Promise<string[]>`

## readCarTries

- 시도 횟수를 숫자형으로 변환하여 반환합니다.

### Returns

`Promise<number>`

## PrintResultIntro

- Output 서비스를 호출하여 intro 메시지를 출력합니다.

### Returns

`undefined`

## PrintCurrentIntro

- Output 서비스를 호출하여 각 자동차의 진척도를 출력합니다.

### Returns

`undefined`

## PrintFinalResult

- Output 서비스를 호출하여 최종 우승자를 출력합니다.

### Returns

`undefined`

## IO 서비스 (Input.service.js)

## readCarName

- 사용자가 입력한 자동차 이름을 읽습니다.

### Returns

`Promise<string>`

## readCarTries

- 사용자가 입력한 시도 횟수를 읽습니다.

### Returns

`Promise<string>`

# IO 서비스 (Output.service.js)

## printResultIntro

- intro 메시지를 출력합니다.

### Returns

`undefined`

## printCurrentResult

- 각 자동차의 현재 이동 결과를 출력합니다.

### Parameters

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| car      | string  | 자동차 이름                         |
| position | string  | 현재 위치                           |
| isLast   | boolean | 마지막 자동차면 빈 줄을 출력합니다. |

### Return

`undefined`

## printFinalResult

- 최종 결과를 출력합니다.
- 공동 우승인 경우 `, `를 사용하여 구분합니다.

### Parameters

| Name   | Type               | Description        |
| ------ | ------------------ | ------------------ |
| result | { [car] : string } | 각 자동차의 결과들 |

### Returns

`undefined`

# Validation 컨트롤러 (Validation.controller.js)

## validateCars

- 서비스를 호출하여 자동차 이름 길이를 검증합니다.
- 서비스를 호출하여 자동차 이름이 유일한지 검증합니다.

### Returns

`undefined`

## validateTries

- 서비스를 호출하여 시도 횟수가 숫자인지 검증합니다.
- 서비스를 호출하여 시도 횟수가 1이상인지 검증합니다.

### Returns

`undefined`

# Validation 서비스 (Validation.service.js)

## validateCarNamesLength

- 경주할 자동차 이름이 5자 이하인지 확인합니다.
- 경주할 자동차 이름이 1글자 이상인지 확인합니다. (e.g. '1,,')

### Parameters

| Name | Type     | Description        |
| ---- | -------- | ------------------ |
| cars | string[] | 경주할 자동차 이름 |

### Returns

`undefined`

## validateCarsUnique

- 경주할 자동차 이름이 유일한지 확인합니다.

### Parameters

| Name | Type     | Description        |
| ---- | -------- | ------------------ |
| cars | string[] | 경주할 자동차 이름 |

### Returns

`undefined`

## validateTriesIsNumber

- 이동할 횟수가 숫자인지 확인합니다.

### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| tries | number | 이동할 횟수 |

### Returns

`undefined`

## validateTriesInRange

- 이동할 횟수가 1 이상인지 확인합니다.

### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| tries | number | 이동할 횟수 |

### Returns

`undefined`
