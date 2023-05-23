//GET
const listaProductos = () => fetch("https://6468d44de99f0ba0a82df5ff.mockapi.io/productos").then(respuesta => respuesta.json()).catch(error => console.log(error));
//POST  crear productos
const crearProducto=(nombre, imgURL, precio, categoria, descripcion)=>{
    return fetch("https://6468d44de99f0ba0a82df5ff.mockapi.io/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: uuid.v4(),
            nombre,
            imgURL,
            precio,
            categoria,
            descripcion
           
        }),
    });
};
//DELETE eliminando registro `
const eliminarProducto = (id) => {
    return fetch(`https://6468d44de99f0ba0a82df5ff.mockapi.io/productos/${id}`, {
      method: "DELETE",
    });
  };

//Get de nuevo para ver producto

const verProducto = (id) => {
    return fetch(`https://6468d44de99f0ba0a82df5ff.mockapi.io/productos/${id}`).then((respuesta) =>
      respuesta.json().catch(error => console.log(error))
    );
  };

//PUT para mostrar la infor que se va a editar
//para actualizar los datos que viene del formulario
const actualizarProducto = (id, nombre, imgURL, precio, categoria, descripcion) => {
    return fetch(`https://6468d44de99f0ba0a82df5ff.mockapi.io/productos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id, nombre, imgURL, precio, categoria, descripcion }),
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