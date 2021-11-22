import styled from 'styled-components'

interface Props {
  fSize: number;
}

export const TitleGlobal = styled.h1<Props>`
  color: ${({color}) => color && `${color}`};
  font-size: ${({fSize}) => fSize && `${fSize}px`};
`