import { serviciosproductos } from "../servicios/productosServicios.js";

const form = document.querySelector('[data-form]');

form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const imgURL=document.querySelector('[data-URL]').value;
    const categoria=document.querySelector('[data-categoria]').value;
    const nombre=document.querySelector('[data-nombre]').value;
    const precio=document.querySelector('[data-precio]').value;
    const descripcion=document.querySelector('[data-descripcion]').value;

    serviciosproductos.
    crearProducto(nombre, imgURL, precio, categoria, descripcion)
    .then(()=>{
        window.location.href="./productos.html";
    }).catch(error =>console.log(error));
});
