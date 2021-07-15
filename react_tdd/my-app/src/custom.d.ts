/**
 * @description
 * *.d.ts 파일은 타입 정의 파일로
 * 타입스크립트가 인식하지 못하는 타입이나, 타입스크립트 내에서 사용할 타입들을 정의.
 */
declare module '*.svg' {
    import * as React from 'react'

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {title?: string}>

    const src: string
    export default src
}
