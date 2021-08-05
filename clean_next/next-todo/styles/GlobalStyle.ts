import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

// css 함수를 이용하면, 스타일드 컴포넌트에서 사용할 css 값을 변수로 만들어 사용할 수 있다.
const globalStyle = css`
    ${reset}
    * {
        box-sizing: border-box
    }
    body {
            margin: 0;
            font-family: 'MonteCarlo', cursive;
            font-family: 'Noto Sans KR', sans-serif;
          }
`
const GlobalStyle = createGlobalStyle`
    ${globalStyle}
`

export default GlobalStyle
