import  styles  from '../styles/Intro.module.css';

import Navbar from './Navbar';


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
                    Con un profesional certificado y reconocido de amplia trayectoria y experiencia en empresas reconocidas en el campo de la construcción y telefonía
                </p>

            </div>

            <div className="col-5 rounded-3 mx-auto py-3 bg-light position-relative">

                    <p className="fs-4 text-center">Solicita mas información</p>

                    <form className={styles.FormularioIntro}>

                        <div class="mb-3">
                            <div className="row">
                                <div className="col-6">
                                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="phone"/> 

                                </div>

                                <div className="col-6">

                                <label for="exampleInputEmail1" class="form-label">Teléfono</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="text"/> 
                                
                                </div>

                            </div>


                            <div id="emailHelp" class="form-text">No compartiremos tus datos con otras personas.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email </label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Mensaje</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="text"/> 
                        </div>

                        <button type="submit" class="btn btn-success">Enviar</button>
                </form>


            </div>


            
        </div>
        </div>

        </div>
            
        </>
    )
}
