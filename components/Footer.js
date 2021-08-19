export default function Footer() {
    return (
        <footer className="py-5 " role="contentinfo">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <h3 className="h4 mb-4">M U </h3>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <h4 className="h6">Dirección</h4>
                                <address >
                                    <ul className="list-unstyled">
                                        <li>
                                            Guayaquil
                                            <br/>
                                            Ecuador
                                            <br/>
                                        </li>
                                    </ul>
                                </address>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <h4 className="h6"> Principales servicios</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#">Consultoria</a>
                                    </li>
                                    <li>
                                        <a href="#">Capacitaciones</a>
                                    </li>
                                    <li>
                                        <a href="#">Asesorias</a>
                                    </li>
                                    <li>
                                        <a href="#">Evaluaciones</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6"></div>
                            <div className="col-md-3 col-sm-6"></div>

                        </div>
                        
                    </div>
                </div>
            </div>
            
        </footer>
    )
}
