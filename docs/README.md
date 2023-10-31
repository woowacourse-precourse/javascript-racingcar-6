# 2주차 미션 - ⚾︎ 자동차 경주

## ✏️ 구현 기능

## 📌 controller

Model과 View 사이 위치하여, 게임의 전반적인 동작 관리

- 게임 시작
    - 자동차 이름, round 횟수 입력 받기
    - Game 인스턴스에 저장
- 게임 진행(n)
    - 자동차 이동
    - round별 결과 출력
- 게임 종료
    - winner 계산
    - winner 출력

## 📌 model

- `Game`
    - `Car` 배열, round 횟수 저장
    - `Car` 이동
    - winner 계산 및 출력
- `Car`
    - name, position 저장
    - 조건에 따른 position 변경 기능

## 📌 view

- 사용자 입력
    - 사용자 입력(자동차 이름, round 횟수)
- 사용자 출력
    - round 별 결과
    - 최종 승리자 결과

## 📌 constant

미리 정의해놓은 상수값

- 입, 출력 메시지
- 게임에 필요한 정보