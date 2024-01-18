<?php
/**
 * Initialisation des variables d'erreurs
 * Quand ces variables sont NULL celà singifie qu'aucune erreurs n'à été commises par l'utilisateur.
 */
$error_query = null;
// Test si le param id existe dans l'url
if(isset($_GET["id"])){
    $id = $_GET["id"];
    $bdd = new PDO("mysql:host=lamp-mysql;dbname=eval;","root","root");
    // Récupère le produit
    $product = $bdd->query("SELECT * FROM Product WHERE id=$id")->fetch();
    // Genère une erreur si le produit n'existe pas
    if(!$product){
        $error_query = "Le produit numéro $id n'existe pas.";
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Single Product</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <a href="index.php">Home</a>
        <a href="add-product.php">New product</a>
    </header>
    <section class="content">
        <?php  if($product) :?>
            <div class="product">
                <h1 class="name"><?= $product["name"]?></h1>
                <p class="price"><?= $product["price"]?>€</p>
                <p class="description"><?= $product["description"]?>€</p>
            </div>
        <?php endif;?>
        <?=$error_query ?>
    </section>
</body>
</html>

