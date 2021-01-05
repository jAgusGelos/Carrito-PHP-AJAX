<?php
    include('conexion.php');
    $query = "SELECT MAX(nroFactura) FROM facturas";
    $result = mysqli_query($conexion, $query);
    if(!$result){
        die('Error en BD');
    }
    $json = array();
        while($row = mysqli_fetch_array($result)){
            $json[] = array(
                'nro' => $row['0']               

            );
        }
        $jsonString = json_encode($json);
        echo $jsonString;
    

?>