# 📃 [우아한테크코스 6기] 2주차 미션: '자동차 경주' 구현 기능 목록

## ✏ 자동차 경주 정보 입력 기능

1. App을 play하면, 사용자는 경주할 자동차 이름을 입력

   - 입력 요청 문구

   ```
   경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
   ```

   - 잘못된 입력일 경우, '**Invalid racing car input**'을 포함한 에러 메시지를 출력하고 App을 종료

     - 경주할 자동차 이름을 하나 이하 입력한 경우:

     ```
     [ERROR] Invalid racing car input: 경주할 자동차 이름이 하나 이하입니다. 둘 이상의 경주할 자동차 이름을 입력하세요.
     ```

     - 경주할 자동차 이름 중 중복이 있는 경우:

     ```
     [ERROR] Invalid racing car input: 경주할 자동차 이름이 중복되었습니다. 서로 다른 이름을 입력하세요.
     ```

     - 쉼표를 연속으로 입력한 경우:

     ```
     [ERROR] Invalid racing car input: 쉼표를 연속하여 입력하였습니다. 쉼표를 연속하여 입력하지 마세요.
     ```

     - 경주할 자동차 이름 중 적절하지 않은 길이가 포함된 경우:

     ```
     [ERROR] Invalid racing car input: 경주할 자동차 이름의 길이가 적절하지 않습니다. 경주할 자동차 이름의 길이는 1 이상, 5 이하여야 합니다.
     ```

2. 경주할 자동차를 입력한 후, 사용자는 몇 번의 이동을 시도할 것인지 입력

   - 입력 요청 문구

   ```
   시도할 횟수는 몇 회인가요?
   ```

   - 잘못된 입력일 경우, '**Invalid number of attemps input**'을 포함한 에러 메시지를 출력하고 App을 종료

     - 아무것도 입력하지 않은 경우:

     ```
     [ERROR] Invalid number of attemps input: 시도할 횟수를 입력하지 않았습니다. 시도할 횟수를 입력하세요.
     ```

     - 0을 입력한 경우:

     ```
     [ERROR] Invalid number of attemps input: 시도할 횟수에 0을 입력하였습니다. 시도할 횟수는 1이상 입력하세요.
     ```

     - 음수를 입력한 경우:

     ```
     [ERROR] Invalid number of attemps input: 시도할 횟수에 음수를 입력하였습니다. 시도할 횟수는 1이상의 수를 입력하세요.
     ```

     - 문자를 포함하여 입력한 경우:

     ```
     [ERROR] Invalid number of attemps input: 시도할 횟수에 문자를 입력하였습니다. 시도할 횟수는 숫자만 입력하세요.
     ```

## 🚥 자동차 경주 기능

1. 경주할 자동차들 입력값(racingCarsInput)과 시도 횟수 입력값(attempsInput)으로 경주할 자동차들(racingCars), 시도 횟수(attemps) 필드를 가진 자동차 경주 객체 생성

   - racingCars 필드는 racingCars 매개변수를 ','를 기준으로 나누고, 경주할 자동차 객체(RacingCar) 클래스의 인스턴스를 값으로 변환하여 배열로 저장
     - RacingCar 클래스는 이름(name), 위치(position) 필드를 가지고, 이동(move) 함수를 가질 것
       - name: string
       - position: number
       - move: 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우 position에 1을 더함
   - attemps 필드는 number 타입의 원시값으로 저장

2. 자동차 경주 객체의 race 기능을 함수로 구현

   - racingCars 배열의 인덱스에 저장된 값(RacingCar 클래스의 인스턴스)마다 move 함수를 실행
   - attemps 필드의 횟수만큼 반복
   - 반복이 완료된 후 racingCars 배열을 반환

## 🖨 경주 결과 출력 기능

1. 자동차 경주가 완료된 후 반환된 결과값을 기준으로 각 인덱스에 저장된 RacingCar 인스턴스의 position 중 가장 큰 수를 가진 인스턴스의 name을 출력

   - 출력 문구 예시

   ```javascript
   최종 우승자 : ${RacingCar.name}
   ```

   - 최종 우승자가 여러 명일 경우 모두 출력

   ```javascript
   최종 우승자 : ${RacingCar.name1}, ${RacingCar.name2}
   ```
