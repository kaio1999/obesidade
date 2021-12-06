import { BoxPayment, ContainerBody, Content, ModalLocation, ModalForm, DivContent, Container } from './styles'
import Image from 'next/image';
import Modal from '../../global/modal'
import type { NextPage } from 'next'
import { PlayFill } from 'styled-icons/bootstrap'
import React, { useState } from 'react'
import leftImage from '../../../../public/assets/home2_16.jpg';
import phone from '../../../../public/assets/home2_10.png';
import country from '../../../../public/assets/home2_22.png';
import rigthImage from '../../../../public/assets/home2_13.jpg';
import { useFormAuth } from '../../../../providers/auth';
import axios from 'axios';

interface Props {
  data?: any
  event: any
}

const BodyHome: NextPage<Props> = ({ data, event }) => {

  const {
    formSend,
    setName,
    setEmail,
    setPhone,
    setMessage,
    error
  }: any = useFormAuth()

  const setErrou = true;

  return (
    <>
      <ContainerBody>

        <Modal title="O QUE É BALÃO INTRAGÁSTRICO" img={leftImage} textModal="O balão intragástrico é uma alternativa não cirúrgica para o tratamento de obesidade,além de ser um dispositivo seguro e eficaz para redução de peso. Saiba Mais" />
        <Content>
          <div className='divFirst'>
            <div className='img'>
              <Image src={phone} alt='phone' />
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
      <DivContent>
        <ModalLocation>
          <div>
            <div className='divTitle'>
              <PlayFill className="playIcon" />
              <h1>LOCAIS DE ATENDIMENTO</h1>
            </div>
            {data.locations.map((item: any) => {
              return (
                <p key={item}>{item}</p>
              )
            })}
            <h2>Confira nossos endereços<br />e Agende sua Avaliação</h2>
          </div>
          <div className='countryDiv'>
            <Image src={country} alt='Pais' />
          </div>
        </ModalLocation>
        <ModalForm>
          <div className='divTitle'>
            <PlayFill className="playIcon" />
            <h1>CONTATO</h1>
          </div>
          <Container>
            <div className='divInputs'>
              <div>
                <label>Nome:</label>
                <input type='text' required onChange={(e) => setName(e.target.value)} />
                {error && <span className='error'></span>}
              </div>
              <div>
                <label>Email:</label>
                <input type='email' required onChange={(e) => setEmail(e.target.value)} />
                {error && <span className='error'></span>}
              </div>
              <div>
                <label>Telefone:</label>
                <input type='number' required onChange={(e) => setPhone(e.target.value)} />
                {error && <span className='error'></span>}
              </div>
            </div>
            <div className='divMessage'>
              <label>Mensagens:</label>
              <textarea name='Mensagens' required id='Mensagens' onChange={(e) => setMessage(e.target.value)} />
              {error && <span className='error'></span>}
              <button type='submit' onClick={() => formSend()}>Enviar</button>
            </div>
          </Container>
        </ModalForm>
      </DivContent>
    </>
  )
}

export default BodyHome
