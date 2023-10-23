import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const IndComment = ({agregaComentario}) => {

    const [nombre, setNombre] = useState("");
    const [rol, setRol] = useState("");
    const [comentario, setComentario] = useState("");

    return (
        <section className="form-father-class d-block m-3">
            <div className="form" id="form">
                <h1 className="alert alert-info text-center mt-4">
                    Dejanos un comentario!
                </h1>
                <form>
                        <label htmlFor="nombre" className="">Nombre</label>
                        <input
                            id="nombre"
                            className="input"
                            type="text"
                            placeholder="Ingrese su Nombre"
                            onChange={(evt)=>{setNombre(evt.target.value)}}
                        />

                        <label htmlFor="rol" className="">Rol</label>
                        <input
                            id="rol"
                            className="input"
                            type="text"
                            placeholder="Ingrese su Rol"
                            onChange={(evt)=>{setRol(evt.target.value)}}
                        />

                        <label htmlFor="comentario" className="">Comentario</label>
                        <input
                            id="comentario"
                            className="input"
                            type="text"
                            placeholder="Ingrese su Comentario"
                            onChange={(evt)=>{setComentario(evt.target.value)}}
                        />

                        <button type="button" className="btn btn-primary mt-4 w-100" onClick={()=>{
                            agregaComentario({nombre,rol,comentario})
                        }}>
                            Ageregar comentario!
                        </button>
                </form>
            </div>
        </section>);
}
export default IndComment;
