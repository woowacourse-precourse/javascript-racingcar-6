# 구현 기능 목록

## Properties

- `TRY {int}` - 시도 횟수

- `RACE_CARS {Array<RaceCar>}` - 자동차 정보 배열

  - `RaceCar {Object}` - 각 경주 자동차의 정보  
     각 경주 자동차에 대해서 **자동차의 이름**과 **이동 거리 정보**를 저장해야 하므로, 객체 타입으로 정의한다.  
     아래와 같은 타입의 객체로 사용한다.

    ```typescript
    interface RaceCar {
      name: string;
      distance: number;
    }
    ```

## Functions

### 1. 사용자 입력

- **자동차 이름 입력** - `get_car_input()`

  ```
  경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
  ```

  👉🏻 입력받은 자동차 목록을 배열 형태로 리턴한다.  
  👉🏻 입력받은 자동차 이름은 `RACE_CARS`에 저장한다.

  - 쉼표(,)로 구분하여 자동차 이름을 입력받는다.  
     🌟 자동차 이름은 **5자 이하**  
     자동차 이름의 앞, 뒤에 공백이 존재하는 경우 이를 무시

- **시도 횟수 입력** - `get_try_input()`
  ```
  시도할 횟수는 몇 회인가요?
  ```
  👉🏻 입력받은 횟수를 메소드에서 리턴한다.  
  👉🏻 리턴 받은 값은 `TRY`에 저장한다.
- **❗️(공통) 예외처리❗️**  
  사용자가 잘못된 값을 입력한 경우 throw문을 사용해 `[ERROR]`로 시작하는 메시지를 가지는 예외를 발생시킨 후, 애플리케이션은 종료되어야 한다.

<br/>

### 2. 실행 결과 출력

- 각 차수별 실행 결과 - `print_racing()`

  ```
  pobi : --
  woni : ----
  jun : ---
  ```

  `RACE_CARS` 배열 내 저장된 각 `RaceCar 객체`의 **자동차 이름**, **거리** 정보를 참조하여 출력을 진행한다.

- 최종 결과 출력 - `print_race_result()`
  ```
  최종 우승자 : pobi, jun
  ```
  👉🏻 우승자 판별 _(= `distance` 값이 가장 큰 자동차)_
  - 배열 메소드를 사용하여 `RACE_CARS` 내 가장 큰 distance 값을 `max_distance`에 저장한다.
  - `RACE_CARS`를 순회하면서 `max_distance`와 동일한 distance 값을 갖는 자동차의 이름을 `result` 배열에 _push_ 한다.
  - `result` 배열에 있는 값을 ", " 로 _join_ 한다.

<br/>

### 3. 자동차 경주 구현 - `race()`

- n대(= `RACE_CAR.length()`)의 자동차는 전진하거나 멈출 수 있다.
  - **전진하는 조건**은 0에서 9 사이에서 무작위 값을 구한 후 `무작위 값이 4 이상`일 경우이다.
- 각 자동차에 대해서 "_전진 | 멈춤_" 여부를 결정하고, 이를 해당하는 자동차의 `distance` 프로퍼티에 반영한다.

<br/>

### 4. 게임 실행 구현 - `game()`

1. 사용자 입력 메소드를 호출하여 `TRY`, `RACE_CAR` 값 설정
2. 실행 결과 문구 출력
   ```
   실행 결과
   ```
3. 아래 과정을 `TRY`번 반복한다.
   - 자동차 경주 메소드 `race()` 실행
   - `print_racing()` 메소드 호출하여 차수별 실행 결과 출력
4. `print_race_result()` 메소드 호출하여 최종 우승자를 출력한다.

<br/>

# [Refactor] MVC 구조

> 위에서 기능 단위로 구현한 코드를 MVC 구조로 리팩토링 해보자.  
> MVC 구조는 기능 단위가 아닌 객체 단위로 코드를 분리하는 구조이다. 이때 각 객체는 자신이 수행할 기능만 담당하며, 다른 객체의 기능을 침범하지 않도록 한다.
>
> **M(Model)** - user가 사용하는 데이터를 저장  
> **V(View)** - 뷰를 통해 user가 저장된 데이터를 확인할 수 있으며 입,출력을 담당 (모델이 저장하는 정보를 뷰가 따로 저장하고 있어서는 안된다.)  
> **C(Controller)** - user의 요청에 따라 뷰 혹은 모델을 사용하여 작업 처리

<br/>

## 1️⃣ RaceGameModel

> 프로그램에서 필요로 하는 모든 값들은 모델에서 저장/관리한다.  
> 데이터에 수정이 필요한 경우, 모델을 통해 이를 수정할 수 있다.

### Properties

- `try {int}`
- `race_cars {Array<RaceCar>}`
- `winners {Array<string>}`

### Functions(methods)

1. *try 값*을 설정하는 함수 - `set_try()`
2. *race_cars 값*을 설정하는 함수 - `set_race_cars()`
3. *try 값*을 리턴하는 함수 - `get_try()`
4. *race_cars 값*을 리턴하는 함수 - `get_race_cars()`
5. *winners 값*을 설정하는 함수 - `set_winners()`
6. *winners 값*을 리턴하는 함수 - `get_winners()`

<br/>

## 2️⃣ RaceGameView

> 현재 저장된 데이터 값을 확인할 수 있으며, 입/출력을 통해 사용자로부터 값을 입력받을 수 있다.

### Properties

❌

### Functions(methods)

1. User로부터 *시도 횟수*를 입력받는 함수 - `get_try_input(): string`
   - 문구 출력 및 입력  
     `시도할 횟수는 몇 회인가요?`  
      👉🏻 여기서 입력받은 횟수를 리턴한다
2. User로부터 *경주 자동차 이름*을 입력받는 함수 - `get_car_input(): string`

   - 문구 출력 및 입력

     ```
     경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
     ```

     👉🏻 여기서 입력받은 문자열을 리턴한다

3. 레이싱 진행 상황을 출력하는 함수 - `print_racing(Object[] race_cars): void`

   - `RACE_CARS 배열` 값을 토대로 레이싱 진행 상황을 출력한다.
     ```
     pobi : --
     woni : ----
     jun : ---
     ```

4. 레이싱 게임 최종 결과를 출력하는 함수 - `print_race_result(string[] winners): void`

   - `winners 배열` 값을 토대로 우승자 목록을 출력한다.
     ```
     최종 우승자 : pobi, jun
     ```

5. 전달받은 문구를 출력하는 함수 - `print_string(string str): void`
   - str 문자열을 `Console.print()`를 통해 출력한다.

<br/>

## 3️⃣ RaceGameController

> 모델과 뷰를 연결하며 사용자가 컨트롤러를 통해 데이터를 조작할 수 있도록 돕습니다.

### Properties

- `race_game_model`
- `race_game_view`

### Functions(methods)

1. try 문자열에 대해 검증하는 함수 - `is_valid_try(string try): boolean`

2. try 문자열을 입력받아 이를 Model에 설정하는 함수 - `set_try(string try): void`

   - `is_valid_try()` 메소드를 통해 검증과정을 거친 후 검증에 성공한 경우에만 model에 try 값을 반영한다.

3. cars 문자열에 대해 검증하는 함수 - `is_valid_car_name(string cars): boolean`

4. cars 문자열을 입력받아 이를 Model에 설정하는 함수 - `set_race_cars(string cars): void`

   - `is_valid_car_name()` 메소드를 통해 검증과정을 거친 후 검증에 성공한 경우에만 model에 cars 값을 반영한다.

5. 이동거리(0 | 1)를 랜덤하게 리턴하는 함수 - `get_distance(): number`

6. 자동차 레이스를 1회 실행하고 그 결과를 model에 갱신하는 함수 - `race(): void`

   - 각 자동차에 대해서 `get_distance()` 리턴 값만큼 이동시킨다.
   - 변경사항을 model에 저장한다.

7. 최종 우승자를 계산하여 이를 model에 저장하는 함수 - `set_winners(Object[] race_cars): void`

8. 최종 우승자 문자열을 리턴하는 함수 - `get_winners_str(string[] winners): string`

9. 프로젝트에서 요구하는 게임 로직을 실행하는 함수 - `game()`
   - `view`를 통해 사용자로부터 `INPUT_TRY` 값과 `INPUT_CARS` 값을 입력받는다.
   - `setter` 메소드를 통해 앞서 입력받은 값들을 검증하고 갱신한다.
     - 검증 결과가 false 이면 오류를 throw 한 후 프로그램을 종료한다.
   - `view`를 통해 실행 결과 문구 출력
     ```
      실행 결과
     ```
   - 아래 과정을 `TRY`번 반복한다.
     - 자동차 경주 메소드 `race()` 실행
     - `view`를 통해 레이싱 진행 상황 출력
   - `set_winners` 메소드를 통해 최종 우승자를 model에 저장한다.
   - `view`를 통해 최종 우승자를 출력한다.

## 4️⃣ App

> MVC 를 활용하여 게임 프로젝트를 구현한다.

### Properties

- `controller`

### Functions

- game 메서드를 호출하고, 이 과정에서 발생하는 오류를 처리하는 함수 - `play()`
