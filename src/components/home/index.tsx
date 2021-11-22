import React from 'react'
import HeaderHome from './header'
import BodyHome from './body'
import type { NextPage } from 'next'
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
      <HeaderHome data={data}/>
      <BodyHome />
    </div>
  )
}

export default Home;
