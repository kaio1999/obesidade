import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import Home from '../components/home'
import { data } from './../../services/api/mock';
import { createGlobalStyle } from 'styled-components';

interface props {
  data: any,
}

const GlobalStyleLeft = createGlobalStyle`
  body {
    background: 
    url('/assets/home2_04.jpg') no-repeat fixed top left / 50% 50%,
    url('/assets/home2_02.jpg') no-repeat fixed top right / 50% 50%,
    url('/assets/home2_08.jpg') no-repeat fixed bottom left / 50% 60%,
    url('/assets/home2_04.jpg') no-repeat fixed bottom right / 50% 50%;
  }
`;

const HomePage: NextPage<props> = ({ data }) => {
  return (
    <>
      <GlobalStyleLeft />
      <Home data={data} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const date = data[0]

  return {
    props: {
      data: date,
    },
  };
};


export default HomePage
