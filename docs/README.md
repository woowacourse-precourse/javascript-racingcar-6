# 프로그램 구조

App.js(컨트롤러) <- RacingCar.service.js(서비스)

# App.js

## play

- 레이싱 게임을 시작하기 위해 RacingCar 서비스의 racingCarQuery 메서드를 호출합니다.

### returns

`Promise<void>`

# RacingCar.service.js

## racingCarQuery

- `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`를 출력하고 입력 받습니다.
- `시도할 횟수는 몇 회인가요?`를 출력하고 입력 받습니다.

### Returns

`Promise<void>`

## validateRacingCarNameQueryInput

- 경주할 자동차 이름이 각각 5자 이하인지 확인합니다.
- 경주할 자동차 이름이 유일한지 확인합니다.

### Parameters

| Name | Type     | Description        |
| ---- | -------- | ------------------ |
| cars | string[] | 경주할 자동차 이름 |

### Returns

`undefined`

## validateRacingCarTryQueryInput

- 이동할 횟수가 숫자인지 확인합니다.

### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| try  | string | 이동할 횟수 |

### Returns

`undefined`

## play

- `실행 결과`를 출력합니다.
- 시도할 횟수만큼 매턴을 진행합니다.
- 각 자동차는 0에서 9사이의 랜덤한 숫자를 뽑고 4이상이면 전진합니다.
- 매 턴이 끝나면 결과를 출력합니다.

```
출력 예시
pobi : ----
woni : ---
jun : ----
```

### Parameters

| Name | Type     | Description        |
| ---- | -------- | ------------------ |
| cars | string[] | 경주할 자동차 이름 |
| try  | number   | 시도할 횟수        |

### Returns

`undefined`

## printResult

- 최종 결과를 출력합니다.
- 공동 우승인 경우 `, `를 사용하여 구분합니다.

### Parameters

| Name    | Type     | Description        |
| ------- | -------- | ------------------ |
| winners | string[] | 우승한 자동차 이름 |

### Returns

`undefined`
