import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const IndNews = (props) => {
    return (
        <article className="col-12 justify-content-around noticia m-2 p-0 rounded shadow mb-5 bg-body-tertiary rounded">
            <h2 className="mainHeader rounded-top p-3">{ props.title }</h2>
            <p className="newsBody">{ props.body }</p>
        </article>
    );
};

export default IndNews;
