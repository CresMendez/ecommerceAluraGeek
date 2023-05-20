import { serviciosproductos } from "../servicios/productosServicios.js";

/*const image=document.querySelector('[data-img]')
const  input=document.querySelector('[data-url]')
input.addEventListener("change", ()=>{
    image.src = URL.createObjectURL(input.files[0]);
    //input2=document.querySelector('[data-url]').files[0].name;
   // var direccionImg=image.src
   console.log("url "+image.getAttribute('src'));
});
*/

// Para que se muestre una imagen previa

const imgFile = document.querySelector('[data-url]');

const previewFile = () => {
  const preview = document.querySelector('[data-img]');
  const file = document.querySelector('[data-url]').files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    preview.src = reader.result
  })

  if (file) {
    reader.readAsDataURL(file);
  }

  const imgURL= document.querySelector('[data-img]').getAttribute('src');
  console.log(imgURL);
}

imgFile.addEventListener('change', previewFile);

//_--------------------------------------------------------------------------------------
const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async() => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
  
    if (id === null) {
        console.log("error primero");
        //window.location.href = "/screens/error.html";
      }
    
      const img=document.querySelector('[data-img]');
      const imgURL=document.querySelector('[data-URL]');
      const categoria=document.querySelector('[data-categoria]');
      const nombre=document.querySelector('[data-nombre]');
      const precio=document.querySelector('[data-precio]');
      const descripcion=document.querySelector('[data-descripcion]');
    
      try {
        const producto = await serviciosproductos.verProducto(id);
        if (producto.imgURL && producto.nombre && producto.precio && producto.descripcion) {
            img.src=producto.imgURL;
           // imgURL.value=producto.imgURL;
            categoria.value=producto.categoria;
            nombre.value=producto.nombre;
            precio.value=producto.precio;
            descripcion.value=producto.descripcion;
        } else {
          throw new Error();
        }
      } catch (error) {
        console.log("error segundo");
        //window.location.href = "/screens/error.html";
      }
    };
  
  obtenerInformacion();
  
  //codigo para actualizar en la db.json metodo PUT
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imgURL= document.querySelector('[data-img]').getAttribute('src');//`./assets/img/images/${input2}`//document.querySelector('[data-URL]').value;
    console.log(imgURL);
    const categoria=document.querySelector('[data-categoria]').value;
    const nombre=document.querySelector('[data-nombre]').value;
    const precio=document.querySelector('[data-precio]').value;
    const descripcion=document.querySelector('[data-descripcion]').value;
    let user_confirm = confirm("¿Está seguro que desea Actualizar el producto?")
        if(user_confirm){
            serviciosproductos.actualizarProducto(nombre, imgURL, precio, categoria, descripcion, id).then(() => {
                alert("Actualizacion realizada");
                window.location.href = "./productos.html";
              });
          }
  });


















/*function crearFotoDerecho(){
    //0.- Recuperar datos
    let file = document.querySelector('[data-url]').files[0];  
  
    const reader = new FileReader();
        reader.addEventListener('load', (event) => {
        document.querySelector('[data-img]').src = event.target.result;
    });
  
    reader.readAsDataURL(file);
  }
  console.log(crearFotoDerecho());
  */