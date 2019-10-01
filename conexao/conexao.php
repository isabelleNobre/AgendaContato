<?php
ini_set('display_errors', true);
error_reporting(E_ALL);

//Conexão on-line
$hostname = "fdb22.awardspace.net";
$database = "2874836_agenda";
$username = "2874836_agenda";
$password = "@g3nd@c0nt@t05";

if($conecta = mysqli_connect($hostname, $username, $password, $database)){
    // echo "Conectado...............<br>";
}else{
    echo "Erro: ".mysqli_connect_error();
}
?>