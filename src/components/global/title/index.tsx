import React from 'react'
import { TitleGlobal } from './styles';

interface titleProps {
  children: any
  color: string
  fSize: number
}

const Title = ({ children, color, fSize }: titleProps) => {
  return (
    <TitleGlobal color={color} fSize={fSize}>
      {children}
    </TitleGlobal>
  )
}

export default Title;