
import Head from 'next/head'

import Footer from './Footer'

import CDNScript from './CDNScript'


export default function Layout({children, title, description}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
                <CDNScript/>

            </Head>

            <main>

                {children}
            </main>

            <Footer/>

            
        </div>
    )
}

Layout.defaulProps = {
    title:"Mi pagina web",
    description:"Información sobre mi",

}