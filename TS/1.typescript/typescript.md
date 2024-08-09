## Typescript
- 자바스크립트의 슈퍼셋 오픈소스 프로그래밍 언어
- 마이크로소프트에서 개발 및 유지보수를 담당하며 엄격한 문법을 지원
- 컴파일러 제공으로 정적 타입을 지원하며 프로그래밍의 안전성을 높여줌

### 개발환경 구축
- TypeScript는 브라우저에서 동작하지 않으므로 TS를 JS로 변환시켜주는 컴파일러(트랜스파일러)가 필요

```bash
npm install -g typescript
tsc --version
```

- 파일의 확장자명을 .ts로 작성
- .ts 파일을 .js 파일로 트랜스파일링 후 실행

```bash
tsc 파일명.ts
mode 파일명.js
```

- 단순히 tsc로 트랜스파일링 시 ES5로 변환
- TypeScript 컴파일 설정을 위해서 tsconfig.json 사용

```bash
tsc --init
```

- 'TypeScript를 바로 실행'하기 위해서 'ts-node 패키지' 사용

```bash
npm install -g ts-node
ts-node 파일명.ts
```