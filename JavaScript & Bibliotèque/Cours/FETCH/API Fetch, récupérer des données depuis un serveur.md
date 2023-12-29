# L'API Fetch, récupérer des données depuis un serveur.



## L'API Fetch en résumé
### Qu'est ce que c'est ?
L'*API Fetch* est un client HTTP utilisable en JavaScript. Au même titre que les objets : `console`, `document` ou `localStorage`, l'*API Fetch* est accesible via l'objet window. 

**L'API Fetch est utilisable via la méthode `window.fetch`.**

Comme dit plus haut `fetch` est un client HTTP, ce qui signifie qu'il permet d'envoyer une requête HTTP à un serveur HTTP et ainsi reçevoir une réponse HTTP.

Votre navigateur est déjà capable d'effecter des requêtes HTTP. Il le fait d'ailleurs à chaque chargement de page. `Fetch` permet simplement de récupérer des données sans charger toute une nouvelle page. Les données les plus courantes peuvent être :
- Une liste de produits d'une boutique en ligne qui change en fonction d'un filtre de prix.
- Des suggestions de recherche lorsque l'utilisateur tape au clavier.
- Des données géographiques du serveur de google maps.
- L'envoie d'un message via un formulaire sans recharger toute la page.
- La mise en ligne d'un tweet sur twitter.
- L'affichage des posts Facebook au fur et à mesure du défilement de la page.

Toutes ces opérations neccessites l'envoi d'une requête HTTP à un serveur, mais neccessites également de rester sur la page actuel. Il faut donc envoyer la requête en JavaScript via la méthode `fetch`.

>##### L'envoi de requête HTTP avant `fetch` :
>
>Avant l'envoi de requêtes HTTP en JavaScript, la seule façon de récupérer ou envoyer des données à un serveur HTTP était via les formlaires, l'url et le langage PHP. 
> PHP s'executant sur le serveur et générer le HTML coté serveur, il fallait recharger toute la page à l'utilisateur se qui rendait la navigation sur le web bien moins fluide que sur des applications mobile ou bureau.

### Comment se servir de `window.fetch` ?
*Documentation MDN* : https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch

Dans la plupart des cas un serveur de données ne renvoi pas du HTML mais du JSON, un format de données représentant un tableau d'objet JavaScript.

*Fetch* signifie *récupérer* un anglais et *then* signifie *ensuite*. Il faut voir la syntaxe de fetch comme ceci : 

- "I **fetch** some data from an url ..."
- "**Then** I transform the JSON response to a JavaScript array ..."
- "**Then** I use the data."
#### Code : 
```js
fetch(url)          // Remplacez l'url par l'url de la requête HTTP à executer
.then(function(reponseHTTP){    // La fonction callback fournit la réponse HTTP
    // Les données JSON sont transformées en un tableau JS
    return reponseHTTP.json();      
})
.then(function(data){    // la 2nd fonction callback fournit les données   
    console.log(data);
});
```
Vous pouvez tester le coder suivant avec l'url suivante : https://pokebuildapi.fr/api/v1/pokemon/limit/10
Vous aurez les dix premier pokemons affichés dans la console du navigateur.

Rendez-vous sur le site de l'api pokebuild pour expérimenter avec `fetch` !
https://pokebuildapi.fr/api/v1

> **Remarque - Passage à la ligne avant `.then`**
> La méthode `then` est une méthode de la classe `Promise`, la méthode `fetch` renvoie une ``Promise``. Ici `then` est passée à la ligne pour plus de lisbilité mais ce n'est pas du tout obligatoire. L'on pourrait faire `fetch(url).then(...)` comme l'on ferait `console.log(...)`.

> **Remarque - Syntaxe raccourcis**
> L'exemple précedent utilise la syntaxe classique des fonctions anonyme, la syntaxe *fonction fléchée* est plus souvent utilisé pour les fonctions callback en JS, y compris les fonctions callback du `fetch.then`.
> ```js
> fetch(url)
>.then((reponseHTTP)=>reponseHTTP.json())
>.then((data)=>{
>    console.log(data);
>});
>```
>Ce code produit exactement le même résultat. Voir les fonctions fléchées sur la MDN : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions


'
        - appel méthode fetch() : renvoi un promesse de reponse HTTP
        - appel then sur la Promise renvoyé
            - test de validité de la reponse
        - traitement du body : renvoi une promesse de body utilisable.
            - utilisation des données.
        - Résumé 
            - Demander une promesse de réponse
            - récupérer la réponse quand elle arrive
            - vérifier le status de la réponse HTTP
            - récupérer le body
            - utiliser le body
    - Exemple concret d'utilisation
        - recommendation de barre de recherche
        - Boutique en ligne
        - Fil d'actualité Réseau social (pokemon limit and offset)
- La méthode fetch
    - paramètre
        - url | Request object
        - option
    - valeur de retour : Promise
    - L'objet Response
- La problématique du temps de réponse - Les promesses
    - Etude de cas : Requete http
    - les promesses
        - Théorie
            - Ecrire une fonction et donner l'occasion au programmeur d'agir à un certain moment de l'execution de la fonction
        - Déclarer une promesses
        - L'asyncrone des microtasks
- Rappel sur les messages HTTPs
    - Le procotole HTTP
    - Structure d'un message HTTP
    - Structure d'une reuqte HTTP
    - Structure d'une reponse HTTP
    - Comment envoyé une reuqte HTTP - client HTTP
    - Comment envoyé une reponse HTTP - serveur HTTP
