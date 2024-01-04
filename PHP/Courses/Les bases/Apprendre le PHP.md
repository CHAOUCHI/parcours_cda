# Apprendre le PHP
**PHP (PHP : Hypertext Preprocessor) est un langage de programmation de scripting généraliste**. Sa principale vocation est l'envoi de réponse HTTP que se soit une page HTML générée en PHP ou des données JSON. 

Le PHP permet 'utilisation des principes de la **POO** (héritage, polymorphisme, interface) mais n'oblige pas sont utilisation comme Java ou dans une moindre mesure le JavaScript. **Comme tout langage de scripting PHP neccessite un interpréteur pour etre executé.**

## Documentations 
**Le manuel du langage PHP** est disponible sur le site officel du langage : https://www.php.net/manual/fr/index.php

**La réference des fonctions et objets** du langage sont disponible via la barre de recherche du site officel : https://www.php.net/docs.php

**La réference de la syntaxe du langage** est dispoible ici : https://www.php.net/manual/fr/langref.php

## Les possibilités du PHP
PHP est le premier langage de programmation du web comme son nom l'indique PHP est un *Préprocesseur d'Hypertext*.  Concrètement, un hypertext est un fichier HTML et PHP permet de d'exectuer un algorithme avant l'envoi de l'hypertext au client.
>Aujourd'hui on n'envoi pas execlusivement de l'hypertext (html) mais également du JSON ou du XML.

Avec PHP vous pourrez entre autre : 
- **Créer un site web dynamique** sans l'utilisation de JavaScript.
- **Accéder à une base de données SQL**.
- Créer un **système d'autentification**.
- **Concevoir une API REST** accésible depuis un front-end, par exemple en JavaScript via la méthode `fetch()` ou depuis n'importe quel client HTTP.
- Vérifier les champs d'un formulaire HTML.
- Gérer les **cookies**



# TODO
- Installation de l'intepreteur
    - Windows
    - Linux (Debian)
    - Mac
- lancez un serveur web compatible avec PHP
    - apache 
    - php -S locahost:8000
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
    - POO
    - Namespace  
- Lire les infos de la requete HTTP
    - METHOD
    - URI
    - Headers
    - BODY
    - JSON Body
    - queryParam $_GET
    - Formulaire $_POST
- Envoyer la reponse HTTP
    - Status code
    - header()
    - Body echo
        - html cf. "Construire une page HTML en PHP"
        - JSON
    - Cookies et authentification
- Système de fichier
- Envoyer un fichier à un serveur PHP
- Se connecter à une BDD SQL
    - Connector
    - Simple requete
    - Injection XSS
    - Requêtes Preparées
    - Notion de transaction SQL
- Construire une page HTML en PHP
    - balise spécifique 
        - `<?= ?>`
        - `<?php foreach():?>`
        - `<?php if():?>`

// Idées de TP
- Pokedex simple multipage site
- Blog Article
- Boutique en ligne
- User Login Logout
- API Paiement Stripe