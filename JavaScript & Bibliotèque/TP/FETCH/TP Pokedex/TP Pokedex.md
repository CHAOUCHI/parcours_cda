# Projet - TP Pokdex
**Besoin** : Créer un Pokedex.

## Pré-requis
- Le DOM
 - API fetch pour effectuer des requetes HTTP
 ### Envoyer une requete HTTP et recupérer une réponse au format JSON.
 ```js
 fetch(url).then(reponseHTTP=>{
    return reponseHTTP.json();
 })
 .then((data)=>{
    console.log(data);
 })
 ```
### Envoyer une requete HTTP et recupérer une réponse au format Text.
 ```js
 fetch(url).then(reponseHTTP=>{
    return reponseHTTP.text();
 })
 .then((data)=>{
    console.log(data);
 })
 ```
 ### Exemple leboncoin.fr

 ```js
 fetch("www.leboncoin.fr").then(reponseHTTP=>{
    return reponseHTTP.text();
 })
 .then((pageHTML)=>{
    console.log(pageHTML);
 })
 ```

# Cahier des charges
|Tâches| Description | Contraintes |
|---|---|---|
|Affichage HTML| Afficher les 100 premier pokemon dans une CSS GRID| Utiliser la route https://pokebuildapi.fr/api/v1/pokemon/limit/100|
|Moteur de recherche| Ajouter une barre de recherche pour chercher un pokemon par son nom| Utiliser la route : https://pokebuildapi.fr/api/v1/pokemon/Gruikui |
