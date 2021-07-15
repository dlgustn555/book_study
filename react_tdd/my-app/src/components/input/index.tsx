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

export const Input = ({value, placeholder, onChange}: Props): React.ReactElement => {
    return <InputBox placeholder={placeholder} value={value} onChange={onChange} />
}
