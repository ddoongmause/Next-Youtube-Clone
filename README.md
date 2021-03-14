# 코딩 앙마님꺼 클론 코딩
https://www.youtube.com/watch?v=Ujjdn2wMIew&t=190s

### Install 
```
1. npx create-next-app
## https://react.semantic-ui.com/usage 시맨틱 설치
2. npm install semantic-ui-react semantic-ui-css
3. _app.js에 import 'semantic-ui-css/semantic.min.css'
4. npm i axios

```
### 환경변수 설정
```
//node js

process.env.변수명

//browser

process.env.NEXT_PUBLIC_변수명
```

### Pre-rendering(사전 렌더링)
- 기본적으로 모든 페이지 pre-render
- 사전에 HTML 파일들을 만든다는 의미
- 퍼포먼스 향상, SEO
- Static Generation: 정적 생성
- Server-side Rendering: 서버 사이드 렌더링

### Static Generation: 정적 생성(미리 만들어 두는 경우)
- 마케팅 페이지
- 블로그 게시물
- 제품 목록
- 도움말, 문서

### Server-side Rendering
- 항상 최신 상태 유지
- 관리자 페이지
- 분석 차트