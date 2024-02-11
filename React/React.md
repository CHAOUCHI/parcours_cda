# Introduction à React 
React JS est une bibliotèque JavaScript qui permet de créer des interfaces utilisateur (UI) réactive.

Un interface réactif est un interface qui se met à jour automatiquement lors du changement de son contenu, comme le résultat d'une recherche qui s'affiche lorsque l'utilisateur tape au clavier ou encore le nombre de produits du panier qui augmente lorsque l'on clique sur `+`.

Il est déjà possible de créer des UI réactive en pure JS mais c'est une action qui demande beaucoup de ligne de code pour quelque chose de finalement fondamentale.

## Différence entre du JavaScript Pure et ReactJS
### JS Pure
Prenons pour exemple la mise à jour du nombre d'article d'un panier en JS pure.

*index.html*
```html
<h1>Ma boutique</h1>
<div>
    <p>Adidas taille 42</p>
    <p>Nombre de produit : <span id="nb_produit"></span></p>
    <button id="add_btn">Ajouter au panier</button>
</div>
```

*script.js*
```js
// Je récupère les balises
const nbProduitTag = document.querySelector("#nb_produit");
const addButton = document.querySelector("#add_btn");

// J'initialise le compteur
let compteur = 0;
// Je met à jour l'affichage du compteur dans la balise
nbProduitTag.innerText = compteur;

addButton.onclick = ()=>{
    // J'incrémente le compteur
    compteur++;
    // Je met à jour l'affichage
    nbProduitTag.innerText = compteur;
}
```

### React JS

`React` vous permet de créer vos propre balises HTML appelées `composant`.

*HTML*
```jsx
<h1>Ma boutique</h1>
<Produit />
```

script.js
```jsx
import { useState } from "react";

function Produit(){
    // Je créer une variable compteur et une fonction setCompteur qui la modifie
    const [compteur,setCompteur] = useState(0); // par défaut compteur = 0
    
    function addProduct(){
        setCompteur(compteur+1);
    }
    
    // Je renvoi le HTML final de mon composant
    return (
        <div>
            <p>Adidas taille 42</p>
            <p>Nombre de produit : {compteur}</p>
            <button onClick={addProduct}>Ajouter au panier</button>
        </div>
    );
}
```

Dans le contexte d'une application complète la syntaxe React est beaucoup plus courte et à l'avantage de contenir le code HTML et JS traitant du produit au même endroit. Vous remarquerez que React met également à jour le nombre de produit de votre balise `<p>` sans jamais vous demandez d'ecrire le moindre `querySelector`, `innerText` ou `createElement` etc. Tout se met à jour gràace la fonction `setCompteur`.

***Grâce à React plus besoin de manipuler le DOM, React le fait pour vous.***

### Difficultés d'utilisation de React
React est une bibliotèque JavaScript moderne et utilise donc certaines syntaxes qui vous sont probablement étrangères.

*Je recommande la lecture de la MDN.*

#### import from
La grande majoritiée des projets JavaScript modernes divisent leurs codes en plusieurs fichiers JS, appelées `module`, grâce à la syntaxe `import  from "module" `.

Ici j'importe la fonction `useState` depuis le module JavaScript `react`.
```js
import { useState } from "react";
```
J'utilise également le `destructuring assignement` qui permet d'extraire une méthode d'un objet. Le module `"react"` exporte un objet mais nous n'importons que la méthode `useState` de cet objet.
#### Destructuring assignement
> Plus d'info sur le `destructuring assignement` sur le guide de la MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

En JS je peux utiliser le `destructuring assignement` pour déclarer des variables à partir du contenu d'un array.

```js
const fruits = ["pomme","banane","poire"];
const [apple,banana] = fruits;

console.log(apple);     // => "pomme"
console.log(fruits[0]);     // => "pomme"

console.log(banana);    // => "banane"
console.log(fruits[1]);     // => "banane"
```

La fonction `useState` renvoi un array, dites vous que la syntaxe :
```js
const [compteur,setCompteur] = useState(0);
```
peut également s'ecrire :
```js
const stateInfos = useState(0);
const compteur = stateInfos[0];
const setCompteur = stateInfos[1];
```
Cette syntaxe est particulièrement longue, ont préfère donc utiliser le `destructuring assignement`.

Vous vous habiturez rapidement à ces nouvelles syntaxes et sachez quelles ne sont pas spécifiques à `React` mais au langage JavaScript. Apprenez les donc bien car TOUT les frameworks JS utilise, à un moment donnée, `import` ou le `destructuring assignement`.

## Pré-requis à React 
### JSX, du HTML dans le JavaScript ?!
La plupart du temps en React vous allez écrire du JSX, c'est à dire un genre de HTML directement dans JavaScript.

```jsx
import { useState } from "react";

function Hello(){
    const prenom = "Rémi";
    // Ceci est du JSX, du HTML dans le JavaScript.
    return <h1>Hello {prenom}</h1>; 
}
```

Le JSX permet d'éviter d'écrire ceci :
```js
import { useState, createElement } from "react";

function Hello(){
    const prenom = "Rémi";
    // Sans le JSX le code est moins clair
    return createElement("h1",{},`Hello ${prenom}`); 
}
```
Concretement à la compilation le JSX va remplacer le code JSX par des fonctions createElement tout simplement.

Le JSX n'est pas du JavaScript il faut donc le compiler en JavaScript. Pas de panique tout ceci se configure tout seul grâce à un outil utilisé dans énormement de projet JavaScript moderne `Vite`.

### Vite 
https://vitejs.dev/
![alt text](image-7.png)
Vite est un bundler JavaScript, concrètement c'est un programme qui va lire votre code JavaScript, JXS ou encore TypeScript et le compiler en un code optimisé pour les navigateurs.

Vite vous fournit également un serveur web local de développement donc pas besoin de WAMP, XAMPP ou autre.

Pour créer un projet react avec vite il vous faut :
1. Installer NPM (NodePackageManager)
2. Taper une commande pour créer un projet JavaScript pré configuré pour React.
3. Taper une commande pour lancer le serveur web 
4. Commencez à coder :)

> Vite peut très facilement être dockerisé via une image docker de node et un port binding du port (-p).

## Créer un projet React avec Vite.
### 1. Installer NodeJS
#### Windows
Téléchargez `node` ici : https://nodejs.org/

#### Mac
```bash
brew install node
```

#### Linux (Debian / Ubuntu)
```bash
apt install nodejs npm
```
> Attention cepandant apt n'utilise pas la dernière version de nodejs, pour l'avoir il rajouter le dépot à votre machine linux avant de l'installer. 
> Voir les instructions d'installation ici : https://github.com/nodesource/distributions?tab=readme-ov-file#using-ubuntu

### 2. Créez le projet avec Vite
Dans votre dossier de travail.
```bash
npm create vite
```
Répondez au question de configuration comme ceci.

![alt text](image-1.png)

### 3. Ouvrez le projet dans VSCode
Vite vous à créez une application exemple dans le dossier `my-app` (le nom que vous avez donnez au projet).

**Ouvrez ce dossier dans VSCode.**

![alt text](image-3.png)

- **`/public`, contiendra vos images**, vidéos ou audio. Toute choses qui néccessite un accès publique, comme l'attribut `src` de la balise `<img>` par exemple, doit être dans le dossier `public`.
- **`/src`, contient tout votre code.** C'est ici que vous travaillerez la majorité du temps.
- **`index.html`, la page d'accueil du site.** C'est le pointde départ de votre application.
- **`.eslintrc.cjs`**, est un fichier de configuration qui aide à repèrer des bugs dans votre appli. Vous pouvez ignorer ce fichier.
- **`.gitignore`**, défini les dossier ignorer par git.
- **`package.json`** et **`package-lock.json`**, gère les dépendances de npm installées avec `npm install`.
- **`vite.config.js`**, configure `Vite` pour fonctionner sans encombre avec `React`.

### 4. Lancez le serveur web localhost
Ouvrez un terminal dans votre projet VSCode et tapez :
```bash
npm install # Installation des dépendances du projet
npm run dev # Lancement du serveur web localhost
```
- `npm install` installe les éventuelles dépendances du projet. 
- **`npm run dev` lance un serveur web** pour votre projet et vous forunit l'adresse ip du serveur, habituellement `localhost:XXXX`.
> Une fois `npm install` effectuée, vous n'aurez pas besoin de la relancer la prochaine fois.

Lorsque vous voyez ce message votre projet est prêt et disponible via l'adresse localhost fournit par vite.
![alt text](image-4.png)

<strong style="font-size:30px">C'est fait !</strong>

### "Ca marche pas !" En cas de soucis.
Si vous n'arrivez pas à faire fonctionner les commandes ci-dessus, voici le résumé, vous pouvez les copiez-coller. ;)

Dans votre dossier de travail ouvrez un terminal et tapez :
```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

## Un premier pas sur React
React s'occupe exlusivement de l'UI et pour se faire il va créer un DOM virtuel qu'il copiera dans le véritable DOM de votre application quand un rafrachissement est neccessaires.

React à donc besoin d'un point d'entrée dans votre page html pour fonctionner, une balise d'origine dans laquelle toute l'arborescence de l'application React se trouvera.

### Hello World
1. Supprimer tout le contenu du dossier `/src`.
2. Dans le dossier `/src`, créez un fichier nommée `main.jsx`, ce fichier est le point d'entrée de notre application.
3. Dans le fichier `src/main.jsx ` écrivez un hello world.

*/src/main.jsx*
```jsx
console.log("Hello Main");
```

4. Dans le fichier */index.html* vérifiez que le fichier */src/main.jsx* est bien importé.

*/index.html*
```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My App</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- J'importe main.jsx dans le html -->
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

5. Ouvrez la console du navigateur, vous devriez y voir le message `"Hello Main"`.

> ***Extension .jsx dans la balise `<script>`*** 
>```html 
><script type="module" src="/src/main.jsx"></script>
>```
>`.jsx` est une extension inconnu des navigateur web mais `Vite` compile notre code en JavaScript à chaque sauvegarde donc tout va bien. Au final le code source sera importé sera en `.js`. :)

### Votre premier composant React.
Tout fonctionne, il est temps de créer notre premier composant React.

Un composant est la brique élementaire de React, vous pouvez imaginez les composant React comme des nouvelles balise HTML sur mesure que vous codez en JavaScript(plus précisement en jsx).

1. Verifier la présence d'une balise `<div>` avec pour id `root` dans le `index.html`. C'est dans cette balise que React place les composants que vous codez.

*/index.html*
```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My App</title>
  </head>
  <body>
    <!-- Une balise vide avec pour id root -->
    <!-- C'st cette balise que React remplira avec les composants que vous  coderez -->
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

Dans le fichier /src/main.jsx.

2. Utilisez la méthode ReactDOM.createRoot() pour créer un composant React lié à la balise `div.root`.
*/src/main.jsx*
```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));
```

3. Affichez le composant avec la méthode render.
*/src/main.jsx*
```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));
/* Affichage du composant root  */
root.render(<h1>Hello World</h1>);
```
Ce code affiche(render) le composant root dans la balise #root. Le contenu du composant root est un simple h1 Hello World.
![alt text](image-5.png)

Ce code est le point de départ de tout projet React. Il vous paraitera plus clair plus tard mais vous n'avez pour l'instant pas d'interet à comprendre le processus plus que les explications fournit plus haut.

#### En résumé
1. La méthode ReactDOM.createRoot permet de créer un composant React lié à une véritable balise HTML.
2. La méthode render permet d'afficher le composant.
3. La méthode render prend en paramètre du JSX, soit le HTML à afficher.

C'est la seul fois ou nous utiliseront createRoot pour créer un element React toute la suite ce fera en JSX.

### L'encapsulation des composants
Pour l'instant toute votre application est un simple `<h1>`, évidemment le code va grossir et nous voulons donc encapluser tout notre code React dans un composant appelé **`<App />`**.

1. Dans le fichier main.jsx créez une fonction App() qui renvoi un `<h1>` entant que JSX.

*src/main.jsx*
```jsx
// à la suite du code précédent...

function App(){
    return <h1> Hello World</h1>;
}
```
Ceci est un composant fonctionnel, c'est à dire un composant React créer dans une fonction. C'est sous cette forme que la majorité de votre code React sera écrit.

2. Affichez le composant `App` dans la fonction `root.render()`.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App/>);  // Afficher le nouveau composant App

function App(){
    return <h1> Hello World</h1>;
}
```

Le composant nouvellement crée est affichez en tant que point de départ de notre appli dans la balise *#root*.
Pour améliorer la clareté du code, JSX nous permet d'écrire le composant App comme du HTML.
```jsx
root.render(<App/>);
```
En réalité le code suivant donnerait le même résultat.
```js
root.render(App()); // Même résultat mais moins explicite.
```

### Syntaxe du JSX
Le JSX permet d'écrire du pseudo HTML contenant du HTML classique et les nouveaux composants fonctionels que vous créez. Sa syntaxe est très simple.

De base JSX permet s'implement d'ecrire du bon vieux HTML.
```jsx
function App(){
    return <p>Je suis un paragraphe</p>;
}
```
Si vous avez besoin d'ecrire des **balises** sur **plusieurs lignes** il faut mettre tout votre **JSX dans une balise div et entre parentèses**.
```jsx
function App(){
    return (
     <div>
        <h1>Titre</h1>
        <img src="https://unsplash.it/100/100"/>
        <p>Je suis un paragraphe</p>
    </div>
    );
}
```
Un composant ne peut renvoyez au final qu'une seul et unique balise voilà pourquoi j'encapsule le tout dans une balise `<div>`.

> **Attention !** Remarquez que la balise `<img />` est une balise orpheline en JSX il **OBLIGATOIRE de finir les balises orpheline par un slash / .**

#### Executer du JavaScript dans du JSX
JSX permet d'exectuer du JavaScript dans le JSX, pour se faire il faut placer le JS entre accolades.

Ici j'affiche une variable dans mon JSX.
```tsx
function App(){
    const name = "Massinissa";
    return <h1>Bonjour {name}</h1>;
}
```
Je peux mettre n'importe quel JavaScript entre les accolades même si, pour des raisons de clarté, ont préfère effectuer le maximum de traitement JS en dehors du JSX.
```tsx
function App(){
    const name = "Massinissa";
    const birth = new Date("12-31-1999");
    return <h1>Bonjour {name} tu as {2024 - birth.getFullYear()} ans</h1>;
}
```
On préfère extraire la logique du JSX comme ceci.
```tsx
function App(){
    const name = "Massinissa";
    const birth = new Date("12-31-1999");
    const age = 2024 - birth.getFullYear();
    return <h1>Bonjour {name} tu as {age} ans</h1>;
}
```
#### Afficher le contenu d'un array JavaScript dans du JSX
Un grand classique de la manipulation de DOM c'est l'affichage du contenu d'un array via une boucle for.

Avec JSX, on peut simplement passer un array entre accolades pour qu'il affiche tout le contenu de l'array.

Prenons un tableau d'élèves à afficher dans une liste.
```tsx
function App(){
    const eleves = ["Mathieu","Arnaud","Cléo","François"];
    return (
        <div>
            <h1>La liste des éleves</h1>
            {eleves}
        </div>
    );
}
```
![alt text](image-10.png)

Pour chaque élève il faut créer une balise `<li>` contenant le nom. Cette action est réalisable facilement avec un `map()`.
```tsx
function App(){
    const eleves = ["Mathieu","Arnaud","Cléo","François"];
    const elevesElements = eleves.map( eleve => <li>{eleve}</li> );
    return (
        <div>
            <h1>La liste des éleves</h1>
            <ul>
                {elevesElements}
            </ul>
        </div>
    );
}
```
![alt text](image-11.png)

> #### **Rappel `Array.prototype.map()`**
> La méthode `Array.prototype.map()` permet de transformer un tableau en un nouveau tableau composés des valeurs de retour de la fonction callback passée en paramètre. Si vous devez modifier tout le contenu d'un tableau sans en changer le nombre d'éléments c'est un `map()` qu'il vous faut.
> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map

La constante `elevesElements` est un array de composant React, le JSX ne fait que parcourir le tableau et afficher chaque composants dans l'ordre.

*Mapper* est array JavaScript en un nouveau array de composants est une actions très commune en React. En situation réel ce tableau d'élèves pourrait très bien venir d'une base de données ou d'une API par exemple. 

On peut d'ailleurs supprimer la constante `elevesElements` et placer le `map()` dans le JSX directement.

```jsx
function App(){
    const eleves = ["Mathieu","Arnaud","Cléo","François"];
    return (
        <div>
            <h1>La liste des élèves</h1>
            <ul>
                {eleves.map( eleve => <li>{eleve}</li> )}
            </ul>
        </div>
    );
}
```

### Exercice 1 - La moyenne de Maxime
Affichez la liste des notes de Maxime et la moyenne de ses notes.
> **Astuce** : vous pouvez utilisez la fonction **Array.prototype.reduce()**.
```jsx
function App(){
    const notes = [20,10,11,7,13];
    return (
        <div>
            <h1>La moyenne de Maxime </h1>
            <h2>Notes :</h2>
            <ul>

            </ul>
            <p>Moyenne générale : </p>
        </div>
    );
}
```
![alt text](image-12.png)
***Attention correction juste en dessous !***
<pre>






















</pre>
#### Correction Exercice 1 - La moyenne de Maxime
```jsx
function App(){
    const notes = [20,10,11,7,13];
    const average = notes.reduce((sum,note)=>sum+note) / notes.length;
    return (
        <div>
            <h1>La moyenne de Maxime </h1>
            <h2>Notes :</h2>
            <ul>
                {notes.map( note => <li>{note} / 20</li> )}
            </ul>
            <p>Moyenne générale : {average}</p>
        </div>
    );
}
```
`Arrap.prototype.reduce()` est à utiliser dans le cas où vous voulez récuperez une seul valeur à partir d'un tableau. Ici par exemple à partir du tableau de note je veux en récupérer la somme.

Le même résultat est obtenable à partir d'une variable tampon et une boucle for classique sur le tableau de notes. 

```jsx
function App(){
    const notes = [20,10,11,7,13];
    // -- Equivalent de la fonction reduce ---
    let sum = 0;  // la variable tampon qui contient la somme des notes
    for (let i = 0; i < notes.length; i++) {
        sum+= notes[i];        
    }
    // ---------
    const average = sum/notes.length;
    return (
        <div>
            <h1>La moyenne de Maxime </h1>
            <h2>Notes :</h2>
            <ul>
                {notes.map( note => <li>{note} / 20</li> )}
            </ul>
            <p>Moyenne générale : {average}</p>
        </div>
    );
}
```

Les méthodes map, reduce et filter sont à connaitre sur le bout des doigts pour écrire du JavaScript plus concis. 

### Exercice 2 - La liste des élèves
Affichez la liste des élèves, pour chaque élève, affichez son prénom et sa classe.
```jsx
function App(){
    let eleves = [
        { name : "Massinissa", course : "4eme" },
        { name : "Arnaud", course : "3eme" },
        { name : "Cléo", course : "3eme" },
        { name : "Louis", course : "6eme" },
    ];
    return (
        <div>
            // Codez ici ...
        </div>
    );
}
```
![alt text](image-13.png)
***Attention correction juste en dessous !***

<pre>






















</pre>

#### Correction Exercice 2 - La liste des élèves
```tsx
function App(){
    let eleves = [
        { name : "Massinissa", course : "4eme" },
        { name : "Arnaud", course : "3eme" },
        { name : "Cléo", course : "3eme" },
        { name : "Louis", course : "6eme" },
    ];
    const elevesElements = eleves.map((eleve)=>{
        return (
            <div>
                <h2>{eleve.name}</h2>
                <p>{eleve.course}</p>
            </div>
        );
    });
    return (
        <div>
            {elevesElements}
        </div>
    );
}
```

## Les composants
La conception d'une application React comme toujours par le découpage de la maquette en composants.


- Les composants
  - decoupage d'une maquette en arboresence de composants
  - Props - paramètrer un composant
  - state - des variables dans mon composant
    - Attention au boucle infini
  - Events - Réagir au evenement
    - onClick
    - ...
  - affichage conditionel avec JSX
- Les composants pure
  - Aucune modification de variable externe
  - Attention au boucle infini


## Projet Pokedex
- Arborescence de composants
  - Maquette, diviser un écran en plusieurs composants
  - Les composants parents et enfant et le composant racine App
  - PokemonList
  - ...