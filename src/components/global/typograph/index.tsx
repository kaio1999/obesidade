import React from 'react'
import { TypographText } from './styles';

interface Props {
  color: string
  fSize: string
  children: any
}

const Typograph = ({ color, fSize,children }: Props) => {
  return (
    <>
      <TypographText color={color} fSize={fSize}>
        {children}
      </TypographText>
    </>
  )
}

export default Typograph;
