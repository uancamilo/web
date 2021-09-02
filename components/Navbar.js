import Link from 'next/link'


export default function Navbar() {
    return (
        <>
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                <div className="container">
                    <a className="navbar-brand" href="#">M U</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav col-12 justify-content-end">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link active" aria-current="page" >Inicio</a>
                            </Link>    
                        </li>
                        <li className="nav-item">
                            <Link href="/perfil">                    
                                <a className="nav-link" >Perfil</a>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Encuestas
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Encuestas Activas</a></li>
                                <li><a className="dropdown-item" href="#">Resultados de Encuestas</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item pe-5">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item text-dark ps-5">
                            <Link href="/contacto" passHref>
                                <button type="button" className="btn btn-outline-light">Contacto</button>                        
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}