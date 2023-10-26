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