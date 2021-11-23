import React from 'react'
import HeaderHome from './header'
import BodyHome from './body'
import FooterHome from './footer'
import type { NextPage } from 'next'
import Image from 'next/image';
import leftImage from '../../../public/assets/home2_08.jpg';
import background from '../../../public/assets/home2_04.jpg';
import rigthImage from '../../../public/assets/home2_02.jpg';
import Head from 'next/head'

interface props {
  data?: any
}

const Home: NextPage<props> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>{data.headTitle}</title>
        <meta name="description" content={data.desc} />
        <link rel="icon"
          type="image/png"
          href="../assets/home2_05.png" />
      </Head>
      <HeaderHome data={data} />
      <BodyHome data={data} />
      <FooterHome data={data} />
    </div>
  )
}

export default Home;
