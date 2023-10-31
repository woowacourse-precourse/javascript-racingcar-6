- App (게임)

  - property
    - status: 게임의 상태 (idle | setting | start | finish)
      - idle: 게임이 시작되기 전 상태
      - setting: 자동차 경주를 위한 옵션들을 사용자에게 받는 상태
      - start: 자동차 경주가 시작된 상태
      - finish: 자동차 경주가 끝난 상태
    - cars: 자동차(Car)의 배열
    - round: 자동차가 움직일 수 있는 회차수
  - method

    - transition: 게임의 status를 변경하고 변경된 status에 해당하는 로직을 실행한다.
    - play: App의 status를 setting으로 변경한다.

  - status 별 로직
    - idle: 별로도 실행시킬 로직 X
    - setting
      - 경주할 자동차(Car) 의 이름(name)과 자동차의 이동 횟수를 차례로 입력받는다.
      - 사용자가 잘못된 값을 입력했을 경우 throw 문을 사용하여 "[ERROR]"로 시작하는 메시지를 가지는 예외를 발생시켜 App을 종료시킨다.
      - Car를 생성하여 cars를 세팅한다
      - 자동차의 이동횟수를 round로 세팅한다.
      - setting 로직이 끝났을 경우 마지막에 app의 상태를 start로 변경한다.
    - start
      - start 상태 진입시, "실행 결과" 라는 메시지를 출력한다
      - round 수만큼 자동차들을 전진시키고, 각 차수마다 게임 진행 상황을 출력한다
        - 게임 진행상황 탬플릿
          ```
          pobi : --
          woni : -
          jun : --
          ```
      - 모든 차수가 끝나면 App의 status를 finish로 변경한다.
    - finish 상태
      - 최종 우승자를 출력한다

- Car (자동차)

  - propery

    - name: 자동차 이름
    - mileage: 주행거리 (default: 0)

  - method

    - isBreakdown: 차량 고장 여부를 반환한다.
      - 0에서 9까지의 정수 중 하나를 랜덤으로 뽑아 값이 3 이하일 경우 true 아니면 false를 반환한다.
    - move: 차량 고장난 경우가 아니라면 mileage를 +1 한다.
      - isBreakdown 메서드로 조건 검사를 하여 차량이 고장나지 않은 경우 mileage 프로퍼티를 1 증가시킨다.
    - getName: 자동차 이름을 반환한다.
    - getMileage: 자동차 주행거리를 반환한다.

  - Car는 생성자로 name을 받는다
