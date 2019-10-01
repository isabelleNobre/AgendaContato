<?php
include('../../conexao/conexao.php');

session_start();

$qryLista = mysqli_query($conecta, "SELECT * FROM usuario WHERE idUsuario = ".$_SESSION['idUsuario']."");    
while($resultado = mysqli_fetch_assoc($qryLista)){
    $usuario[] = array_map('utf8_encode', $resultado); 
}    

echo json_encode($usuario);

?>