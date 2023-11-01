ver 1.0
## 참고
- 해당 api에서 구현된 모듈은 함수가 사용될 때, 모듈명까지 붙어서 사용될 때를 감안해서 이름을 명명
- 따라서 본 api에서 사용된 모듈을 다른 곳에서 사용할 때에는 모듈명까지 같이 붙여서 사용할 것을 권장
   ```jsx
    import { winnerIndexList } from 'GetSource';
    winnerIndexList(racingList);//bad

    import Get from 'GetSource';
    Get.winnerIndexList(racingList);//good
  ```
- 코드의 가독성을 위해 일부 불용어(from 등)가 함수명에 포함되어 있음
- 구현할 기능 목록은 최하단에 있음

# App

레이싱의 결과를 만들고 출력하는 함수인 play()가 있음

### `async play()`

- 레이싱을 진행시킨다.

```jsx
const app=new App();
await App.play();
```

**진행순서**

1. 사용자로부터 자동차 목록과 시행횟수를 입력받아 레이싱 결과가 있는 객체를 만든다
2. 1에서 만든 객체의 레이싱 결과를 바탕으로 실행 결과를 출력한다
3. 1에서 만든 객체의 레이싱 결과를 바탕으로 우승자 이름을 출력한다


**예외**

자동차 목록을 입력받는 과정에서 `','`로 구분된 문자열의 길이가 utf-16 기준 5자 초과이면 예외를 던짐

시행 횟수를 입력받는 과정에서 양의 정수가 들어오지 않으면 예외를 던짐

# modules

# `AppModules`

- 하나의 모듈만 가져와도 모든 모듈을 사용할 수 있게 도와주는 모듈
- 이 문서에 기술 된 모든 모듈들은 이 모듈에 정의되어 있음
- 아래 모듈들을 사용할 때에는 가독성을 위해 다음과 같이 `import`하는 것을 권장

```jsx
import { ConvertInputTo } from 'AppModulesSource'
```

## ConvertInputTo

사용자로부터 입력을 받아 특정한 값으로 반환하는 함수들

### `async racingInfo()`

**입력**
- 사용자로부터 입력을 받아 레이싱의 정보(자동차 목록, 게임 수, 달린 여부)를 프로퍼티로 갖는 객체를 반환한다 
- 게임 수는 양의 정수를 입력받는다

```jsx
const racingInfo=await ConvertInputTo.racingInfo()
```

**반환하는 객체의 속성**

`carList`

자동차 이름이 담긴 배열

`numberOfGame`

게임 수(양의 정수)

`carPositionMatrix`

자동차의 게임 횟수별 위치

자동차의 순서와 게임 횟수는 0번째부터 시작

```jsx
const racingInfo=ConvertInputTo.racingInfo();

//carList의 1번째 자동차가 게임을 4번 시행했을 때의 위치
racingInfo.carPositionMatrix[1][4];

//carList의 3번째 자동차가 게임을 5번 시행했을 때의 위치
racingInfo.carPositionMatrix[3][5];
```

**예외**

자동차 목록을 입력받는 과정에서 `','`로 구분된 문자열의 길이가 utf-16 기준 5자 초과이면 예외를 던짐

시행 횟수를 입력받는 과정에서 양의 정수가 들어오지 않으면 예외를 던짐



### `async carList()`

- 사용자로부터 `','` 로 구분되고, 각 구분된 문자열이 utf-16 기준 5자 이하인 문자열을 받아 그 문자열들을 담은 배열을 반환
- ,로 구분된 문자열의 길이가 utf-16 기준 5자 초과이면 예외를 던짐

```jsx
await ConvertInputTo.carList(); // 입력: car,list

// 반환값 : [ 'car', 'list' ]

await ConvertInputTo.carList(); // 입력: hyundai,benz

//예외 : [ERROR] 이름 길이 제한을 초과했습니다.
```

### `async numberOfGame()`

- 사용자로부터 양의 정수를 받아, 문자열에 해당하는 `Number` 형으로 반환
- 양의 정수가 들어오지 않으면 예외를 던짐

```jsx
await ConvertInputTo.numberOfGame(); // 입력: 12

// 반환값 : 12

await ConvertInputTo.numberOfGame(); // 입력: 1.3
await ConvertInputTo.numberOfGame(); // 입력: 0
await ConvertInputTo.numberOfGame(); // 입력: 1회

//위의 세 줄의 코드는 모두 다음과 같은 예외를 던짐
//[ERROR] 양의 정수가 들어오지 않았습니다.
```


## Get

인자들을 바탕으로 계산된 데이터를 반환하는 함수들

### `carPositionMatrix(numberOfCar, numberOfGame)`

- `numberOfCar` 의 길이를 갖는 배열을 반환
- 각 요소에는 `numberOfGame` 번의 게임에 따른 자동차의 위치 정보가 담긴 배열이 들어가있음

```jsx
Get.carPositionMatrix(3,3);
// [
//   [1,2,3],
//   [0,1,1],
//   [0,1,2]
// ]
```

**매개변수**

***`numberOfCar`***

자동차의 수, 2차원 배열의 행에 해당

***`numberOfGame`***

게임 횟수, 2차원 배열의 열에 해당

**반환**

위치 정보가 담겨있는 2차원 배열

현재 버전은 무작위로 정해진 게임 결과에 의한 위치 정보가 들어가있음

### `randomPositionList(numberOfGame)`

- 무작위 `numberOfGame` 개의 거리 정보를 담은 배열을 반환
- `Is.running()` 에서 `true` 가 나올 확률에 따라 전진 여부가 결정됨

```jsx
Get.randomPositionList(5); // [0,1,1,2,3]
```

**매개변수**

***`numberOfGame`***

위치를 알고싶은 횟수

**반환값**

거리정보가 담긴 배열

처음 거리는 0이거나 1<br>
처음 이후의 거리는 이전 시점의 거리 보다 1만큼 크거나 같음

### `winnerNameList(racingInfo)`

- `ConvertInputTo.racingInfo()` 로 만들어지는 `racingInfo` 객체를 인자로 받아, 마지막에 가장 먼 곳에 있는 자동차들의 이름이 담긴 배열을 반환
- 반환 값은 길이가 최소 1 이상인 배열
```jsx
const racingInfo = {
  carList: ['one', 'two', 'three'],
  numberOfGame: 3,
  carPositionMatrix: [
    [0, 0, 1],
    [1, 1, 2],
    [1, 2, 2],
  ],
};

Get.winnerNameList(racingInfo); // ['two' , 'three' ]
```

### `winnerIndexList(racingInfo)`

- `ConvertInputTo.racingInfo()` 로 만들어지는 `racingInfo` 객체를 인자로 받아,마지막에 가장 먼 곳에 있는 `racingInfo.carList`에 있는 요소 번호들이 담긴 배열
- 반환 값은 길이가 최소 1 이상인 배열

```jsx
const racingInfo = {
  carList: ['one', 'two', 'three'],
  numberOfGame: 3,
  carPositionMatrix: [
    [0, 0, 1],
    [1, 1, 2],
    [1, 2, 2],
  ],
};

Get.winnerNameList(racingInfo); // [1,2]
```

### `lastPositionList(racingInfo)`

- `ConvertInputTo.racingInfo()` 로 만들어지는 `racingInfo` 객체를 인자로 받아, 마지막 게임 후 자동차들의 위치 정보가 담긴 배열
- 반환 값의 n번째 요소는 `carList` 의 n번째 자동차가 마지막 게임 후 위치 값

```jsx
const racingInfo = {
  carList: ['one', 'two', 'three'],
  numberOfGame: 3,
  carPositionMatrix: [
    [0, 0, 1],
    [1, 1, 2],
    [1, 2, 2],
  ],
};

Get.lastPositionList(racingInfo); // [1,2,2]
```

## Print

`@woowacourse/mission-utils`에서 `import`한 `MissionUtils.Console.print()`를 통해 콘솔창으로 출력하는 함수들


### `racingResultFrom(racingInfo)`

- 인자인 `racingInfo` 에 있는 정보를 바탕으로 게임 별 시행 결과를 출력

```jsx
const racingInfo = {
  carList: ['one', 'two', 'three'],
  numberOfGame: 3,
  carPositionMatrix: [
    [1, 2, 3],
    [1, 1, 2],
    [0, 0, 0],
  ],
};

Print.racingResultFrom(racingInfo);

// 실행 결과
// one : -
// two : -
// three : 

// one : --
// two : -
// three : 

// one : ---
// two : --
// three : 
```

**매개변수**

***`racingInfo`***

`ConvertInputTo.racingInfo()` 에서 반환하는 형식의 객체

### `positionWhenGameCount(racingInfo, gameCount)`

- 인자인 `racingInfo` 의 `carList` 의 모든 요소들이 게임을 `gameCount` 횟수 시행했을 때 위치를 출력


```jsx
const racingInfo = {
  carList: ['one', 'two', 'three'],
  numberOfGame: 3,
  carPositionMatrix: [
    [1, 2, 3],
    [1, 1, 2],
    [0, 0, 0],
  ],
};

Print.racingResultFrom(racingInfo,1);

// one : --
// two : -
// three : 
```

**매개변수**

***`racingInfo`***

`ConvertInputTo.racingInfo()` 에서 반환하는 형식의 객체

***`gameCount`***

위치를 알고싶은 횟수

### `winnerFrom(winnerNameList)`

승자 이름이 담긴 배열을 받아서 승자 명단을 출력

```jsx
Print.winnerFrom(['ss','0526']); // 최종 우승자 : ss, 0526
Print.winnerFrom(['cha']); // 최종 우승자 : cha

```

## Is

매개변수를 통해 `Boolean`(`true`, `false`)값을 반환하는 함수들


### `running()`

- 무작위로 `true`와 `false`를 반환
- 상세
  - `@woowacourse/mission-utils`에서 `import`한 `MissionUtils.Random` 모듈의 `pickNumberInRange(0, 9)` 의 반환 값이 4 이상인 경우 `true`, 아니면 `false`를 반환
  - `true` 의 기대 확률 60%, `false`의 기대 확률 40%


```jsx
Is.running(); // true
Is.running(); // false
```

### `positiveIntergerString(string)`

- 문자열을 인자로 받아 문자열이 양의 정수가 될 수 있는지 판별하는 함수

```jsx
Is.positiveIntergerString('1'); // true
Is.positiveIntergerString('ckck'); // false
```

**매개변수**

***`string`***

문자열

**반환값**

`string`이 양의 정수로 반환되는 문자열이면 `true`, 아니면 `false` 를 반환

## ErrorCheck

매개변수에 따라 예외를 반환하는 함수들

### `carListString(string)`

**매개변수**

***`string`***

`','`로 구분되는 문자열

**예외**

`','`로 구분되는 문자열 중 하나라도 길이가 utf-16 기준 5자 초과이면 예외를 던짐

### `positiveIntegerString(string)`

**매개변수**

***`string`***

문자열

**예외**

`string` 을 `Number`의 인자로 넣었을 때의 반환 값이 양의 정수가 아니면 예외를 던짐

**구현할 기능 목록**
---
- [x] 객체 초기화 하기(생성자 x)
  - [x] 자동차 이름이 담긴 문자열을 받아 배열로 바꾸기
    - [x] 경주할 자동차 이름 입력 받기
    - [x] 입력 받은 문자열이 잘못된 값인지 확인: 각 이름이 5자 이하인지 확인
    - [x] 입력받은 문자열을 사람이름이 담긴 배열로 만들기

  - [x] 시도할 횟수 숫자로 받기
    - [x] 시도할 횟수 입력 받기
    - [x] 입력 받은 값이 숫자인지 확인하기

  - [x] 시도횟수 별 위치가 담긴 배열 만들기
  
- [x] 실행 결과 출력하기
  - [x] 시도 횟수 별 모든 사람의 이름과 전진여부 출력하기

- [x] 가장 멀리 간 자동차의 이름 확인하기
  - [x] 가장 멀리 간 자동차의 위치 확인
  - [x] 가장 멀리 간 자동차의 위치와 같은 위치에 있는 자동차 확인하기
- [x] 최종 우승자 이름 출력하기

**테스트 코드 만들기** 
---

- [x] 객체 초기화 하기(생성자 x)
  - [x] 자동차 이름이 담긴 문자열을 받아 배열로 바꾸기
  - [x] 시도할 횟수 숫자로 받기
  - [x] 시도횟수 별 진행 여부 담긴 배열 만들기

- [x] 실행 결과 출력하기(시행 횟수 별 모든 사람의 이름과 전진여부 출력하기)

- [x] 최종 우승자 이름 출력하기``