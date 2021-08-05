import React from 'react'
import Document, { Html, Main, NextScript, Head } from 'next/document'

/**
 * 일반적으로 응용 프로그램 <html> 및 <body> 태그를 보강하는데 사용
 * 도큐먼트를 이용하여 <title>, <description>, <meta> 등
 * 프로젝트의 정보를 제공하는 HTML 코드를 작성할 수 있고,
 * 폰트나 외부 api, cdn 등을 불러오도록 할 수 있음
 * CSS-in-JS의 서버 사이드 렌더링을 위한 설정을 할때 사용
 */
class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta name="title" content="깃허브 레파지토리" />
          <meta name="description" content="깃허브 레파지토리 리스트입니다." />
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap" rel="stylesheet" /> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=MonteCarlo&family=Noto+Sans+KR:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
