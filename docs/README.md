## mvc패턴을 활용한 기능 그룹

- Model

  - [ ] 사용자가 입력한 자동차

- View

  - [ ] 사용자가 입력한 자동차 이름 및 메세지 출력
    1. `Console.readLineAsync` API 메서드 사용
  - [ ] 사용자가 입력한 시도할 횟수 및 메세지 출력
    1. `Console.readLineAsync` API 메서드 사용
  - [ ] 사용자가 입력한 시도할 횟수에 대한 차수별 실행 결과 출력
    1. `Console.print` API 메서드 사용
    2. 1번 실행한 경우, `자동차 이름 : - `
  - [ ] 최종 우승자 및 메세지 출력
    1. `Console.print` API 메서드 사용
    2. 1명일 경우 `최종 우승자 : 자동차 이름`
    3. 2명 이상일 경우 `최종 우승자 : 자동차 이름, 자동차 이름`

- Controllers

  - [ ] 컴퓨터의 숫자 생성
  - [ ] 컴퓨터가 생성한 숫자가 전진 가능한지 평가
    1. `4` 이상일 경우 `-`

- utils

  - [ ] 랜덤으로 `0`에서 `9`사이 무작위 값 생성
    1. `Random.pickNumberInRange()` 메서드 사용
  - [ ] 사용자가 입력한 시도할 횟수가 입력 형식에 맞는지 검사
    1. `1s`와 같이 중간에 문자열이 포함되어있는지 확인
    2. `0123`과 같이 `0`으로 시작하는지 확인
    3. `0`이 아닌지 확인
    4. 공백이 아닌지 확인
  - [ ] 사용자가 입력한 자동차 이름이 입력 형식에 맞는지 검사
    1. 여러개일 경우 `,`로 구분되었는지 검사
    2. 이름 하나당 5자 이하인지 검사

- constants
  - [ ] 출력에 사용되는 메세지들
  - [ ] 입력 형식에 대한 조건들

## 코드 스타일 및 브랜치 전략

- 코드 스타일

  - <details>
        <summary>eslint 사용</summary>

        `npm init @eslint/config`로 eslint 설치

        .eslintrc.json 파일에서 Airbnb 스타일로 코드를 정의한다.

    </details>

  - <details>
        <summary>Airbnb 규칙 사용</summary>

        `npm i -D prettier eslint-config-prettier` 명령으로 prettier과 설정이 겹치지 않게 extension을 설치한다.

        .eslintrc.json의 `extends: ['airbnb-base', 'prettier']` 를 추가한다.

    </details>

  - <details>
        <summary>prettier 사용</summary>

        `npm i -D prettier eslint-config-prettier` 로 prettier를 설치한다.

        .prettierrc.json 파일을 생성한 후 prettier 규칙을 추가한다.

    </details>

- 브랜치 전략
  - Git Flow 전략을 기본으로 사용하되 아래의 사항을 지킨다.
  - 최종 브랜치는 'pongpongie' 이다.
  - 기능 그룹 단위로 'feature/{feature}' 브랜치에서 작업한다.
  - 특정 기능 그룹에서 merge를 통해 다른 기능 그룹의 코드를 가져올 수 있다.
  - 특정 기능 그룹이 완성되면 'develop' 브랜치에 병합한다.
  - 애플리케이션이 완성되면 'develop' 브랜치를 최종 브랜치에 병합한다.
