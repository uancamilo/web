import Head from 'next/head'
import Intro from '../components/Intro'

import Cards from '../components/Cards'

import Whatsapp from '../components/Whatsapp'
// import styles from '../styles/Home.module.css'

import Layout from '../components/Layout'
import Skills from '../components/Skills'

export default function Home() {
  return (
      <Layout>
        <Head>
          <title>Juan Camilo Serna | Ventas por internet</title>
          <meta name="description" content="Creador de contenido para la web" />
          <link rel="icon" href="/favicon.ico" />

        </Head>

        <Intro/>
        
        <Whatsapp/>

        <Cards/>

        <Skills/>
          
      </Layout>
  )
};