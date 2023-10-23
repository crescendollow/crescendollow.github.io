import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from "../public/Images/Avatar.jpg"


const CommentsLoader = ({Comments}) => {
    return (
    <div className="commentsContainer container">
        <header className="mainHeader containerTitle">
            Conoce las opiniones de nuestros alumnos y profesores
        </header>
        <section id="comentarios" className="">
            <div className="">
            {Comments.map((n) => (
                <div className = "w-50 container-fluid" key={n.nombre}>
                    <div className="comentario w-100 h-100 text-center shadow">
                            <img className="imgAvatar" src={Img} alt="user_picture" width="100px"></img>
                            <h4 className="card-title mt-2">Nombre: {n.nombre}</h4>
                            <div className="card-body">
                                <h5 className="card-text">Rol: {n.rol}</h5>
                                <h5>Comentario: {n.comentario}</h5>
                            </div>
                    </div>
                </div>
            ))}
            </div>
        </section>
    </div>
    );
};

export default CommentsLoader;
