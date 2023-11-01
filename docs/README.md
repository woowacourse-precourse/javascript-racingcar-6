# 자동차 경주 기능 구현 요구사항
개발 환경 : node 18.17.1<br/>
작성자: 유 비

## play(): 레이싱 게임 시작
- 호출 시 자동차 경주 게임 실행

## getRacer(): 경주할 자동차 이름 습득
- 사용자로부터 경주할 자동차 이름을 받아 String 배열 형태로 반환
- Console.readLineAsync() 활용
- 각 자동차 이름이 5자 이상일 경우, Error 반환

## doRace(racers, times): 자동차 경주 진행
- 자동차(racers)와 시도할 횟수(times)를 입력받아 경주 시작
- 한 번 시도할 때마다 현재 거리를 출력
- 시도 횟수만큼 시도 후 이동 거리를 number 배열 형태로 반환

## getLength(length): 자동차별 1회 시도 진행
- 자동차의 현재 이동 거리(length)를 입력받아 1회 시도한 결과를 반환
- 무작위로 생성한 값이 4 이상일 경우 이동 거리 1 증가, 4 미만일 경우 제자리로 반환
- Random.pickNumberInRange() 활용

## printCurrentRace(racers, length): 현재 진행 상황 출력
- 자동차(racers)와 차별 이동 거리(length)를 받아 결과 출력
- 자동차별 주행 거리를 출력한다.

## EndRace(racers, length): 경주 최종 결과 출력
- 자동차(racers)와 이동 거리(length)를 받아 최종 우승자 출력
- 우승자가 여러 명일 경우, 쉼표(,)를 이용하여 구분
- Console.print() 활용

<br/>

# 10.28 코드 수정

## Car 클래스 생성
- 자동차 경주에 참여하는, 이름(name)과 현재 이동 거리(length)를 가지는 자동차 클래스를 생성
- getName(), getLength() : 각각 name, length 반환
- tryMoveForward() : Random.pickNumberInRange()를 이용하여 앞으로 이동
- printCurrentPosition() : "name : length" 형식으로 현재 위치를 출력

## getLength(), printCurrentRace() 함수 삭제
- 해당 함수의 기능이 Car 클래스 내부에 추가되었으므로 해당 함수 삭제

<br/>

# 11.1 코드 수정

## Race 클래스 생성
- 자동차 경주를 의미하는 Race 클래스 생성
- getRacers() : 경주에 참여하는 자동차 이름을 입력받는 함수
- getTimes() : 경주에서 전진을 시도하는 횟수를 입력받는 함수
- doRace() : 경주를 진행하고, 경주 결과를 출력하는 함수
- doTry() : 전진을 1회 실행하고, 현재 결과를 출력하는 함수

## getRacer(), doRace(), EndRace() 함수 삭제
- 해당 함수의 기능이 Race 클래스 내에 포함되므로 App 클래스의 해당 함수 삭제

## Car 클래스 함수 수정
- tryMoveForward() 함수에 현재 위치 출력문 포함
- printCurrentPosition() 함수 삭제

