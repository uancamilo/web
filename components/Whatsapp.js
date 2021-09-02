import { FaWhatsapp } from 'react-icons/fa'

import styles from '../styles/Whatsapp.module.css'

import Link from 'next/link'


export default function Whatsapp() {
    return (

        <div className={styles.whatsapp}>

            <Link
                href="https://api.whatsapp.com/send?phone=593995456269&text=Hola!"
                target="_blank"                 
                passHref
            >
                <a
                    href="https://api.whatsapp.com/send?phone=593995456269&text=Hola!"
                >           
                

                    <FaWhatsapp className={styles.iconWhatsapp}/>
                </a>

    
            </Link> 
        </div>
            
    )

}
