<?php
session_start();

session_destroy();

$data = array("return" => true);

echo json_encode($data);

?>