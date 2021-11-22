import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import Home from '../components/home'
import { data } from './../../services/api/mock';

interface props {
  data: any,
}

const HomePage: NextPage<props> = ({data}) => {
  return (
    <>
    <Home data={data}/>
    </>
  )
}

export const getServerSideProps:GetServerSideProps = async () => {

  const date = data[0]

  return {
    props: {
        data: date,
    },
};
};


export default HomePage
