## 기능 요구 사항

입력값 받기: 자동차에 이름
입력 제한 조건: 이름은 쉼표 기준으로 구분, 5자 이하로 제한
( 잘못된 값 입력할 경우 throw 문 통해 에러메시지 보내기, 애플리케이션 종료하기 )

입력값 받기: 이동 횟수
입력 제한 조건: 숫자
( 잘못된 값 입력할 경우 throw 문 통해 에러메시지 보내기, 애플리케이션 종료하기 )

전진 : 0-9 사이 무작위 값 중 4 이상일 경우 전진

출력 : 각 차수별 실행결과 출력

출력 : 우승자 출력, 한명 이상 우승 가능, 쉼표를 통해 구분

## 프로그래밍 요구 사항

Node.js 18.17.1 정상 작동
App.js play 메소드로 실행 가능할 수 있어야함
프로그램 종료 시 process.exit() 호출하지 않기
패키지 이름을 수정하거나 이동하지 않기

JavaScript 코드 컨벤션 (https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript) 을 지키면서 프로그래밍 한다 => Esplint 설치하기

- [] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
- [] Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
- [] 테스트 도구 사용법이 익숙하지 않다면 **tests**/StringTest.js를 참고하여 학습한 후 테스트를 구현한다.
- [x] @woowacourse/mission-utils에서 제공하는 Random 및 Console API를 사용하여 구현해야 한다.
- [] Random 값 추출은 Random.pickNumberInRange()를 활용한다.
- [x] 사용자의 값을 입력 받고 출력하기 위해서는 Console.readLineAsync, Console.print를 활용한다.

## 과제 진행 요구 사항

- [x] 기능목록 만들기
- [x] 기능 단위로 커밋하기

미션은 javascript-racingcar-6 저장소를 Fork & Clone해 시작한다.
기능을 구현하기 전 docs/README.md에 구현할 기능 목록을 정리해 추가한다.
Git의 커밋 단위는 앞 단계에서 docs/README.md에 정리한 기능 목록 단위로 추가한다.
커밋 메시지 컨벤션 가이드를 참고해 커밋 메시지를 작성한다.

## 0점 방지 체크 리스트

출력값 형식 지키기
npm test 통과하기

## 미션 제출 방법

- 프리코스 과제 가이드
  ( https://github.com/woowacourse/woowacourse-docs/tree/main/precourse )

1. 내 계정으로 fork
2. 컴퓨터로 clone
3. 브랜치 생성
4. VSC 로 가져오기
5. 기능 구현
6. 구현한 기능에 대해 add, commit 진행
7. 내 원격 저장소에 해당 기능 브랜치에 push 하기
8. woowacourse 에 pull request 보내기
9. 지원 플랫폼에 지원하고 감상문 쓰기 ( https://apply.techcourse.co.kr/ )
10. 예제 테스트 진행하기
