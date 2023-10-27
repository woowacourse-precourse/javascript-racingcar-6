## TodoList
- node 버전 맞추기
  - [ ] `pacakge.json`에 다음과 같은 코드를 추가해준다.
  ```js
    "engines": {
    "npm": ">=9.6.7",
    "node": ">=18.17.1"
  }
  ```
- 컨벤션 작성
  - [ ] `docs`폴더 내부에 `Convention.md` 파일을 생성해준다.
  - [ ] 코드 컨벤션, 커밋컨벤션, 브렌치 컨번션을 관련 내용을 작성한다.
- `eslint`, `prettier` 세팅
  - [ ] EOL은 `auto`로 설정한다.
  - [ ] indent는 2까지만 허용해준다.
  ```json
  // eslintrc에 rules에 아래의 코드를 추가해준다.
  // indent 조건을 지키기 위해 다음 라인을 추가
  "max-depth": ["error", 2],
  // Console.log 코드제거
  "no-console": "warn
  ```
  - [ ] 이외에 커스텀으로 eslint를 설정해준다.
  - [ ] prettier 설정을 해준다.
- 폴더 구조
  - [ ] src > model, controller, view 를 만들어준다.
  - [ ] src > constants, utils도 만들어준다.
- 기능 목록 작성
 - 기능 목록을 커밋 단위를 고려해 리스를 정리한다.
 - 목록은 docs 폴더 `READ.ME`에 정리한다.
- 기능 목록에 맞게 커밋하며 코드를 구현한다.
  - [ ] 모든 컨벤션을 준수한다.