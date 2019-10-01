<?php
include('../../conexao/conexao.php');
session_start();

$nomeContato = $_POST['nomeContato'];
$enderecoContato = $_POST['enderecoContato'];
$telefoneContato = $_POST['telefoneContato'];
$celularContato = $_POST['celularContato'];
$emailContato = $_POST['emailContato'];

$nomeContato = utf8_decode($nomeContato);
$enderecoContato = utf8_decode($enderecoContato);

if(isset($_SESSION['idUsuario'])){

    $sql = "INSERT INTO contato (nomeContato, enderecoContato, telefoneContato, celularContato, emailContato, usuario_idUsuario) 
            VALUES ('".$nomeContato."', '".$enderecoContato."', '".$telefoneContato."', '".$celularContato."', '".$emailContato."', '".$_SESSION['idUsuario']."')";
    
    if(mysqli_query($conecta, $sql)){
        $data = array("return" => true);
    }else{
        $data = array("return" => mysqli_error($conecta));
    }

}else{
    $data = array("return" => "É necessário logar no sistema.");
}


echo json_encode($data);

?>