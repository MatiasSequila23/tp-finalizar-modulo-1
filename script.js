const selectProductos = document.querySelector("#select-producto");
const selectCantProducto = document.querySelector("#select-cantidad-permitida");
const selectColores = document.querySelector("#select-colores");
const divContenedorProductos = document.querySelector("#contenedor-productos");
const divDetalleSelect = document.getElementById("ParamSelect");
var productos = [
    { nombre: "Producto 1", cantidad: 1, img: "<img src='img/listado-lechelita-quesos-crema-entero.png' alt='imagen'>" },
    { nombre: "Producto 2", cantidad: 2, img: "<img src='img/5954b954deaf2c03413be345.png' alt='imagen'>" },
    { nombre: "Producto 3", cantidad: 3, img: "<img src='img/papas-38-gr.png' alt='imagen'>" },
    { nombre: "Producto 4", cantidad: 4, img: "<img src='img/pringles-chica1-f6b1f55732d4070deb16445069474378-640-0.png' alt='imagen'>" },
    { nombre: "Producto 2", cantidad: 5, img: "<img src='img/queso-holanda.png' alt='imagen'>" },
    { nombre: "Producto 3", cantidad: 6, img: "<img src='img/sancor-manteca-200g-byb1-cc77d9f4db15061eba15913919669798-1024-1024.png' alt='imagen'>" },
    { nombre: "Producto 4", cantidad: 7, img: "<img src='img/lactal-blanco-chico-byb1-4cb0032f01afa6635d16017364445003-1024-1024.png' alt='imagen'>" },
    { nombre: "Producto 5", cantidad: 8, img: "<img src='img/214391-1534456298.png' alt='imagen'>" }
];

function generar() {
    var combo = document.getElementById("select-colores");
    var selected = combo.options[combo.selectedIndex].text;
    divDetalleSelect.innerHTML = "";
    divDetalleSelect.innerHTML += `<p> La cantidad de productos a mostrar es: ${selectProductos.value} </p>`;
    divDetalleSelect.innerHTML += `<p> La cantidad de productos permitidos por compra es: ${selectCantProducto.value} </p>`;
    divDetalleSelect.innerHTML += `<p> Los colores seleccionados a usar son: ${selected} </p>`;
    mostrarProductos()
}


function mostrarProductos() {
    // Obtener la cantidad seleccionada del select
    var cantidadSeleccionada = parseInt(document.querySelector("#select-producto").value);
    // Obtener la cantidad seleccionada del select cantidad Permitida
    var cantidadPermitidaSeleccionada = parseInt(document.querySelector("#select-cantidad-permitida").value);
    // Obtener el contenedor de productos
    var productosContainer = document.getElementById("productos-container");
    // Obtener color seleccionado
    var ColorSeleccionado = document.querySelector("#select-colores");
    var colores = ColorSeleccionado.value;
    // Separar los colores 
    var coloresSeparados = colores.split("-");
    var primerColor = coloresSeparados[0];
    var segundoColor = coloresSeparados[1];
    // Limpiar el contenedor de productos
    productosContainer.innerHTML = "";
    //Select forma de pago
    var formaPago = '<select class="select-card">' +
        '<option value="1">Efectivo</option>' +
        '<option value="2">Debito</option>' +
        '<option value="3">Credito</option></select>'

    // Mostrar los productos correspondientes a la cantidad seleccionada
    for (var i = 0; i < cantidadSeleccionada; i++) {
        var producto = productos[i];
        if (producto !== null && producto !== undefined) {
            var Card = '';
            var selectCantidad = '';
            // Aplicar estilos de fondo de color de manera alternada
            if (i % 2 === 0) {
                Card += `<div class="card" style="background-color: ${primerColor};">`;
            } else {
                Card += `<div class="card" style="background-color: ${segundoColor};">`;
            }           
            // Agrega imagen
            Card += `<figure> ${producto.img} </figure>`;
            // Agregar nombre Producto
            Card += `<div class="contenido-card"><h3> ${producto.nombre}</h3>`;
            // Agrega select pago
            Card += '<label>Seleccione pago</label>'
            Card += formaPago;
            // Agrega select cantidad
            Card += '<label>Seleccione cantidades</label>'
            selectCantidad += '<select  class="select-card">';
            for (var j = 1; j <= cantidadPermitidaSeleccionada; j++) {
                selectCantidad += '<option value="">' + j + '</option>';
            }
            selectCantidad += '</select>';
            Card += selectCantidad;
            Card += '<button class="btn-card">Comprar</button></div></div>';
            productosContainer.innerHTML += Card;
        }
    }
}

function cortar() {
    var nombresincortar = "rojo-amarillo";
    var nombrecortado = nombresincortar.split("-");
    var primernombre = nombrecortado[0];
    var segundonombre = nombrecortado[1];
    console.log(primernombre, segundonombre);
}

