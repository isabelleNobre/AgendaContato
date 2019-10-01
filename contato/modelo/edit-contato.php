<?php
include('../../conexao/conexao.php');

$idContato = $_POST['idContato'];
$nomeContato = $_POST['nomeContato'];
$enderecoContato = $_POST['enderecoContato'];
$telefoneContato = $_POST['telefoneContato'];
$celularContato = $_POST['celularContato'];
$emailContato = $_POST['emailContato'];

$nomeContato = utf8_decode($nomeContato);
$enderecoContato = utf8_decode($enderecoContato);

$sql = "UPDATE contato 
        SET nomeContato = '".$nomeContato."',
            enderecoContato = '".$enderecoContato."',
            telefoneContato = '".$telefoneContato."',
            celularContato = '".$celularContato."',
            emailContato = '".$emailContato."'
        WHERE idContato = ".$idContato."
        
";

if(mysqli_query($conecta, $sql)){
    $data = array("return" => true);
}else{
    $data = array("return" => mysqli_error($conecta));
}

echo json_encode($data);

?>