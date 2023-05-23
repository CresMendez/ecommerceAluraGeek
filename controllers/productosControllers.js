import { serviciosproductos } from "../servicios/productosServicios.js";

const nuevoProducto = (nombre, imgURL, precio, categoria, id) =>{
    const card = document.createElement("li");
    card.classList.add("galeria__productos-lista");
    const contenido =
        `<img class="galeria__productos-img" src="${imgURL}" alt="starwars">
        <h2 class="galeria__producto-nombre">${nombre}</h2>
        <p class="galeria__precio">$ ${precio}</p>
        <button class="login__boton" id="${id}">Eliminar</button>
        <a class="galeria__productos-editar" href="./ActualizarProductos.html?id=${id}">Editar</a>
        <a class="galeria__productos-link" href="./verProducto.html?id=${id}&categoria=${categoria}">ver producto</a>
        </li>`;
        
        card.innerHTML = contenido;
        card.dataset.id=id;

        //eliminar producto
        const btn = card.querySelector("button");
        btn.addEventListener("click", () => {
          const id = btn.id;//obtengo su atributo id
            //confimacion de eliminar----------------------------------------------------------
          let user_confirm = confirm("¿Está seguro que desea eliminar el registro?")
          if(user_confirm){
        ////////------------------------
            serviciosproductos
            .eliminarProducto(id)
            .then(() => {
                window.location.href = "./productos.html";
            })
            .catch((err) => alert("Ocurrió un error"));
          }
          ////////----------------------------------------------------------------------------

        });

        return card;
};

const productostar = document.querySelector('[data-star]');
const productosConsolas = document.querySelector('[data-consolas]');

var contador=0;
serviciosproductos.listaProductos()
    .then(async respuesta => {
        try {

            await respuesta.forEach(({ nombre, imgURL, precio, categoria, id }) => {

                const nuevaLinea = nuevoProducto(nombre, imgURL, precio, categoria, id);

                switch (categoria) {
                    case 'starwars':
                            if(productostar!=null){
                                productostar.appendChild(nuevaLinea);
                            }
                            
                        break;

                    case 'consolas':
                        if(productosConsolas!=null){
                            productosConsolas.appendChild(nuevaLinea);
                        }
                        break;

                    case 'diversos':
                        //contenedorDiversos.appendChild(nuevaLinea);
                        break;

                    default:
                        categoria = '';
                        break;
                }
            })
        } catch (error) {
            console.log(error)
        }

    });






    //const productosConsolasAll = document.querySelector('[data-consolasall]');

/*
var contador=0;
serviciosproductos
.listaProductos()//nuestro servicio para listar el cliente
.then((data) => {//y la informacion que mostraremois
    
    data.forEach(({nombre, imgURL, precio, categoria, id}) => {//reestructuramos nombre email lo mostramos ocn un forEach

            const nuevaLinea= nuevoProducto(nombre, imgURL, precio, categoria, id);//mando nombnre y correo
            productos.appendChild(nuevaLinea);//lo añadimos a la tabla padre
    });

    console.log(contador);
}).catch((error)=> alert("Ocurrio un error tittin 1"));
*/