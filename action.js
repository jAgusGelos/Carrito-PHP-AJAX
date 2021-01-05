$(function () {    
    buscarTodo();
    buscarMax();
    buscarCarrito();

    $(document).on('click','.agregarProducto', function(){
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr('prodId');
        element = $('#'+id).val();
        let cant = element;
        console.log(cant);

    });



    
    
    $('#buscarProd').keyup(function () {
        if ($('#buscarProd').val()) {
            let buscar = $('#buscarProd').val();
            $.ajax({
                url: 'buscar-prod.php',
                type: 'POST',
                data: {
                    buscar
                },
                success: function (response) {
                    let productos = JSON.parse(response);

                    let template = '';
                    

                    productos.forEach(x => {
                        template += `
                        <tr prodId = "${x.id}">
                        <td>${x.nombre}</td>
                        <td>${x.descr}</td>
                        <td> $ ${x.precio}</td>
                        <td>
                            <form id="cant-form">
                                <div class="form-group">
                                    <input type="number" id='${x.id}' min="0" max="100" class="form-control">
                                </div>
                            </form>
                        </td>
                        <td> <a href="#" class = 'agregarProducto'> <i class="fas fa-plus"></i></a></td>
                        </tr>
                        `
                    });
                    $('#tablaProductos').html(template);
                }


            });

        } else {
            buscarTodo()
        }
    });


})

function buscarTodo() {
    $.ajax({
        url: 'buscar-todo.php',
        type: 'GET',
        success: function (response) {
            let productos = JSON.parse(response);

            let template = '';
            productos.forEach(x => {
                template += `
                        <tr prodId = "${x.id}">
                        <td>${x.nombre}</td>
                        <td>${x.descr}</td>
                        <td> $ ${x.precio}</td>
                        <td><input type="number" class= 'text-center' prodCant ="${x.id}" min="0" max="100"></td>
                        <td> <a href="#" class = 'agregarProducto'> <i class="fas fa-plus"></i></a></td>
                        </tr>
                        `
            });
            $('#tablaProductos').html(template);

        }
    });
}

function buscarMax(){    
    $.ajax({
        url: 'buscar-Nfactura.php',
        type: 'GET',
        success: function(response){
            let objJson = JSON.parse(response);
            let nroFactura = parseInt(objJson[0]['nro'])+1;
            $('#facturaNro').val(nroFactura);
        }
    });
}

function buscarCarrito(){
    let nro = 1 //$('#facturaNro').val()
    $.ajax({
        url: 'buscar-carrito.php',
        type: 'POST',
        data: {nro},
        success: function(response){
            console.log(response);
            let carrito = JSON.parse(response);

            let template = '';
            carrito.forEach(x => {
                template += `
                        <tr cartId = "${x.id}">
                        <td>${x.nombre}</td>
                        <td>${x.descr}</td>
                        <td> $ ${x.precio}</td>
                        <td>${x.cant}</td>
                        <td>${x.subtotal}</td>                       
                        <td> <a href="#" class = 'delProducto'> <i class="far fa-trash-alt"></i></a></td>
                        </tr>
                        `
            });
            $('#tablaCarrito').html(template);
        }

    });
}

