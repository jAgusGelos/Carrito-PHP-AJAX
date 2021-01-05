<?php
    include('conexion.php');
    $query = 'SELECT * from productos';
    $result = mysqli_query($conexion,$query);
    if(!$result){
        die('Error en la BD');
    }
    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[] = array(
            'id' => $row['id'],
            'nombre' => $row['nombre'],
                'descr' => $row['descr'],
                'precio' => $row['precio']
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString;    


?> 