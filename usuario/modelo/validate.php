<?php
include('../../conexao/conexao.php');

$loginUsuario = $_POST['loginUsuario'];
$senhaUsuario = $_POST['senhaUsuario'];

$sql = "SELECT *, count(idUsuario) as registro FROM usuario WHERE loginUsuario = '".$loginUsuario."' AND senhaUsuario = '".$senhaUsuario."'";

if(mysqli_query($conecta, $sql)){

    $pesquisa = mysqli_query($conecta, $sql);

    while($result = mysqli_fetch_array($pesquisa)){
        if($result['registro'] == 1){
            session_start();
            $_SESSION['idUsuario'] = $result['idUsuario'];
            $data = array("return" => true);
        }else{
            $data = array("return" => "Usuário e/ou senha não validado!");
        }
    }
}

echo json_encode($data);

?>