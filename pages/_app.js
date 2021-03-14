import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Footer from '../src/component/Footer'
import Top from '../src/component/Top'

function MyApp({ Component, pageProps }) {
  return (
  <div style={{width: 1000, margin: '0 auto'}}>
    <Top/>
    <Component {...pageProps} />
    <Footer/>
  </div>
  )
}

export default MyApp
/**
 * 페이지 전환시 레리아웃을 유지할 수 있음
 * 페이지 전환시 상태값을 유지할 수 있음
 * componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있음
 * 글로벌 CSS를 이곳에 선언
 */