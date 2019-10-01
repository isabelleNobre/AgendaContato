<?php
include('../../conexao/conexao.php');

session_start();

$sql = "SELECT nomeUsuario, idUsuario
        FROM usuario
        WHERE idUsuario = ".$_SESSION['idUsuario']."
";

if(mysqli_query($conecta, $sql)){

    $qryLista = mysqli_query($conecta, $sql);

    while($resultado = mysqli_fetch_assoc($qryLista)){
        $data[] = array_map('utf8_encode', $resultado); 
    }

}else{
    $data = array("return" => "Não existe usuário logado no sistema");
}

echo json_encode($data);

?>