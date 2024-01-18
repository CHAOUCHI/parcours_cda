<?php

// Récupère tout les produits de la BDD
$bdd = new PDO("mysql:host=lamp-mysql;dbname=eval;","root","root");
// Les stocker dans l'array $products
$products = $bdd->query("SELECT * FROM Product")->fetchAll();
?>


<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header class="header">
        <a href="index.php">Home</a>
        <a href="add-product.php">New product</a>
    </header>
    <section class="content">

        <h1 class="page_title">All Products.</h1>
        <div class="products">
            <!-- Afficher tout les produits -->
            <?php  foreach($products as $product) :?>
                <div class="product">
                    <a href="single-product.php?id=<?= $product["id"]?>">
                        <h1 class="name"><?= $product["name"]?></h1>
                    </a>
                    <p class="price"><?= $product["price"]?>€</p>
                </div>
                <?php endforeach;?>
            </div>
        </section>
    </body>
</html>