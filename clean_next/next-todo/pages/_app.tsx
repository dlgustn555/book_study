import * as React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/GlobalStyle'
import Header from '../components/Header'

/**
 * 1. 페이지들의 공통된 레이아웃
 * 2. 페이지를 탐색할 때 상태 유지
 * 3. 추가 데이터를 페이지에 주입
 * 4. 글로벌 CSS 추가 <====!!
 */
const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default app
