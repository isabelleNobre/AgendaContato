<?php
include('../../conexao/conexao.php');

$idUsuario = $_POST['idUsuario'];
$nomeUsuario = $_POST['nomeUsuario'];
$loginUsuario = $_POST['loginUsuario'];
$senhaUsuario = $_POST['senhaUsuario'];

$nomeUsuario = utf8_decode($nomeUsuario);
$loginUsuario = utf8_decode($loginUsuario);

$sql = "UPDATE usuario 
        SET nomeUsuario = '".$nomeUsuario."',
            loginUsuario = '".$loginUsuario."',
            senhaUsuario = '".$senhaUsuario."'
        WHERE idUsuario = ".$idUsuario."
        
";

if(mysqli_query($conecta, $sql)){
    $data = array("return" => true);
}else{
    $data = array("return" => mysqli_error($conecta));
}

echo json_encode($data);

?>