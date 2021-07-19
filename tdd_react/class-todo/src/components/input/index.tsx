import React from 'react'
import Styled from 'styled-components'

const InputBox = Styled.input`
    flex: 1;
    font-size: 16px;
    padding: 10px 10px;
    border-radius: 8px;
    border: 1px solid #BDBDBD;
    outline: none;
`

interface Props {
    readonly value?: string
    readonly placeholder?: string
    readonly onChange?: (Event: React.ChangeEvent<HTMLInputElement>) => void
}

export class Input extends React.Component<Props> {
    public render() {
        const {value, placeholder, onChange} = this.props
        return <InputBox placeholder={placeholder} value={value} onChange={onChange} />
    }
}
