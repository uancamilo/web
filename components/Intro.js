import  styles  from '../styles/Intro.module.css';

import Navbar from './Navbar';

import Contacto from './Contacto';


export default function Intro() {
    return (
        <>
        <div className={styles.intro}>

        <Navbar/>

        <div className="container pt-5">

            <div className="row">

            <div className="col-6 ">

                <p className={styles.TextIntro}>

                    Consultoria en seguridad y riesgos del trabajo

                </p>

                <p className={styles.TextIntroDos}>
                    Ing. Miguel Ugalde Palacios. MSC. En sistemas integrados de gestión de la prevención de riesgos laborales, calidad, medio ambiente y responsabilidad social corporativa.
                </p>

            </div>

            <div className="col-5 rounded-3 m-4 py-3 bg-light position-relative">

                <p className="fs-4 text-center">CAPACITATÉ! <br/> Solicita más información</p>

                <Contacto/>


            </div>


            
        </div>
        </div>

        </div>
            
        </>
    )
}
