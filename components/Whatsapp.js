import { FaWhatsapp } from 'react-icons/fa'

import styles from '../styles/Whatsapp.module.css'

export default function Whatsapp() {
    return (

        <div className={styles.whatsapp}>

            <a 
                href="https://api.whatsapp.com/send?phone=593995456269&text=Hola!"
                target="_blank"
            >    

            <FaWhatsapp className={styles.iconWhatsapp}/>
    
 
            </a>

        </div>
            
    )

}
