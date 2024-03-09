# Brancher un front-end JavaScript à un back-end NodeJS.

Une fois toutes les routes de votre back-end crées vous devriez avoir un serveur qui tourne que vous pouvez requetez via postman.

L'objectif c'est maintenant d'effectuer des requêtes non pas dans postman mais dans un front-end JavaScript avec la fonction `fetch()`.

Soit un back end nodejs comme ceci :

*/back-end/app.js*
```js
const express = requrie("")
```

*/front-end/index.html*
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Mon front-end</h1>
</body>
<script src="script.js"></script>
</html>
```

*/front-end/script.js*
```js

```


# CORS

## Qu'est ce que CORS
CORS est une sécurité du navigateur qui bloque les réponses HTTP provoqué par la méthode fetch() et XMLHttpRequest. 

Le seul moyen pour le navigateur d'autortisé la réponse d'un fetch c'est que le serveur renvoi une liste d'origine autorisée et que l'origine du client en fasse parti. La liste des origines autoriser ce fournis dans le header de réponse Access-Control-Origin.

Notre API REST est donc pour l'instant inutilisable par la fonction fetch() car l'en tete Access-Control-Origin n'est pas renvoyer par le serveur.

Il nous faut donc :
1. Ajouter l'entete Access-Control-Origin dans les réponses du serveur express.
2. Précisier l'origine du client comme etant une origine autorisée.


### Ajouter le header Access-Control-Origin et préciser les origine autorisées.

```js

```

## En quoi il protège le client ?
Par défaut fetch est bloqué par le navigateur et c'est uniquement si le serveur à prévu le coup et envoyé une liste des domaine autoriser que la sécurité CORS peut être evité, en supossant bien sur que l'origin du client fasse parti de la liste des origine autoriser par le serveur.

## Est ce que CORS protège le serveur ?
Non car le serveur est tout de meme accessible via Postman ou la commande curl par exemple.

## Mauvaise pratique amenant à une faille de securité.
Access_control-origin : *