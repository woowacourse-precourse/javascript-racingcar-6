# 미션 - 자동차 경주

<br>

## 목차

1. [동작 방식](#1-동작-방식)

2. [설치법](#2-설치법)

3. [기능 목록](#3-기능-목록)

4. [동작 예시](#4-동작-예시)

<br><br><br><br><br>

## 1. 동작 방식

- 경주를 진행할 자동차 이름 입력

- 각 자동차는 "," 로 구분

- 경주가 진행될 동안 게임을 반복할 횟수 입력

- 경주가 끝난 후 가장 많이 이동한 모든 자동차를 출력

  <br><br><br><br><br><br>

## 2. 설치법

- 아래 명령어로 로컬 경로에 폴더 복제

```
git clone https://github.com/Songhyunseop/javascript-baseball-6.git
```

<br><br>

- IDE 에서 터미널을 열고 프로젝트 폴더 위치에서 아래 명령어로 패키지 설치

```
npm install
```

<br><br><br><br><br><br>

## 3. 기능 목록

📗1. 경주할 각 자동차 이름 입력<br>
📗2. 각 자동차 이름에 기본 카운트 값 0을 배정

📗3. 사용자는 몇 번의 이동을 시도할 것인지 입력<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📕 잘못된 값을 입력할 경우 Error로 예외처리 후 실행 종료

📗4. 자동차 전진 여부 계산<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📗4-1. 0에서 9까지 랜덤 수를 생성<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📗4-2. 입력된 자동차 순서대로 랜덤으로 생성된 수를 배정<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📕랜덤 수 값이 4미만일 경우 해당 자동차 카운트 수 유지<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📕랜덤 수 값이 4이상일 경우 해당 수가 배정되는 자동차에 카운트 수 +<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📗4-3. 배정된 각 자동차의 카운트 계산결과를 출력

📗 사용자가 입력한 시도횟수 만큼 4-1 ~ 3 의 과정을 반복

📗 시도 횟수만큼 반복실행 후 각 자동차의 카운트 수를 비교하여 가장 높은 카운트의 차량을 우승자로 출력
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📕 최고 카운트 차량이 2 이상 겹칠 경우 해당 차량들을 모두 우승자로 출력

<br><br><br><br><br><br>

## 4. 동작 예시

- 게임을 진행할 자동차 입력 시<br>

![자동차입력](https://github.com/woowacourse-precourse/javascript-racingcar-6/assets/124991681/edaba03e-9d87-49d7-ac7d-f6deda435621)

<br><br><br><br>

- 게임 진행 횟수 입력 및 결과 출력 시<br>

![경주횟수 입력](https://github.com/woowacourse-precourse/javascript-racingcar-6/assets/124991681/b6d52ea3-5d3b-4606-80ca-33f1dc4c6ea0)
