import React from 'react'
import Header from '../components/Header'

/**
 * 1. 페이지들의 공통된 레이아웃
 * 2. 페이지를 탐색할 때 상태 유지
 * 3. 추가 데이터를 페이지에 주입
 * 4. 글로벌 CSS 추가
 */
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            margin: 0;
            font-family: 'MonteCarlo', cursive;
            font-family: 'Noto Sans KR', sans-serif;
          }
        `}
      </style>
    </>
  )
}

export default App
