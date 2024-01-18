<?php

$error_notfound = null;
$error_sql = null;
if(isset($_GET["id"])){

    $id = $_GET["id"];   
    
    try {
        $bdd = new PDO("mysql:host=lamp-mysql;dbname=eval;","root","root");
        $product = $bdd->query("SELECT * FROM Product WHERE id=$id")->fetch();
        if($product){
            $bdd->query("DELETE FROM Product WHERE `Product`.`id` = $id")->fetch();
            header("Location: index.php");
        }else{
            $error_notfound = "Produit inconnu";
        }

    } catch (PDOException $e) {
        $error_sql = "Erreur de connexion à la base de donnée.";
        echo $e->getMessage();
    }
} 
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete product</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <a href="index.php">Home</a>
        <a href="add-product.php">New product</a>
    </header>
    <section class="content">
        <p><?= $error_notfound ?></p>
        <p><?= $error_sql ?></p>
    </section>
</body>
</html>

