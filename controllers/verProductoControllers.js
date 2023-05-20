import { serviciosproductos } from "../servicios/productosServicios.js";

const obtenerInformacion = async() => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
  
    if (id === null) {
      alert("error id");
      window.location.href = "./productos.html";
      }else{

          const imgURL = document.querySelector("[data-imagen]");
          const nombre = document.querySelector("[data-nombre]");
          const precio = document.querySelector("[data-precio]");
          const descripcion = document.querySelector("[data-descripcion]");
        
          try {
            const producto = await serviciosproductos.verProducto(id);
            if (producto.imgURL && producto.nombre && producto.precio && producto.descripcion) {
              imgURL.src =producto.imgURL;
              nombre.innerHTML=producto.nombre;
              precio.innerHTML="$ "+producto.precio;
              descripcion.innerHTML=producto.descripcion;
              //console.log(producto.categoria);
              //GlobalCategoria = producto.categoria;
              //nombre.value = perfil.nombre;
              //email.value = perfil.email;
            } else {
              throw new Error();
            }
          } catch (error) {
            console.log(error);
            //window.location.href = "./productos.html";
          }
        }
    };
  
  obtenerInformacion();
  

  //vista similares 
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
                
                const url2 = new URL(window.location);
                const id2 = url2.searchParams.get("id");
                const urlcategoria = new URL(window.location);
                const categoriaurl=urlcategoria.searchParams.get("categoria");
              //console.log(" id "+id2 + " categoriaa: "+categoriaurl);
                switch (categoria) {
                    case 'starwars':
                            if(productostar!=null && categoriaurl!=null &&//valido que categoria e id
                               categoriaurl=="starwars" && id!=id2 && contStar<=6){
                                contStar++;
                                productostar.appendChild(nuevaLinea);
                                console.log(categoriaurl);
                            }
                            
                        break;

                    case 'consolas':
                        if(productosConsolas!=null && categoriaurl!=null &&//valido que categoria e id
                           categoriaurl=="consolas" && id!=id2 && contCons<=6){
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
