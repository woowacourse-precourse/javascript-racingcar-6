## 기능명세서

### 게임 시작
- [v] 사용자는 경주할 자동차 이름을 n개 입력할 수 있다. 
- [v] 사용자는 5자가 넘는 이름을 입력할 수 없다.
- [v] 프로그램은 사용자가 입력한 자동차 이름을 , 기준으로 구분하여 저장한다.
- [v] 사용자는 자동차를 몇 번 이동할 것인지 입력할 수 있다.
- [v] 프로그램은 사용자가 잘못된 값을 입력한 경우, throw 문을 사용해 [ERROR] 메시지를 가지는 예외를 발생시킨 후 앱을 종료한다.

### 게임 진행
- [v] n대의 자동차는 각각 주어진 횟수만큼 전진하거나 멈춘다.
- [v] 사용자가 입력한 횟수만큼 무작위 값을 구하고, 그 값이 4 이상일 때에만 전진한다.
- [v] 차수마다 자동차 이름과 실행결과를 출력한다.

### 게임 완료
- [v] 게임 완료 후 우승자를 알려준다.
- [v] 게임 완료 후 우승자가 여러 명일 때 , 으로 구분한다.