# Design System Practice

이 프로젝트는 다양한 플랫폼(Android, iOS, Web 등)에서 사용할 수 있는 디자인 토큰을 관리하고, Style Dictionary를 활용해 여러 포맷으로 변환하는 실습용 디자인 시스템 저장소입니다.

## 주요 특징

- **Style Dictionary** 기반의 디자인 토큰 관리
- Android, iOS, CSS, SCSS, JS, Tailwind 등 다양한 플랫폼 지원
- Storybook을 통한 토큰 시각화(예: Colors, Typography)
- 확장 가능한 구조

## 폴더 구조

```
design-system-practice/
├── design-token/      # 각 플랫폼별 변환된 디자인 토큰
│   ├── android/
│   ├── css/
│   ├── ios-swift/
│   ├── js/
│   ├── scss/
│   └── tailwind/
├── scripts/           # 토큰 변환 및 스토리 생성 스크립트
├── stories/           # Storybook 스토리 (예: Colors, Typography)
├── tokens/            # 원본 디자인 토큰(JSON)
├── package.json
└── README.md
```

## 설치 및 사용법

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **디자인 토큰 빌드**
   ```bash
   npx style-dictionary build
   ```
   - `design-token/` 폴더에 각 플랫폼별 토큰 파일이 생성됩니다.

3. **Storybook 실행 (옵션)**
   - Storybook 설정이 되어 있다면, 아래 명령어로 토큰을 시각화할 수 있습니다.
   ```bash
   npm run storybook
   ```

## 디자인 토큰 추가/수정 방법

- `tokens/global.json` 파일에서 토큰을 추가하거나 수정하세요.
- 변경 후 `npx style-dictionary build` 명령어로 변환 파일을 갱신하세요.

## 기여 방법

1. 이슈 또는 PR을 통해 개선 사항을 제안해 주세요.
2. 새로운 플랫폼 지원, 토큰 추가, 스토리북 스토리 추가 등 다양한 기여를 환영합니다.

## 참고

- [Style Dictionary 공식 문서](https://amzn.github.io/style-dictionary/#/)
- 디자인 시스템 및 토큰 관리에 대한 더 많은 정보는 위 공식 문서를 참고하세요.
