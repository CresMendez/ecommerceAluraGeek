  import { serviciosproductos } from "../servicios/productosServicios.js";
  //vista en index
  const nuevoProducto = (nombre, imgURL, precio, categoria, id) =>{
    const card = document.createElement("li");
    card.classList.add("galeria__productos-lista");
    const contenido =
        `<img class="galeria__productos-img" src="${imgURL}" alt="starwars1">
        <h2 class="galeria__producto-nombre">${nombre}</h2>
        <p class="galeria__precio">$ ${precio}</p>
        <a class="galeria__productos-link" href="./verProducto.html?id=${id}&categoria=${categoria}">ver producto</a>
        </li>`;

        card.innerHTML = contenido;
        card.dataset.id=id;

        return card;
};

const productostar = document.querySelector('[data-star]');
const productosConsolas = document.querySelector('[data-consolas]');

var contStar=0;
var contCons=0;
serviciosproductos.listaProductos()
    .then(async respuesta => {
        try {
            await respuesta.forEach(({ nombre, imgURL, precio, categoria, id }) => {
                const nuevaLinea = nuevoProducto(nombre, imgURL, precio, categoria, id);
              //console.log(" id "+id2 + " categoriaa: "+categoriaurl);
                switch (categoria) {
                    case 'starwars':
                            if(productostar!=null && contStar<=6){
                                contStar++;
                                productostar.appendChild(nuevaLinea);
                                
                                console.log(contStar);
                            }
                            
                        break;

                    case 'consolas':
                        if(productosConsolas!=null && contCons<=6){
                            contCons++;
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