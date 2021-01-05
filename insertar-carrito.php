<?php
    include('conexion.php');
    $nroFactura = $_POST['nroFactura'];
    $codProd = $_POST['codProd'];
    $cantProd = $_POST['cantProd'];
    $query = "INSERT INTO carrito (nroFactura, codProd, cantProd) VALUES (" . $nroFactura . ", " . $codProd . ", " . $cantProd . ")";
    $result = mysqli_query($conexion, $query);
    if(!$result){
        die("ERROR en Inserción");
    }    
    echo 'Exito';
    
?>