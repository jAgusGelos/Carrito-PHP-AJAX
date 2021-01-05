<?php
    include('conexion.php');
    $nro = $_POST['nro'];
    $query = 'SELECT p.nombre, p.descr, p.precio, c.cantProd, (p.precio * c.cantProd) as subtotal FROM carrito c JOIN productos p ON c.codProd = p.id WHERE c.nroFactura = ' . $nro;
    $result = mysqli_query($conexion, $query);
    if(!$result){
        die('ERROR en $NRO');
    }

    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[] = array(
            'nombre' => $row['nombre'],
            'descr' => $row['descr'],
            'precio' => $row['precio'],
            'cant' => $row['cantProd'],
            'subtotal' => $row['subtotal']
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString;



?>