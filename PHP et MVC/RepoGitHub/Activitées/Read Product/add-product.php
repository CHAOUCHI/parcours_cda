<?php
/**
 * Initialisation des variables d'erreurs
 * Quand ces variables sont NULL celà singifie qu'aucune erreurs n'à été commises par l'utilisateur.
 */
$error_name = null;
$error_price = null;
$error_description = null;
$general_message = null;

// Test si les champs du formulaire existes.
if(isset($_POST["name"]) && isset($_POST["price"]) && isset($_POST["description"])){

    /**
     * Je stocke les champs dans des variables spécifiques pour plus de lisibilité
     */
    $name = $_POST["name"];
    $price = $_POST["price"];
    $description = $_POST["description"];

    // Test tu champs name
    if(strlen($name) < 2){
        $error_name = "Product name too short, at least 2 characters required.";
    }
    // Test du prix
    if($price<0){
        $error_price = "Product price must be positive or 0";
    }
    // Test du champs description
    if(strlen($description)<5){
        $error_description = "Product description too short, at least 5 characters required.";
    }

    // Effectuer la requête SQL si il n'y a aucune erreurs.
    if(!$error_name && !$error_description && !$error_price){
        try {
            $bdd = new PDO("mysql:host=lamp-mysql;dbname=crud_learn;","root","root");
            $bdd->query("INSERT INTO `Product` (`id`, `name`, `price`, `description`) VALUES (NULL, '".$name."', '".$price."', '".$description."') ");
            $general_message = "Produit ajouté dans la table";
        } catch (PDOException $e) {
            $general_message = "SQL error";
            echo $e->getMessage();
        }
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajouter un produit</title>
    <link rel="stylesheet" href="style.css">
    
</head>
<body>
    <header class="header">
        <a href="index.php">Home</a>
        <a href="add-product.php">New product</a>
    </header>
    <section class="content">
        <form action="add-product.php" method="post" class="form_add">
            <label for="name">Product name</label>
            <input type="text" name="name" id="name">

            <label for="price">Prix</label>
            <input type="number" name="price" id="number">

            <label for="description">Description du produit</label>
            <textarea name="description" id="description" cols="30" rows="10"></textarea>
            <input type="submit" value="Créer le produit">
        </form>
        <!-- Affichage des messages d'erreurs, si une variable est NULL rien ne s'affiche. -->
        <p><?= $general_message?></p>
        <p><?= $error_name?></p>
        <p><?= $error_price?></p>
        <p><?= $error_description?></p>
    </section>
</body>
</html>