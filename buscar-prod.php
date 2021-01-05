<?php
    include('conexion.php');

    $busca = $_POST['buscar'];
;
   
    if(!empty($busca)){
        $query = "SELECT * FROM productos WHERE nombre LIKE '%$busca%'";
        $result = mysqli_query($conexion,$query);
        if(!$result){
            die('Error en la consulta' . mysqli_error($conexion));
        }
        $json = array();
        while($row = mysqli_fetch_array($result)){
            $json[] = array(
                'nombre' => $row['nombre'],
                'descr' => $row['descr'],
                'precio' => $row['precio']

            );
        }
        $jsonString = json_encode($json);
        echo $jsonString;
    }


?>