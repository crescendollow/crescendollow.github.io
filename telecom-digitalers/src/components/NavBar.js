import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = ({ rutas }) => {
    return (
        <nav>
            <ul className="nav">
                {
                    rutas.map( (ruta) => (
                        <li className="nav-item" key={ruta.url}>
                            <Link className="nav-link" to={ruta.url}>{ruta.nombre}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>);
}

export default NavBar;
