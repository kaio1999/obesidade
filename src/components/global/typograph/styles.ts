import styled from 'styled-components'

interface props {
  fSize: string
}

export const TypographText = styled.p<props>`
  color: ${({color}) => color && `${color}`};
  font-size: ${({fSize}) => fSize && `${fSize}`};
`