<?php
include('../../conexao/conexao.php');

$qryLista = mysqli_query($conecta, "SELECT *FROM contato WHERE idContato = ".$_POST['idContato']."");    
while($resultado = mysqli_fetch_assoc($qryLista)){
    $contato[] = array_map('utf8_encode', $resultado); 
}    

echo json_encode($contato);

?>