<?php
include('../../conexao/conexao.php');
session_start();

$qryLista = mysqli_query($conecta, "SELECT * FROM contato WHERE usuario_idUsuario = ".$_SESSION['idUsuario']."");    
while($resultado = mysqli_fetch_assoc($qryLista)){
    $contato[] = array_map('utf8_encode', $resultado); 
}    

echo json_encode($contato);

?>