import React from 'react'
import Styled from 'styled-components'

interface ContainerProps {
    readonly backgroundColor: string
    readonly hoverColor: string
}
interface Props {
    readonly label: string
    readonly backgroundColor?: string
    readonly hoverColor?: string
    readonly onClick: () => void
}

const Container = Styled.div<ContainerProps>`
  text-align: center;
  background-color: ${({backgroundColor}) => backgroundColor};
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${({hoverColor}) => hoverColor};
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`

const Label = Styled.div`
  color: #FFFFFF;
  font-size: 16px;
`

export const Button = ({
    label,
    backgroundColor = '#304FFE',
    hoverColor = ' #1E40FE',
    onClick,
}: Props): React.ReactElement => {
    return (
        <Container backgroundColor={backgroundColor} hoverColor={hoverColor} onClick={onClick}>
            <Label>{label}</Label>
        </Container>
    )
}
