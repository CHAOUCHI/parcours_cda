# NodeJS

Habitullement le JavaScript tourne sur le navigateur du client, coté front-end donc. Il est donc impossible pour du JavaScript coté front-end d'accéder à une BDD SQL, d'envoyer des mails ou de gérer la connexion d'un utilisateur.

Voilà pourquoi il faut un programme coté serveur qui peut executer du JavaScript coté Back-End. Ce programme s'appelle NODEJS.

## NodeJS un runtime JavaScript

NodeJS est un environnement d'execution JavaScript basé sur le moteur V8 utilisé par Chrome.

NodeJS va executer notre code JS et donner accès au réseau, au fichier, à une bdd SQL,etc.

## Créer une API REST avec NodeJS et Express
Il est possible de créer une API REST sous nodejs via le paquet NPM express.js .

Une api REST est un serveur web qui délivre des données au format JSON.

Les actions d'une API Rest sont analogue au méthodes du protocole HTTP.

- GET : Récupérer une donnée
- POST : Envoyer une donnée au serveur
- DELETE : Supprimer une donnée du serveur
- PUT : Modifier une donnée du serveur

# Pré-requis

## Installer NodeJS et npm sous Windows
Télécharger NodeJS Long term Support (LTS) ici : https://nodejs.org/en
![Alt text](image.png)

> Long Term Support signifie que cette version de NodeJS est stable et toutes les failles sont corrigées pendant encore un moment. C'est donc une version fiable à utiliser pour la plupart des projets.

## Installer NodeJS et npm sous Linux
```bash
sudo apt install nodejs npm
```
## Installer NodeJS et npm sous Mac
Avec HomeBrew le gestionnaire de paquet MacOS :
```bash
brew install node
```
Ou à la main via le lien suivant : https://nodejs.org/en/download/

## Installer express

Créez un dossier vide pour votre projet et appelez le `first_api`.

Ouvrez un terminal dans ce dossier et executer les commandes suivante pour : 
- initialiser le projet node 
- installer express

```bash
cd first_app
npm init
npm install express
```

## Executer du JavaScript
Créez un fichier `app.js` et placez y un `console.log()` pour vérifier que tout fonctionne.

```js
console.log("Hello App");
```

Puis executer le code dans un terminal via la commande :
```bash
node app.js
```

![alt text](image.png)


> Attention à bien être dans le dossier `first_app` avant d'éxecuter node, sinon il ne trouvera pas le fichier `app.js`.

## Le routage
L'acces à un serveur web se fait toujours via des urls appelées `routes`.

Par exemples : 
- GET /user/1, peut renvoyer un utilisateur avec pour id 1 par exemple.
- POST /annonce, peut renvoyer une nouvelle annonce au serveur à rajouter dans une BDD SQL par exemple. La nouvelle annonce sera une donnée au format JSON transmit dans le body de la requête HTTP.
- DELETE /task/3, peut supprimer la tache numéro 3.
- PUT /task/3, peut modifier la tache numéro 3 avec les infos à modifier fournit en JSON dans le body.

## Hello World - créer une route avec express

1. Importer express.
```js
const express = require("express");

```

2. Création de l'application
```js
const express = require("express");
const app = express();
```

3. Ajout d'un route `GET /hello` avec la fonction `app.get()`.
```js
const express = require("express");
const app = express();

app.get("/hello",(request,response)=>{
    response.send("<p>Hello World</p>");
});
```
> La fonction callback est appelée quand l'utilisateur tapera `localhost/hello` dans son navigateur.

4. Lancement du serveur en localhost sur le port 8000 avec la fonction `app.listen()`.
```js
const express = require("express");
const app = express();

app.get("/hello",(request,response)=>{
    response.send("<p>Hello World</p>");
});

app.listen(8000,()=>{
    console.log("Serveur lancé sur localhost:8000");
});
```
> La fonction callback est appelée une fois que le serveur est bien lancé sur le port 8000.

Allez on regarde dans un navigateur !
5. Dans un navigateur tapez dans la barre de recherche : `localhost:8000/hello` pour lancer une requête HTTP GET sur la route /hello.

![alt text](image-1.png)

Voilà, vous avez crée votre première route HTTP avec express !

Cette route renvoi en body du texte html, la réponse HTTP brut ressemble à celle-ci.

*La réponse du serveur express*
```http
HTTP/1.1 200 OK

<p>Hello World</p>
```

*La requête du navigateur client*
```http
GET /hello HTTP/1.1
Host : localhost
```

## Récuperer un query param
En HTTP il est possible de récupérer une donnée dans l'url de requete client. Le plus souvent c'est info est un identifiant sql ou le texte d'une barre de recherche.

Par exemple :
- `GET /eleve/1`, l'identifiant de l'eleve demendé est 1 on pourra donc effectuer un 
```sql
SELECT * FROM Eleve WHERE id = 1;
```
- `GET /products/search/table`, une recherche s'effectue sur le nom de produit contenant la string `table`. 
```sql
SELECT * FROM Products WHERE name LIKE %table%;
```

J'ajoute une route à mon API. En précisiant le nom de query param dans l'url de la route.

Pour récupérer un query param il suffit d'utiliser l'objet request fournit en paramètre de la fonction callback de la fonction `app.get()`.

```js
// Ajout d'une nouvelle route
app.get("/user/:id",(request,response)=>{
    const userId = request.params.id;
    response.send()
});
```


