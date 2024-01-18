<?php

$bdd = new PDO("mysql:host=lamp-mysql;dbname=boutique","root","root");
$requete = $bdd->query("SELECT * FROM Produit");
$produits = $requete->fetchAll();

?>


<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

</body>
</html>