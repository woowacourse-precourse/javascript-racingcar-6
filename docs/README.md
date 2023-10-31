```
addCars(); void
```

- 입력된 자동차의 개수만큼 cars멤버를 객체로 초기화합니다.
- 각각의 객체는 자동차의 이름과 점수를 속성으로 가지고 있습니다.

```
checkCarNames(); void
```

- isDupCarNames와 isValid 함수를 호출하여 문자열 에러를 처리합니다.
- 예외를 throw하여 잘못된 입력 시 에러 메시지를 출력합니다.

```
isValid(); boolean
```

- 입력된 문자열 길이가 5자 이하인지 확인합니다.
- 입력된 문자열 길이가 비어있는지 확인합니다.

```
isDupCarNames(); boolean
```

- 입력된 문자열이 중복되었는지 확인합니다.

```
checkNumber(); void
```

- 입력된 게임라운드 문자가 숫자인지 확인합니다.
- 예외를 throw하여 잘못된 입력 시 에러 메시지를 출력합니다.

```
startRacing(); void
```

- 입력된 횟수에 따라서 게임을 진행합니다.

```
playOneRound(); void
```

- 각각의 차들마다 주사위를 굴리고 점수를 기록합니다.
- 해당 회차 결과를 출력합니다.

```
rollDice(); number
```

- pickNumberInRange 함수를 사용해서 랜덤숫자를 뽑습니다.

```
printRoundResult(); void
```

- 한판의 결과를 출력합니다.

```
printWinner(); void
```

- 우승자를 출력합니다.
- 가장 높은 점수를 찾고 점수에 해당하는 차를 모두 출력합니다.
