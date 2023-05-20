//GET
const listaProductos = () => fetch("https://ecommerce-alura-geek-ten.vercel.app/producto").then(respuesta => respuesta.json()).catch(error => console.log(error));
//POST  crear productos
const crearProducto=(nombre, imgURL, precio, categoria, descripcion)=>{
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombre,
            imgURL,
            precio,
            categoria,
            descripcion,
            id: uuid.v4()
        }),
    });
};
//DELETE eliminando registro `
const eliminarProducto = (id) => {
    return fetch(`https://ecommerce-alura-geek-ten.vercel.app/producto/${id}`, {
      method: "DELETE",
    });
  };

//Get de nuevo para ver producto

const verProducto = (id) => {
    return fetch(`https://ecommerce-alura-geek-ten.vercel.app/producto/${id}`).then((respuesta) =>
      respuesta.json().catch(error => console.log(error))
    );
  };

//PUT para mostrar la infor que se va a editar
//para actualizar los datos que viene del formulario
const actualizarProducto = (nombre, imgURL, precio, categoria, descripcion, id) => {
    return fetch(`https://ecommerce-alura-geek-ten.vercel.app/producto/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({nombre, imgURL, precio, categoria, descripcion, id }),
    })
      .then((respuesta) => respuesta)
      .catch((err) => console.log(err));
  };

export const serviciosproductos = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    verProducto,
    actualizarProducto,
};




    /*.then(respuesta => {
        if(respuesta.ok){
            return respuesta.body;
        }
    })
    throw new Error("No se pudo crear el producto")
};
*/