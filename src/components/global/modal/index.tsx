import React from 'react'
import Image from 'next/image';
import { ContainerModal, Content } from './styles'

interface PropsModal {
  title: string;
  img: any;
  textModal: any;
}

const Modal = ({ title, img, textModal }: PropsModal) => {

  return (
    <ContainerModal>
      <Content>
        <h1>{title}</h1>
        <Image src={img} width='310px' height="210px" alt='irineu' />
        <p>{textModal}</p>
      </Content>
    </ContainerModal>
  )
}

export default Modal