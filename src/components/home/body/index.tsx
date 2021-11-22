import { BoxPayment, ContainerBody, Content } from './styles'

import Image from 'next/image';
import Modal from '../../global/modal'
import type { NextPage } from 'next'
import { PlayFill } from 'styled-icons/bootstrap'
import React from 'react'
import leftImage from '../../../../public/assets/home2_16.jpg';
import phone from '../../../../public/assets/home2_10.png';
import rigthImage from '../../../../public/assets/home2_13.jpg';

const BodyHome = () => {
  return (
    <ContainerBody>
      <Modal title="O QUE É BALÃO INTRAGÁSTRICO" img={leftImage} textModal="O balão intragástrico é uma alternativa não cirúrgica para o tratamento de obesidade,além de ser um dispositivo seguro e eficaz para redução de peso. Saiba Mais" />
      <Content>
        <div className='divFirst'>
          <div className='img'>
            <Image src={phone} />
          </div>
          <h2 className="titlePhone">CENTRAL DE<br />AGENDAMENTO</h2>
        </div>
        <div className='divSecond'>
          <p>(11) 0000-0000</p>
          <p>contato@tratamentoparaobesidade.com.br</p>
        </div>
        <div className='divThree'>
          <PlayFill className="playIcon" />
          <p className="avaibleParagraph">AVALIAÇÃO GRATUITA</p>
        </div>
        <BoxPayment>
          <h2>
            PLANOS DE PAGAMENTO
          </h2>
          <h1>
            EM ATÉ 36X
          </h1>
        </BoxPayment>
      </Content>
      <Modal title="O QUE É BANDA GÁSTRICA AJUSTÁVEL ?" img={rigthImage} textModal="Método que consiste na colocação de uma prótese de silicone em forma de anel ao redor da porção superior do estômago. Saiba Mais" />
    </ContainerBody>
  )
}

export default BodyHome
