# 기능 정의

## 0. play

- 게임을 위한 주요 메소드를 순차적으로 실행
- 레이싱 게임 설정, 경기 시작, 경기 종료
- 각 과정에서 에러 발생 시 false 반환
- 해당 과정을 검사하여 false 반환 시, try...catch() 에러 메시지 반환

## 1. 레이싱 게임 설정

- (1) 이름 부여
  : 경기 참여할 자동차의 이름을 입력받음

- (2) 이름 검사
  : 1-(1)의 입력값 검사
  : 각 자동차 이름은 5자 이하, 쉼표를 기준으로 구분

- (3) 경기 중 이동 횟수 설정
  : 1게임 내에서 몇 번의 "이동"을 할 건지 설정
  : 이동 횟수는 1이상 10이하로 제한

- (4) 메소드
  setGameOfUser():{carList: string[], gameNumber:number} | false

## 2. 경기 시작

- (1) 세팅된 이동 횟수 동안 n대의 자동차는 전진 or 이동

- (2) 전진 후 결과 및 이름 출력

- (3) 메소드
  interface InterfaceCar {
  name:string,
  location: number
  }

  startGame(
  carList: string[],
  gameNumber: number
  ):InterfaceCar[]

## 3. 경기 종료

- (1) 우승자 출력, 공동 우승 가능

- (0) 메소드
  endGame(InterfaceCar[]):void
