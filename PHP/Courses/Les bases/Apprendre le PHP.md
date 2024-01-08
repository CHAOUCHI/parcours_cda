# Apprendre le PHP
**PHP (PHP : Hypertext Preprocessor) est un langage de programmation de scripting généraliste**. Sa principale vocation est l'envoi de réponse HTTP que se soit une page HTML générée en PHP ou des données JSON. 

Le PHP permet l'utilisation des principes de la **POO** (héritage, polymorphisme, interface) mais n'oblige pas son utilisation comme Java ou dans une moindre mesure le JavaScript. **Comme tout langage de scripting PHP néccessite un interpréteur pour être executé.**

# Documentations 
**Le manuel du langage PHP** est disponible sur le site officel du langage : https://www.php.net/manual/fr/index.php

**La réference des fonctions et objets** du langage sont disponible via la barre de recherche du site officel : https://www.php.net/docs.php

**La réference de la syntaxe du langage** est dispoible ici : https://www.php.net/manual/fr/langref.php

Comme d'habitude **W3schools** est également là : https://www.w3schools.com/php/php_syntax.asp

# Les possibilités du PHP
PHP est le premier langage de programmation du web et comme son nom l'indique PHP est un *Préprocesseur d'Hypertext*.  Concrètement, un hypertext est un fichier HTML et PHP permet de d'exectuer un algorithme avant l'envoi de l'hypertext au client pour envoyer du contenu dynamique.
>Aujourd'hui on n'envoi pas execlusivement de l'hypertext (html) mais également du JSON ou du XML.

Avec PHP vous pourrez entre autre : 
- **Créer un site web dynamique** sans l'utilisation de JavaScript.
- **Accéder à une base de données SQL**.
- Créer un **système d'autentification**.
- **Concevoir une API REST** accéssible depuis un front-end, par exemple en JavaScript via la méthode `fetch()` ou depuis n'importe quel client HTTP.
- Récupérer le contenu des champs d'un formulaire HTML.
- Gérer les **cookies**


# Installation de l'intérpreteur PHP 
L'intérpreteur php est le programme qui va executer nos scripts php.

## Windows
No clue dude...
https://windows.php.net/download#php-8.3

## Linux
```linux
apt install php
```
## Mac
```
brew install php
```
# Lancez un serveur web compatible avec PHP
Une fois l'intérpréteur installé il faut lancer un serveur http local grâce à une simple commande disponible avec l'intérpréteur php. A la différence de server http lancer avec python ce va executer les scripts php un client demanande un fichier ".php".

**Dans une console :**
Rendez vous dans le dossier dans lequel vous souhaitez mettre trouve vos futurs sites web PHP et ouvrez une console à cet endroit.

Puis écrivez ceci pour lancer le serveur en `localhost` sur le port `8080`.
```
php - S localhost:8080
```
> Si vous souhaitez que votre serveur soit accèsible à tout les PC du réseau local de chez vous : remplacez `localhost` par l'adresse ipv4 de votre pc.

## Apache2
Dans l'industuit on ne fournit pas un site PHP grâce à cette commande le plus souvent on utilise un serveur apache. Il existe des images docker de apache.

# Hello World !
Tout code php doit être contenu dans un fichier .php et entre balises php : `<?php ... ?>`

Dans une fichier **index.php**:
```php
<?php
echo "Hello World";
?>
```
`echo` est une fonction qui na pas besoin de parentèse et qui écrie un texte dans le HTML de la page.
```php
<h1>Le magnifique site de <?php echo "Jeff"; ?> !</h1>
<p>
    <?php
        echo "Bienvenue tout le monde !";
    ?>
</p>
```

## Allez plus loin avec une variable
```php

<?php
$prenom = "Jeff";
?>
<h1>Le magnifique site de <?php echo $prenom; ?> !</h1>
<p>
    <?php
        echo "Bienvenue tout le monde !";
    ?>
</p>
```
> **Précision sur `echo`** 
>Pour être plus précis `echo` ecrit enfaite dans le body de la requête HTTP à envoyer au client. Et oui PHP est un langage back-end qui à pour but final d'envoyer une requête HTTP ! Quue la requête contienne du HTML comme plus haut ou du JSON ont utilise `echo` pour écrire dans le body de la requête.
# TODO
- Hello World
    - Structure minimum `<?php ?>`
    - echo
- Basics Syntaxe (explications courtes et lien vers la doc PHP)
    - Variables
        - Type de données
    - Conditions et boucles
    - Opérateurs
    - Array
    - Fonction
    - Namespace
    - POO
- Lire les infos de la requête HTTP
    - METHOD
    - URI
    - Headers
    - BODY
    - JSON Body
        - json_decode
    - queryParam $_GET
    - Formulaire $_POST
- Envoyer la reponse HTTP
    - Status code
    - header()
    - Body echo
        - html cf. "Construire une page HTML en PHP"
        - JSON, json_encode
- Cookies ???
- Session PHP - Persistance des données d'une session
    - Stocker des données pendant tout la session de l'utilisateur. les données sont stocké coté serveur donc en sécurité et inaccessible au client .
    - session_start
    - $_SESSION
    - isset
    - unset
- Se connecter à une BDD SQL
    - Connector
    - Simple requete
    - Requêtes Preparées
    - Notion de transaction SQL
    - Gestion d'erreurs.
    - Injection XSS
- Système de fichier
- Envoyer un fichier à un serveur PHP
- Construire une page HTML en PHP
    - balise spécifique 
        - `<?= ?>`
        - `<?php foreach():?>`
        - `<?php if():?>`

# Idées TP
- TP Hello World
    - Hello World
    - echo Hello World
    - echo $prenom
    - echo $prenom." a ".$age."ans"
    - $prenom = $_GET["prenom"]
    - $age = $_GET["age"]
    - if echo majeur else echo mineur
- TP Formulaire
    - Créer une page form.php contenant un Forumulaire HTML
    - Get prenom et age from $_POST et les afficher.
    - Enregister l'age et le prénom de l'utilisateur dans $_SESSION avec session_start()
    - Le formulaire renvoi sur une page info.php qui affiche les infos utilisateur stockées dans la session.
    - La page info.php affiche les infos uniquement si $_SESSION age et prenom sont isset() sinon location form.php
    - Dans la page info.php ajoute un lien qui supprimer les données utilisateur de la session grâce à la fonction unset() et un nouveau script php nommé logout.php.
- TP Simple Shop
    - Se connecter à une base de données SQL
    - Ajouter un produit à la base depuis un formulaire HTML dans un fichier add-product.php
    - Créer une page products.php qui affiche tout les produits
    - Créer une page product.php?id=1 qui affiche les données d'un produit via son id en récupérer en GET
    - Faire un lien entre les produits affichés dans la page products.php et la page product.php?id=1
    - Créer une page delete-product.php?id=1 qui supprime un produit via sont id en GET et y placer un lien vers la page products.
    - Créer un Formulaire de modification d'un produit
        - Afficher les données du produit dans un formulaire
        - Envoyer les données en POST au serveur
        - Le serveur modifie les données grace à un UPDATE TABLE
        - Affiche la page de l'utilisateur.
- TP Créer le site shoe-shop avec
    - une page d'accueil qui affiche les produits
    - Une page qui affiche les détail d'un produit unique
    - une page pour rajoute un produit à partir d'un formulaire
    - un lien de suppression de produit
    - BONUS : Créer une page de connection pour les administrateur et limité l'accés au pages : ajout,suppression et modifcation de produit au utilisateur connecté uniquement. Utiliser les sessions pour le faire.


// Idées de TP
- Blog Article
- Boutique en ligne
- User Login Logout
- API Paiement Stripe