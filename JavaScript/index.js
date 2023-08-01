let News = [
  {
    title: "Un juegaso para aprender CSS",
    body: "Queres ser un jedi del frontend? Que estas esperando. El programa digitalers es tu oportunidad. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid explicabo quia molestiae mollitia corrupti, doloribus nihil? Expedita dolorem voluptatum est, eius cumque voluptatibus odio at magnam ipsum odit recusandae?",
  },
  {
    title: "Digitallers es la mejor propuesta de capacitacion",
    body: "Queres ser un jedi del frontend? Que estas esperando. El programa digitalers es tu oportunidad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum beatae, voluptatibus esse velit numquam harum ut ea excepturi recusandae officia hic suscipit autem eum consequuntur cumque atque, eius nesciunt omnis?",
  },
  {
    title: "Una IA crea los simpsons en la vida real",
    body: "Se le pidio a una IA que retrate a los simpson en la vida real y esto es lo que salio. queres verlos en el siguiente link: <a href='https://elcomercio.pe/tecnologia/inteligencia-artificial/asi-se-verian-los-personajes-de-los-simpsons-en-la-vida-real-segun-una-ia-fotos-inteligencia-artificial-midjourney-noticia/' >Aqui!</a> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quae quibusdam aperiam laudantium velit voluptatum iste perferendis quia culpa, maxime optio eligendi? Reiciendis rem loremque mollitia aliquam blanditiis autem ducimus!",
  },
  {
    title: "Una Noticia de prueba!",
    body: "Noticion noticion una noticia de prueba llego",
  },
];

let Comments = [
  {
    nombre: "Un juegaso para aprender CSS",
    rol: "Queres ser un jedi del frontend? Que estas esperando. El programa digitalers es tu oportunidad. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid explicabo quia molestiae mollitia corrupti, doloribus nihil? Expedita dolorem voluptatum est, eius cumque voluptatibus odio at magnam ipsum odit recusandae?",
    comentario: "Un juegaso para aprender CSS",
  },
  {
    nombre: "Apaospas",
    rol: "Queres ser un jedi del frontend? Que estas esperando. El programa digitalers es tu oportunidad. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid explicabo quia molestiae mollitia corrupti, doloribus nihil? Expedita dolorem voluptatum est, eius cumque voluptatibus odio at magnam ipsum odit recusandae?",
    comentario: "Un juegaso para aprender CSS",
  },
];

function addNoticia(noticia) {
  const newsContainer = document.getElementById("newsContainer");

  let newNoticia = document.createElement("article");
  newNoticia.innerHTML = "";
  newNoticia.className =
    "col-5 noticia m-2 p-0 rounded shadow mb-5 bg-body-tertiary rounded";

  let title = document.createElement("h2");
  title.innerHTML = noticia.title;
  title.className = "mainHeader rounded-top p-3";

  newNoticia.appendChild(title);

  let body = document.createElement("p");
  body.innerHTML = noticia.body;
  body.className = "newsBody";

  newNoticia.appendChild(body);

  newsContainer.appendChild(newNoticia);
}

function addComment(comment) {
  const dataList = document.getElementById("comentarios");
  let newComment = document.createElement("article");
  newComment.innerHTML = 
  `<article>
        <img src="Imagenes/Avatar.jpg" alt="USer two" width="60px" />
        <h3>Nombre: ${comment.nombre}</h3>
        <h4>${comment.rol}</h4>
        <h5>${comment.comentario}</h5>
    </article>`;
  newComment.className = "comentario col-5 noticia m-2 p-0 rounded shadow mb-5 bg-body-tertiary rounded";

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "&#128465;&#65039;";
  deleteBtn.className = "btn btn-danger float-end";
  deleteBtn.addEventListener("click", (evt) => {
    if (confirm("Desea eliminar comentario?")) {
      let sender = evt.target;
      let commentContainer = sender.parentElement;
      dataList.removeChild(commentContainer);
    }
  });
  newComment.appendChild(deleteBtn);

  dataList.appendChild(newComment);
}

window.addEventListener("load", () => {
  for (noticia of News) {
    addNoticia(noticia);
  }
  for (coment of Comments) {
    addComment(coment);
  }
});

/*function addComment(comment) {
  const dataList = document.getElementById("comentarios");
  let newComment = document.createElement("article");
  newComment.innerHTML = ""
  newComment.className = "comentario"

  let newCommentImg = document.createElement("img");
  newComment.innerHTML = ""
  newCommentImg.src = "Imagenes/Avatar.jpg"
  newCommentImg.alt = "Usuario"
  newComment.style.width = "60px"

  newComment.appendChild(newCommentImg)

  let nombreComment = document.createElement("h3");
  nombreComment.innerHTML = comment.nombre;

  newNoticia.appendChild(nombreComment);

  let btnEliminar = document.createElement("button");
  btnEliminar.innerHTML = "&#128465;&#65039;";
  btnEliminar.className = "btn btn-danger float-end";
  btnEliminar.addEventListener("click", (evt) => {
    if (confirm("Desea eliminar el elemento")) {
      let sender = evt.target;
      let liContenedor = sender.parentElement;
      dataList.removeChild(liContenedor);
    }
  });
  li.appendChild(btnEliminar);

  dataList.appendChild(li);
}
*/

window.addEventListener("load", () => {
  let btnAddComment = document.getElementById("commentForm");
  //btnAgregarTarea.onclick= ..
  btnAddComment.addEventListener("click", () => {
    let newNameComment = document.querySelector("#nombre")
    let newRolComment = document.querySelector("#comentario")
    let newComentarioComment = document.querySelector("#comentario")
    
    //if (txtTareaNueva.value) {
    // agregarTarea(txtTareaNueva.value);
    //}

    const aux = {
        nombre: newNameComment.value,
        rol : newRolComment.value,
        comentario: newComentarioComment.value
    }

    newNameComment.value && newRolComment.value && newComentarioComment.value && addComment(aux);
    newNameComment.value = "";
    newRolComment.value = ""
    newComentarioComment.value = ""
  });
});
