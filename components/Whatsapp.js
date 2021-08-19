import Image from 'next/image'

import styles from '../styles/Whatsapp.module.css'

export default function Whatsapp() {
    return (

        <div className={styles.whatsapp}>

            <a className={styles.linkWhatsapp}
                href="https://api.whatsapp.com/send?phone=593995456269&text=Hola!"
                target="_blank"
            >        
                <Image 
                    className={styles.imgWhatsapp}
                    src="/img/whatsapp_icon.jpg"
                    alt="Whatsapp"
                    width={75}
                    height={75}
                    />
            </a>

        </div>
            
    )

}
