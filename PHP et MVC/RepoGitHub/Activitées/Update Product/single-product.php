<?php
$error_query = null;
if(isset($_GET["id"])){
    $id = $_GET["id"];
    $bdd = new PDO("mysql:host=lamp-mysql;dbname=eval;","root","root");
    $product = $bdd->query("SELECT * FROM Product WHERE id=$id")->fetch();
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

