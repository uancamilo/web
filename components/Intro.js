import  styles  from '../styles/Intro.module.css';

import Navbar from './Navbar';


export default function Intro() {
    return (
        <>
        <div className={styles.intro}>

        <Navbar/>

        <div className="container pt-5">

            <p className={styles.TextIntro}>

                Consultoria en seguridad y riesgos del trabajo
                
            </p>
            
        </div>

        </div>
            
        </>
    )
}
