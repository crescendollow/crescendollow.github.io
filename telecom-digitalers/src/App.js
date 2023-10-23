import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import NewsLoader from './components/NewsLoader';
import CommentsLoader from './components/CommentsLoader';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comments from './constants/comments';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Cabecera from './components/Cabecera';
import Principal from './components/Principal';
import Inicio from './components/Inicio';
import IndComment from './components/IndComment';

function App() {

  const [comentarios, setComments] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/Comments")
      .then((resp) => {
        setComments(resp.data);
      })
      .catch((error) => {
        if (error.response) {
          // La solicitud fue realizada y el servidor respondió con un código de estado
          console.log('Status Code:', error.response.status);
          console.log('Data:', error.response.data);
        } else if (error.request) {
          // La solicitud se realizó pero no se recibió ninguna respuesta
          console.log('No response received');
        } else {
          // Ocurrió un error antes de realizar la solicitud
          console.error('Error:', error.message);
        }
      });
  }, []);

  const rutas = [
    {
      url: "",
      nombre: "home",
      componente: <Inicio/>
    },
    {
      url: "noticias",
      nombre: "Noticias",
      componente: <NewsLoader></NewsLoader>
    },
    {
      url: "comentarios",
      nombre: "Comentarios",
      componente: <CommentsLoader Comments={Comments} />
    },
    {
      url: "nuevo_comentario",
      nombre: "NuevoComentario",
      componente: <IndComment agregaComentario={(coment)=>{
        setComments([...comentarios, coment]);
      }}/>
    },
  ]


  return (
    <BrowserRouter> 
      <main className="container-fluid m-0 p-0">
        <Cabecera></Cabecera>
        <NavBar rutas = {rutas}></NavBar>
        <Principal rutas={rutas}></Principal>
        <Footer></Footer>
      </main>
    </BrowserRouter>
  );
}

export default App;
