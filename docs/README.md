## 요구사항 정리

- 사용자 입력
  - 자동차 이름(쉼표로 구분)
  - 시도할 횟수
- 각 차수별 실행 결과 출력
  - 0에서 9 사이의 무작위 값 추출하여 4 이상만 전진
  - 전진 결과 출력
- 우승자 출력
  - 우승자가 여러 명일 경우 쉼표로 구분

<br/>

## 클래스 구조
> 데이터의 흐름을 깔끔하게 표현하기 위해 MVC 패턴을 적용.

### Model

- Car 클래스
  - [X] 이름, 현재 위치 저장
  - [X] 이동 기능
  
- GameModel 클래스
  - [X] 게임 설정 저장(라운드 수)
  - [X] 자동차 목록을 저장
  - [X] 게임 결과 업데이트
  - [X] 우승자 구하기
  
### View

- InputView 클래스
  - [X] 게임 설정 (횟수 및 자동차 이름)을 입력
  - [X] [입력 형식 검증(이름 구분자, 길이 제한 등)](#예외-처리)


- OutputView 클래스
  - [X] 라운드 진행 상태 출력
  - [X] 우승자 출력


### Controller

- GameController 클래스
  
  - [X] 플레이어로부터 입력 받기
    - [X] 자동차 이름 <- InputView
    - [X] 시도 횟수 <- InputView
    - [X] 위를 바탕으로 GameModel에 데이터 저장
  - [X] 라운드 진행
    - [X] GameModel.playRound()
    - [X] GameModel.getWinners()
  - [X] OutputView를 통해 결과 출력

<br/>

---

## 예외 처리
1. 자동차 이름을 입력 - `InputValidator.isValidCarName(carName)`
- [X] 공백 문자가 입력됐을 때
- [X] 6자리 이상이 입력됐을 때
- [X] 문자열에 whitespace가 있을 때

2. 시도할 횟수 입력 - `InputValidator.isValidAttemptNum(attemptNum)`
- [X] 공백 문자가 입력됐을 때
- [X] 숫자가 아닌 문자가 포함되어 있을 때
- [X] 실수가 입력됐을 때
- [X] 0 이하의 정수가 입력됐을 때