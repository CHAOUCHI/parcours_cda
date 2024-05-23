# Introduction à Angular

## Qu'est ce que RestFul ?

RestFul est une architecture d'application web qui consiste en un siteweb front-end communiquant avec une ou plusieurs API Rest (Representational state transfer) via le protocole HTTP. Le plus souvent les données sont échangés en JSON.

## Une API Rest ?
Une Api REST est un serveur web sans êtat (stateless). C'est à dire qu'à l'inverse d'un serveur web classique, l'api rest ne retient aucune données lors des requêtes : ni cookies, ni session, rien.

Cela permet a l'api d'être utilisable dès la première requête par n'importe quelle programme ayant la capacité d'effectuer des requêtes HTTP. REST permet de garantir que pour une même requête on reçoit toujours une même réponse.

Une API RESTful trouve sa puissance par sa capacité à se connecter à une nombres "infini" de front-end : site web, application web SPA, app mobile, montre, télévision.

***Vous créer une API REST qui expose des ressources via des url HTTP et un client HTTP les récupère via une requête HTTP.***

> Une api rest n'à donc pas conscience du nombre d'utilisateur qui la consommes.

## Application web moderne, les Single Page Application (SPA)
L'époque des sites web classique composés de plusieurs pages et de quelques fonctionnalités codez en PHP est révolue. Les applications modernes tendent à reproduire les interfaces des clients lourds *Desktop* dans un navigateur web. Les sites modernes d'aujourd'hui ne sont donc plus vraiment des *sites internet* mais des *applications web*.

Le client d'une architecture RESTFul est une application web entièrement codée en JavaScript qui consomme une où plusieurs API REST via des requêtes Ajax.

> *Asyncronous JavaScript and XML* ou *AJAX* est une méthode de programmation qui consiste a effecuter des requetes HTTP en JavaScript dans le navigateur. 
> Pendant longtemps le format de référence de l'ajax était le XML et la classe `XMLHttpRequest` permettait d'effectuer des requêtes HTTP en JavaScript. 
>
> Malgré sont nom, aujourd'hui AJAX envoi plutot du JSON et la méthode `window.fetch()` est venu remplacer `XMLHttpRequest` grâce à sa syntaxe moderne basé sur les `Promise`.

De nombreux frameworks permettent de créer des SPA, parmit les plus connus on retrouve :
- Angular, le framework du jour :). Développez par Google.
- Vue.js, un framework basé sur les web components. Développez par Evan You.
- Next.js développé par Vercel, une surcouche de la bibliotèque d'UI React (Facebook).

## Angular, pourquoi ?
Angular permet de résoudre une problématique classique du développement front-end de SPA : la mise à journée de l'affichage en fonction des données (variables) JavaScript.
### La fin de window.document ...
Habituellement la mise à jour de l'affichage se fait via le jeu de méthodes du DOM : createElement, addEventListener, querySelector, etc.

*Avec Angular plus besoin de tout ça : je déclare une variable et je l'affiche. Si la variable change l'affichage se mettera à jour **automatiquement**.*

On peut donc oublier l'api DOM et se concentrer sur la logique métier.

### Les fonctionnalités clés d'angular
- La liaison d'une données et de son affichage (data binding)
- La liaison d'un evenement et d'un fonction
- Le découpage de l'application en composant réutilisable et customisable. De véritable balise HTML maison en somme.
- La création de classe Service qui gère la logique non-UI. Angular les instancies et les rend disponible à l'ensemble de notre application via l'injection de dépendance.

En résumé Angular permet de créer une interface front-end réactif, stable et puissant.

## Ce que Angular ne fait pas.
Angular ne fait pas :
- De persitance de données dans une BDD SQL un back-end est néccessaire.
- Tout logique back-end est hors de portée d'Angular. Au final ce n'est que du code JS coté client et il vous faudra tout de même mêttre en place en back-end.

# Hello World et mise en place d'un projet Angular.
Nous utiliserons la dernière version d'angular en date de se cours : la version 17.

> Veuillez bien à avoir nodejs et npm installé sur votre ordinateur : https://nodejs.org/en

## Installation et création du projet
> *Tout la procédure d'installation est défini dans la doc : https://angular.dev/tools/cli/setup-local*

### Installer Angular cli
Comme tout les frameworks, Angular propose un interface en ligne de commande (CLI) pour créer et gérer le projet : le angular CLI.

Installez le cli avec npm.
```bash
npm install -g @angular/cli
```
> ***ATTENTION WINDOWS !*** Veuillez éxécuter la commande suivante avec `npm install`
> ```powershell
> Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
> ```

### Créer un projet
```bash
ng new my-app
```
Répondez au question par les réponses par défaut (ENTREE).

### Lancer le serveur local de développement
```bash
cd my-app
ng serve
```
Ouvrez votre navigateur à `localhost:4200`.

![alt text](image.png)
*La page par défaut d'un projet Angular !*

### L'arborescence d'un projet Angular
![alt text](image-1.png)

#### Vous pouvez les ignorer :
- `.angular`
- `.vscode`
- `.editorconfig`
- `README.md`
- `angular.json`, fichier de config du framework. Vous n'aurez jamais à le toucher.
- `tsconfig.json`, `tsconfig.app.json` et `tsconfig.spec.json`

#### Bon à savoir :
- `package.json` et `package-lock.json`, fichiers de conf inclus dans n'importe quel projet npm. Ils définissent les dépendences du projet.
- `node_modules`, le dossier qui contient les dépendences npm. Etant très volumineux il doit être inclus dans un `.gitignore`. Si le dossier est absent faite un `npm install`, après un *git clone* par exemple.

#### Le dossier src

![alt text](image-2.png)

- `index.html`, la page d'accueil de votre site. Rien de nouveau.
- `style.css`, le fichier de style général de votre site. Rien de nouveau non plus.
- `favicon.ico`. Le favicon de l'onglet, rien de fou non plus.
- `main.ts`, le fichier de script qui démarre le framework et mes en place votre premier composant. **N'y touchez jamais.**
- `assets`, un dossier qui contiendra nos images et médias : tout nos `src` ou `href` locaux commenceront par `"/asset/..."`. Exemple : `<img src="/assets/chat.png"/>`

> Angular utilise TypeScript, un langage de surcouche (superset) fortement typé de JavaScript. 
>Globalement nous allons avoir un compilateur qui va nous indiquer si une erreur de type c'est glissée dans le programme. Aussi il va falloir tout typer : variable, fonctions (paramètres et return value). 
>
>C'est grâce à TypeScript que Angular peut produire des applications solide qui ne crash pas de façon inopiné comme en JS vanilla (enfin presque, une erreur peut toujours se glisser *héhé*).

#### Le dossier app
La plupart de vos actions se ferons dans le dossier `app` : ils contiendra tout nos composants, nos classes et la logique métier de notre application.

![alt text](image-3.png)

- `app.config.ts`, met en place un router d'url pour notre appli. Angular le génère tout seul, vous n'aurez pas à y touchez.
- `app.routes.ts`, défini les différentes "pages" de notre appli. En effet une SPA n'à qu'une seul page : index.html mais Angular simule un système de page en lisant l'url du navigateur. ***Nous pourrons plus tard relier des urls à des composants et ainsi construire les différents "écrans" de notre application.***

Après l'installation avec `ng new`, angular nous a crée un composant principal qui est le point d'entrée de l'application, le composant `app` décrit dans les fichiers suivant :
- `app.component.html`, la vue, le html
- `app.component.css`, le style
- `app.component.ts`, le code
Egalement :
- `app.component.spec.ts`, les *test*. Ignorez le si vous ne s'avez pas se qu'est un test unitaire.

Tout application Angular possède au minimum un composant app. On voit d'ailleurs que c'est le premier et unique composant appelez dans le fichier index.html.
```html
<body>
  <app-root></app-root>
</body>
```

## Hello World
Pour l'instant notre appli affiche la page par défaut d'angular dans le composant app.

Nous allons faire le ménage en remplacant tout le contenu du fichier `app.component.html` par :

*app.component.html*
```html
<h1>Hello World !</h1>
```

Supprimez également la variable `title` du fichier `app.component.ts`.

*app.component.ts*
```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    
}
```

### Afficher un état.
Un composant angular est une classe qui représente une balise html via ses fichiers html,css et ts.

La méchanique principale d'Angular c'est la création d'une variable dans la classe et son affichage directement dans le html dans écrit le moindre code js complexe.

Je déclare une variable en tant qu'attribut publique de ma classe.
*app.component.ts*
```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    prenom = "Massinissa" // Je déclare une variable
}
```

Je l'affiche dans le html avec l'opérateur `{{}}`.

*app.componenent.html*
```html
<h1>Hello {{prenom}}</h1>
```

Résultat !
![alt text](image-4.png)
*c'est mon prénom héhé*

C'est. Tout.

Au revoir `querySelector()`, `innerText` ou encore l'horrible `getElementsByClassName()`. **Je crée une variable et je l'affiche c'est tout.**

*C'est beau n'est ce pas ?*

Cette opération s'appelle le ***text interpolation*** et il est décrit lui et son opérateur `{{}}` en détail dans la documentation d'Angular : https://angular.dev/guide/templates/interpolation

# Les bases d'Angular
> Retrouvez les bases d'Angular décrites dans la partie *Essentials* de la doc : https://angular.dev/essentials

## Text interpolation `{{ }}`
L'interpolation d'une donnée et d'une affichage dans du html se fait via la méchanique du *text interpolation* et l'opérateur `{{}}`.

1. Je défini un attribut publique dans ma classe Component
```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    pokemon = {
        name : "Pikachu",
        id : 5
    }
}
```
2. Je l'affichage dans le html
```html
<div>
    <h2>{{pokemon.name}}</h2>
    <p>{{pokemon.id}}</p>
</div>
```
Tout se qui se trouve entre accolades est du TypeScript je peux donc écrire des choses comme :
```html
<div>
    <h2>{{pokemon.name.toLowerCase()}}</h2>
    <p>{{pokemon.id}}</p>
</div>
```
## Property binding `[ ]`
De la même manière je peux affectuer une variable TS à n'importe qu'elle attribut HTML.
```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    pokemon = {
        name : "Pikachu",
        id : 5,
        image : "http://unsplash.it/200/200"
    }
}
```
Pour se faire j'utilise l'opérateur `[]` autour du nom de l'attribut HTML pour lui affectuer du code TypeScript
```html
<div>
    <h2>{{pokemon.name}}</h2>
    <p>{{pokemon.id}}</p>
    <img [src]="pokemon.image" />
</div>
```
Je peux le faire sur n'importe qu'elle attribut HTML.
```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    pokemon = {
        name : "Pikachu",
        id : 5,
        pv : 100,
        image : "http://unsplash.it/200/200"
    }

}
```
```html
<div>
  <h2>{{pokemon.name}}</h2>
  <p>{{pokemon.id}}</p>
  <h3>{{pokemon.pv}} /100</h3>
  <img [src]="pokemon.image" />
  <button [disabled]="pokemon.pv > 10" >Capturer !</button>
</div>
```
> Si le pokemon à plus de 10pv je désactive le bouton capturer, il est encore trop fort...
## Event binding `( )`
Nous pouvez attacher à un évenement du DOM l'appel d'une fonction grâce à l'opérateur `()`.

Par exemple pour un clic, il faut :

1. Déclarer une méthode publique dans la classe Composant
```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    pokemon = {
        name : "Pikachu",
        id : 5,
        pv : 100,
        image : "http://unsplash.it/200/200"
    }

    // Le dresseur attaque le pokemon.
    onAttaque(){
      console.log("Attaque !")
    }
}
```
2. Appeller la fonction quand le click se produit
```html
<!-- J'attaque au clic ! -->
<button (click)="onAttaque()">Attaque Charge !</button>

<div>
  <h2>{{pokemon.name}}</h2>
  <p>{{pokemon.id}}</p>
  <h3>{{pokemon.pv}} /100</h3>
  <img [src]="pokemon.image" />
  <button [disabled]="pokemon.pv > 10" >Capturer !</button>
</div>
```
Essayez de cliquer sur le bouton vous allez voir qu'un console.log se produit.

Le plus souvent je réagis à un event pour modifier une donnée. Ici je peut par exemple décrementer les pv du pokemon et angular va automatiquement mettre à jour l'affichage !

```ts
onAttaque(){
    this.pokemon.pv--;
}
```

```html
<button (click)="onAttaque()">Attaque Charge !</button>

<div>
  <h2>{{pokemon.name}}</h2>
  <p>{{pokemon.id}}</p>
  <h3>{{pokemon.pv}} /100</h3>
  <img [src]="pokemon.image" />
  <button [disabled]="pokemon.pv > 10" >Capturer !</button>
</div>
```
Voyez par vous même ! Lors du clique, la variable `pokemon.pv` est diminué et son affichage dans la page est donc réévalué par Angular ! C'est à se demander pourquoi le HTML ne fonctionne pas comment ça d'office :P
![alt text](image-5.png)

### Récupérer l'événement
Je peux réagir à une evenement mais je peux aussi récupérer cette event lorsqu'il se produit. Par exemple pour l'event `input`.

```html
<!-- Je fournis l'événement à la fonction avec $event -->
<input type="text" (input)="onTypeName($event)">
```

```ts
onTypeName(event : Event){
    const input = event.target as HTMLInputElement;
    console.log(input.value); // J'ai récupéré la valeur de l'input
}
```
> Nous verrons plus tard qu'il existe une méthode plus simple pour récupérer la valeur d'un input en la placant dans un état.

## Structure de controle
Les structures de controle if, else, for de Angular sont décrites dans la doc : https://angular.dev/essentials/conditionals-and-loops

### @if @else
Depuis la version 17 d'angular il est possible d'utiliser des structure de controles à la syntaxe très proche du JavaScript. Vous pouvez les placez directement dans le HTML pour conditionner l'affichage de certaine balise.

Soit ce composant TS 
```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    pokemon = {
        name : "Pikachu",
        id : 5,
        pv : 100,
        image : "http://unsplash.it/200/200",
        sauvage : true // Ce pokemon est sauvage !,
        dresseur : ""
    }
}
```

Mon pokemon peut être sauvage ou non. Si le pokemon est sauvage je peux le capturer avec le bouton capturer sinon mieux vaut ne pas afficher ce bouton.

```html
<div>
  <h2>{{pokemon.name}}</h2>
  <p>{{pokemon.id}}</p>
  <h3>{{pokemon.pv}} /100</h3>
  <img [src]="pokemon.image" />
  <!-- Si le pokemon est sauvage j'ai le droit à la capture ! -->
  @if(pokemon.sauvage){
    <button [disabled]="pokemon.pv > 10" >Capturer !</button>
  }
</div>
```

#### @else
Evidement le *else* existe avec Angular toujours précédé d'un arobase.

Si mon pokemon n'est pas sauvage je peut signaler le nom de son dresseur plutot qu'un bouton capturer!
```html
<div>
  <h2>{{pokemon.name}}</h2>
  <p>{{pokemon.id}}</p>
  <h3>{{pokemon.pv}} /100</h3>
  <img [src]="pokemon.image" />

  @if(pokemon.sauvage){
    <button [disabled]="pokemon.pv > 10" >Capturer !</button>
  }@else {
    <p>J'appartiens à {{pokemon.dresseur}} !</p>
  }
</div>
```

### @for
La boucle for est essentiel pour afficher plusieurs éléments d'une coup, comme un catalogue d'images ou une liste de produit dans un panier.

Elle permet de parcourir un tableau.

>TypeScript étant un langage formatement typé, le mieux lorsque l'on travail avec des objets et des tableaux c'est de définir un interface qui décrit les champs de mon objet.
>
>1. Dans le dossier `app` crée un dossier `interfaces`.
>2. Créez ensuite un fichier Pokemon.ts qui export un interface Pokemon.
>```ts
>export interface Pokemon{
>    name : string,
>    id : number,
>    pv : number,
>    image : string,
>   sauvage : boolean,
>  dresseur : string
>}
>```

Si j'ai un tableau de pokemons par exemple :
```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './interfaces/Pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    pokemons : Pokemon[] = [
      {
        name : "Pikachu",
        id : 5,
        pv : 100,
        image : "http://unsplash.it/200/200",
        sauvage : false,
        dresseur : "Sasha"
      },
      {
        name : "Salamèche",
        id : 25,
        pv : 100,
        image : "http://unsplash.it/200/200",
        sauvage : true,
        dresseur : ""
      }
    ];
}
```
Je peux tous les afficher d'un coup en placant la div de mon pokemon dans une boucle @for
```html

@for (pokemon of pokemons; track pokemon.id) {
  <div>
    <h2>{{pokemon.name}}</h2>
    <p>{{pokemon.id}}</p>
    <h3>{{pokemon.pv}} /100</h3>
    <img [src]="pokemon.image" />
  </div>
}
```
> Vous noterez la présence de track dans la boucle for. Il permet à Angular de différencier le élément du tableau et ainsi optimiser les performances d'affichage. Il suffit de lui fournir un identifiant unique comme un id ou un nom par exemple.

## Les composants
Jusqu'à maintenant notre composant app contient l'entièreté de notre application. Il faut découper l'appli en plusieurs composants unique pour augementer sa maintenanbilité et éviter le code spaguetti.

Nous souhaitons tout d'abord créer un composant pokemon-list qui gère l'affichage de notre liste de pokemons.

avec angular cli j'execute la commange `ng generate componenent` ou `ng g c`
```bash
ng generate component pokemon-list
```
Un nouveu dossier contant mon composnt est apparu !
![alt text](image-6.png)
Pour afficher le composant nouvellement crée dans app je dois :

1. L'importer dans le tableau includes de la classe AppComponent.
```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './interfaces/Pokemon';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonListComponent], // J'importe le composant
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    pokemons : Pokemon[] = [
      // ...
    ];
}
```
2. L'utiliser dans le code html de app. Les composant angular sont toujours préfixé de `app-`.

*app.component.html*
```html
<app-pokemon-list></app-pokemon-list>
```
Par défaut le composant contient une petite balise p pour vous dire qu'il fonctionne.

![alt text](image-7.png)

### Découpage d'un composant
Il est très important de découper corretement notre application en composants, ici `app` a trop de responsabilité nous allons donc déporter tout la logique néccessaire au composant `pokemon-list` dans ce dernier.

*pokemon-list.component.ts*
```ts
import { Component } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  pokemons : Pokemon[] = [
    {
      name : "Pikachu",
      id : 5,
      pv : 100,
      image : "http://unsplash.it/200/200",
      sauvage : false,
      dresseur : "Sasha"
    },
    {
      name : "Salamèche",
      id : 25,
      pv : 100,
      image : "http://unsplash.it/200/200",
      sauvage : true,
      dresseur : ""
    }
  ];
}
```

*pokemon-list.component.html*
```html
@for (pokemon of pokemons; track pokemon.id) {
    <div>
      <h2>{{pokemon.name}}</h2>
      <p>{{pokemon.id}}</p>
      <h3>{{pokemon.pv}} /100</h3>
      <img [src]="pokemon.image" />
    </div>
  }
```

Mon composant app s'en retrouve allégé :)
```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PokemonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
```
```html
<app-pokemon-list></app-pokemon-list>
```

### Découpage de composant enfant et @Input()
Notre composant *pokemon-list* est encore trop intelligent, pour allez plus loin nous allons découper la div d'un pokemon et en faire un composant pokemon-card qui sera réutilisable partout dans notre appli.

```ts
ng g c pokemon-card
```
> `ng g c` est un raccourcis de `ng generate component`

Comme précedement nous retiront toute la logique html et TS du composant père (pokemon-list) pour la collé dans le composant enfant (pokemon-card)
*pokemon-card.component.html*
```html
<div>
    <h2>{{pokemon.name}}</h2>
    <p>{{pokemon.id}}</p>
    <h3>{{pokemon.pv}} /100</h3>
    <img [src]="pokemon.image" />
</div>
```
*pokemon-list.component.html*
```ts
@for (pokemon of pokemons; track pokemon.id) {
    <app-pokemon-card></app-pokemon-card>    
}
```
> N'oubliez pas d'importer PokemonCard dans PokemonList.

**Mais la un problème survient !** la variable pokemon n'existe pas dans le composant PokemonCard.
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  // ???pokemon
}
```
Il nous faut un moyen de passer un pokemon à chaque PokemonCard de la boucle @for.
La solution est `@Input()` et la création d'attribut HTML personnalisé.

#### @Input() passer une propriété à un enfant
Dans PokemonCardComponent je peut définir les attributs HTML que le parent doit obligatoirement me passer.

Pour créer cette input je dois :

1. Ajouter un attribut publique à ma classe ProductCard
```ts
import { Component, Input } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
    pokemon : Pokemon;
}
```
2. Le définir en tant qu'Input
```ts
import { Component, Input } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input() pokemon : Pokemon;
}
```
3. Le pokemon est obligatoire au bon fonctionnement de PokemonCard, je peux donc définir cette Input comme oligatoire
```ts
import { Component, Input } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input({required:true}) pokemon : Pokemon;
}
```
Malgré la présence de required, Typescript nous embète etnous demande d'initaliser la variable pokemon d'une valeur.
![alt text](image-8.png)
4. Pour que TypeScript nous laisse tranquille nous allons utilisez le *definite assignement assertion operator* : `!`
 ```ts
import { Component, Input } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
    // Je suis sur que pokemon sera initalisé, ne t'inquiète pas TS
    @Input({required:true}) pokemon !: Pokemon; 
}
```

5. Une fois @Input() mis en place je peut me servir du property binding pour lui fournir un pokemon
```html
@for (pokemon of pokemons; track pokemon.id) {
    <app-pokemon-card [pokemon]="pokemon"></app-pokemon-card>    
}
```

## Les services
J'ai souvent besoin d'effectuer la même actions a travers mon application sans pour autant que cette action soit en rapport avec l'affichage. Dans une architecture propre, cette logique est placée dans une classe accessible de tous qui sert de "facade" à la logique qu'elle cache comme : des requêtes ajax, localStorage, etc.

Angular appelle se genre de classe un Service.

Un service est une classe générer via le angular cli qui je peux récupérer dans n'importe quelle composant si tant est que je l'ai déclaré a Angular dans le constructeur de mon composant.

Un service possède des méthodes publiques comme getProduct(), addToCart() ou encore getPokemons() par exemple.

### Créer un service
```bash
ng generate service api
```
```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
}
```
### Ajouter une méthode publique au service

```ts
import { Injectable } from '@angular/core';
import { Pokemon } from './interfaces/Pokemon';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }

  public async getPokemons(limit : number = 100) : Promise<Pokemon[]>{
    // Ma fonctionne asyncrone renvoie une promesse de Pokemon[]
    return fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/"+limit)
    .then(res=>res.json());
  }
}
```
### Se servir d'un service avec l'injection de dépendance
Pour se servir d'un service il faut demander à Angular de vous le fournir en tant qu'attribut private. 

Pour se faire vous allez déclarer ce service en tant que paramètre obligatoire de votre constructeur. Au moment ou Angular voudra instancier votre composant il va remarquer les paramètre du constructeur, instancier le service et vous le passer en paramètre du constructeur.

On appelle cette méchanique ***l'injection de dépendance***.

Concrètement voici la procédure :

1. Je déclare mon service en tant qu'attirbut private du constructeur
```ts
import { Component } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
    // injection de la dépendance ApiService par Angular
    constructor(private api : ApiService){}

    pokemons : Pokemon[] = [];
}

```
2. Fini ! :)

J'ai maintenant accès à mon service dans le composant PokemonList

### ngOnInit, phase d'initialisation du composant
Vous savez executer du code en réaction à un événement mais pas encore d'office à l'affichage d'un composant.

Ici je souhaite récupérer mes pokemons à l'initlisation du composant et ainsi modifier l'attribut pokemons pour afficher correctement tout mes pokemons

Pour se faire Angular nous permet de remplir la méthode ngOnInit qui s'appelle une fois à l'initialisation du composant. Il nous faut implémenter l'interface OnInit pour y avoir accès.

```ts
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{ // J'implemente l'interface onInit

  constructor(private api : ApiService){}

  pokemons : Pokemon[] = [];

    // ngOnInit est appelée par Angular une fois à l'initialisation du composant
  ngOnInit(): void {

    this.api.getPokemons().then(pokemons=>{
        // Je fetch tout mes pokemons et les places dans l'état pokemons.
        this.pokemons = pokemons
    });
  }
}
```
> N'oubliez pas les imports.

<!-- # Routing
Vous avez maintenant tout les bases pour concevoir une belle application Angular, à un détail près...
Les pages !
Notre application ne possède pas encore de navigation d'écran en écran, de routing en sommes.

Nous allons donc mettre ça en place. -->

<!-- ## Le routing, qu'est ce que c'est ?
Le routing c'est le fait de relié un url à l'affichage d'un composant
```
`ng g c pokemon-detail
import pokemon-card
read GET id
fetch pokemon by id
pass it to pokemon-card
`` -->