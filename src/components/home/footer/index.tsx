import React from 'react';
import type { NextPage } from 'next'
import { Container, Content } from './styles'
import { Copyright } from 'styled-icons/boxicons-regular'

interface props {
    data?: any
}

const FooterHome: NextPage<props> = ({ data }) => {
    return (
        <Container>
            <p>TRATAMENTOS PARA OBESIDADE <Copyright /> 2012 - Todos os direitos reservados</p>
        </Container>
    );
}

export default FooterHome;