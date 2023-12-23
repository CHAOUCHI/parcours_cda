# Activité 1 - Manipuler des variables et la console

## Exercices :

1. **Salutation personnalisée**
    - Déclarez une variable `nom` et utilisez `prompt()` pour demander son nom à l'utilisateur.
    - Affichez une salutation personnalisée avec `console.log` du style : "Bonjour Mathieu ! Comment va tu ?".

2. **Somme de Deux Nombres**
    - Déclarez deux variables `a` et `b` et affectez leurs une valeur de type Number.
    - Faites en la somme et affichez le résultat avec `console.log`.

3. **Calcul d'Âge**
    - Déclarez une variable `anneeDeNaissance` et utilisez `prompt()` pour demander son année de naissance à l'utilisateur.
    - Calculez l'âge de l'utilisateur en utilisant l'année actuelle et affichez-la avec `console.log`.
    - **BONUS** : Utilisez un object de la classe Date pour récupérer dynamiquement l'année actuelle.

4. **Température**
    - Demandez la température en Celsius à l'utilisateur avec `prompt()`.
    - Convertissez la température en Fahrenheit et affichez le résultat avec `console.log`.

5. **Somme de Deux Nombres demandez à l'utilisateur**
    - Demandez deux variables `a` et `b` à l'utilisateur avec `prompt()`
    - Faites en la somme et affichez le résultat avec `console.log`.

6. **Majeur ou Non ?**
    - Demandez son age à l'utilisateur avec `prompt()`.
    - A l'aide d'un `if` affichez dans la console si l'utilisateur est majeur ou non

7. **Circonférence du Cercle**
    - Demandez à l'utilisateur le rayon d'un cercle avec `prompt()`.
    - Calculez la circonférence du cercle et affichez le résultat.

8. **Surface du Cercle**
    - Demandez à l'utilisateur le rayon d'un cercle avec `prompt()`.
    - Calculez la surface du cercle et affichez le résultat.

# Activité 2 : Fonctions en JavaScript

## Exercices :

1. **Addition avec Fonction**
    - Créez une fonction appelée `addition` qui prend deux paramètres et retourne leur somme.
    - Appelez la fonction avec deux nombres et affichez le résultat.

2. **Table de Multiplication**
    - Créez une fonction `tableMultiplication` qui prend un nombre en paramètre et affiche sa table de multiplication de 1 à 10.

3. **Salutation Personnalisée avec Fonction**
    - Créez une fonction qui prend le prénom en paramètre et retourne une salutation personnalisée sous la forme d'une String.
    - Utilisez `prompt()` pour obtenir le prénom de l'utilisateur.

4. **Vérification de Nombre Pair**
    - Créez une fonction qui prend un nombre en paramètre et renvoie true s'il est pair, sinon false grâce à l'opérateur modulo `%`.
    - Appelez la fonction avec différents nombres et affichez les résultats.

5. **Calcul de Moyenne**
    - Créez une fonction qui prend trois nombres en paramètres et renvoie leur moyenne.
    - Appelez la fonction avec trois nombres et affichez le résultat.

# Activité 3 : Méthodes Statiques et Fonctions Mathématiques

## Exercices :

1. **Arrondir à l'Entier Supérieur**
    - Utilisez `prompt()` pour demander un nombre décimal à l'utilisateur
    - Utilisez `Math.ceil()` pour arrondir le nombre à l'entier supérieur.
    - Affichez le resultat.

2. **Racine Carrée avec Prompt()**
    - Demandez à l'utilisateur un nombre, puis affichez la racine carrée de ce nombre grâce à la méthode `Math.sqrt()`

3. **Génération de Nombre Aléatoire**
    - Créez une fonction qui génère un nombre aléatoire dans l'intervalle [0,10[ grâce à la méthode `Math.random()`
    - Appelez la fonction et affichez le résultat.

<!-- 
Math.round(Math.random()*(max-min))+min; 
-->
3. **Génération de Nombre Aléatoire 2**
    - Créez une fonction qui génère un nombre aléatoire entre deux valeurs spécifiées grâce à la méthode `Math.random()`
    - Appelez la fonction et affichez le résultat.

4. **Affichage de la Différence Absolue**
    - Demandez à l'utilisateur deux nombres, puis affichez la différence absolue entre eux en utilisant `Math.abs()`.

# Activité 4 : Boucles for

## Exercices :

1. **Affichage de Nombres**
    - Utilisez une boucle `for` pour afficher les nombres de 1 à 5 dans la console.

2. **Carrés des Nombres**
    - Utilisez une boucle `for` pour afficher les carrés des nombres de 1 à 5 dans la console.

3. **Table de Multiplication**
    - Utilisez une boucle `for` pour afficher la table de multiplication d'un nombre spécifié par l'utilisateur.

4. **Affichage des Éléments d'un Tableau**
    - Créez un tableau de fruits.
    - Utilisez une boucle `for` pour afficher chaque élément du tableau dans la console.

5. **Affichage des Nombres Pairs**
    - Utilisez une boucle `for` pour afficher les nombres pairs de 2 à 10 dans la console.

6. **Somme des Nombres jusqu'à 100**
    - Utilisez une boucle `for` pour calculer la somme des nombres de 1 à 100.
    - Affichez le résultat dans la console.

7. **Modulo**
    - Utilisez une boucle `for` pour afficher les nombres de 1 à 20.
    - Pour chaque nombre, indiquez s'il est pair ou impair en utilisant l'opérateur modulo (`%`).

8. **Caractères d'une Chaîne**
    - Demandez à l'utilisateur d'entrer une chaîne de caractères.
    - Utilisez une boucle `for` pour afficher chaque caractère de la chaîne, avec pour  chaque caratère une nouvelle ligne.

9. **Tableau de Multiplication Personnalisé**
    - Utilisez une boucle `for` pour créer un tableau de multiplication personnalisé.
    - Demandez à l'utilisateur de spécifier la base et affichez les résultats.
    - L'affichage doit comprendre : le calcul et le resultat.
    - Chaque calcul doit être sur sa propre ligne.

# Activité 5 : Boucles while

## Exercices :

1. **Demande d'Âge Positif**
    - Utilisez une boucle `while` pour demander à l'utilisateur son âge jusqu'à ce qu'il entre un nombre positif.

2. **Devine le Nombre**
    - Générez un nombre aléatoire entre 1 et 10.
    - Utilisez une boucle `while` pour demander à l'utilisateur de deviner le nombre jusqu'à ce qu'il le trouve.

3. **Multiples de 3**
    - Utilisez une boucle `while` pour afficher les multiples de 3 jusqu'à 30.

4. **Comptage à Rebours**
    - Utilisez une boucle `while` pour afficher les nombres de 10 à 1 en ordre décroissant.

5. **Table de Multiplication Inversée**
    - Utilisez une boucle `while` pour afficher la table de multiplication à l'envers d'un nombre spécifié par l'utilisateur.

6. **Demander le Nom**
    - Utilisez une boucle `while` pour demander le nom de l'utilisateur jusqu'à ce qu'il entre un nom non vide.

# Activité 6 : Combinaison de Concepts (Boucles + Fonctions)

## Exercices :

1. **Multiplication avec Boucle**
    - Créez une fonction qui utilise une boucle `for` pour afficher la table de multiplication de 1 à 10 d'un nombre spécifié.

2. **Addition avec Boucle**
    - Créez une fonction qui utilise une boucle `for` pour calculer la somme des nombres de 1 à 100.
    - Affichez le résultat dans la console.

3. **Vérification de Devinette avec Fonction**
    - Créez une fonction qui génère un nombre aléatoire entre 1 et 10.
    - Utilisez une boucle `while` pour demander à l'utilisateur de deviner le nombre jusqu'à ce qu'il le trouve.

4. **Affichage de Nombres Pairs avec Fonction**
    - Créez une fonction qui utilise une boucle `for` pour afficher les nombres pairs de 2 à 20.
    - Affichez le résultat dans la console.

5. **Calcul de Moyenne avec Boucle**
    - Créez une fonction qui utilise une boucle `while` pour calculer la moyenne de nombres saisis par l'utilisateur.
    - La boucle doit se terminer dès qu'un nombre négatif est saisi.

6. **Demande d'Âge avec Vérification**
    - Créez une fonction qui utilise une boucle `do...while` pour demander l'âge de l'utilisateur.
    - La boucle doit continuer jusqu'à ce que l'utilisateur entre un nombre positif.

# Activité 7 : Combinaison de Concepts (Boucles + Fonctions + Tableau)

## Exercices :
<!-- 
function facto(x){
	let factorielle = 1;
	for(let i = 1;i<=x;i++){
		factorielle*=i;
	}
	return factorielle;
} -->

1. **Calcul de la Factorielle avec Fonction et Boucle**
    - Créez une fonction qui utilise une boucle `for` pour calculer la factorielle d'un nombre.
    - Demandez à l'utilisateur de fournir le nombre.

2. **Inverser un tableau avec Fonction et Boucle**
    - Créez une fonction qui utilise une boucle `for` pour inverser les éléments d'un tableau donné par l'utilisateur.
    - Affichez le tableau avant et après l'inversion.
    - Puis, recherchez sur la MDN une fonction qui permet de faire cette action.

3. **Recherche dans un Tableau avec Boucle**
    - Créez une fonction qui utilise une boucle `for` pour rechercher un élément spécifique dans un tableau donné par l'utilisateur.
    - Affichez si l'élément est trouvé ou non.
    - Demandez à l"utilisateur d'ecrire l'element qu'il souhaite rechercher et affichez tout les elements du tableau dans la question.
    - Puis, recherchez sur la MDN une fonction qui permet de faire cette action.

5. **Calcul de la Moyenne Pondérée**
    - Créez une fonction qui utilise une boucle `for` pour calculer la moyenne pondérée des notes fournies par l'utilisateur.
    - Pour chaque note demandez la note et le coeficiant à l'utilisateur.
    - **BONUS** : Utilisez un objet qui represente chaque Note avec comme attributs : value et coef.


<!-- 
function devine(){
let nb = Math.round(Math.random()*100);  
do{
    rep = Number(prompt("Quel est le nombre ?"));
    if(nb > rep)
      console.log("C'est plus");  
    else
      console.log("C'est moins !");
  }while(rep != nb);
  console.log(`Bien joué ${nb} est égal à ${rep} !`);
} 
-->
6. **Jeu de Devinette Amélioré**
    - Créez une fonction qui génère un nombre entier aléatoire entre 1 et 100.
    - Utilisez une boucle `while` pour permettre à l'utilisateur de deviner le nombre.
    - Fournissez des indices (plus grand ou plus petit) pour aider l'utilisateur.
<!-- 
suite = [0,1];
for(let i = 1;i<=8;i++){
	suite.push(suite[i-1]+suite[i]);
}
console.log(suite); -->
7. **Calcul de Fibonacci**
    - Utilisez une boucle `while` ou `for` pour générer les 10 premiers termes de la séquence de Fibonacci.
    - Affichez les résultats dans la console.

8. **Jeu de Multiplication**
    - Utilisez une boucle `while` pour créer un jeu de multiplication.
    - L'utilisateur doit répondre correctement à une série de questions de multiplication.
    - Le nombres de question doit être choisi par l'utilisateur.
    - Les calculs doivent être générés aléatoirement.


# Activité 8 : Méthodes de la Classe String
En JavaScript il est possible d'accéder à des fonction usuelle dans une string.
```js
    let  phrase = "Salut à toi Louis !";
    phrase.toLowerCase();   // => "salut à toi louis !"
```

## Exercices :

1. **Concaténation de Deux Chaînes**
    - Créez une fonction qui prend deux chaînes de caractères et les concatène.
    - Utilisez `prompt()` pour obtenir les chaînes de l'utilisateur et affichez le résultat.

2. **Majuscules avec Prompt()**
    - Demandez à l'utilisateur une phrase, puis affichez-la en majuscules grâce à la fonction `toLowerCase`

3. **Affichage du Deuxième Caractère**
    - Créez une fonction qui prend une chaîne de caractères en paramètre et affiche son deuxième caractère avec `charAt()`.

4. **Comptage d'Espaces dans une Chaîne**
    - Créez une fonction qui compte le nombre d'espaces dans une chaîne.

5. **Concaténation de Mots en Minuscules**
    - Demandez à l'utilisateur deux mots, puis affichez-les concaténés et en minuscules.

# Activité 9 : Méthodes des Tableaux (Array)
En JavaScript il est possible d'accéder à des fonction usuelle dans un tableau.
```js
    let  eleves = ["louis","massi"];
    eleves.forEach(function(eleve){
        console.log(eleve);
    });
```

La fonction usuelle `forEach` permet de raccourcir la syntaxe du `for` classique en fournissant une fonction de rappel ou *callback function*, c'est à dire une fonction qui est passée en paramètre d'une autre fonction.

## Exercices :

1. **Longueur de Chaque Mot avec ForEach**
    - Créez un tableau de mots et utilisez `forEach` pour afficher la longueur de chaque mot.

2. **Double de Chaque Élément avec Map**
    - Créez un tableau d'entiers et utilisez `map` pour créer un nouveau tableau avec chaque élément multiplié par 2.

3. **Filtrer les Nombres Pairs**
    - Filtrer les nombres pairs d'un tableau et affichez-les à l'aide de la méthodes `filter`
<!-- 
liste = prompt("Donne moi des nombres séparé par des virgules ?");

liste = liste.split(",").map(nombreTexte=>Number(nombreTexte));

max = liste[0];

liste.forEach((nb)=>{
	if(nb>max) max=nb;
});

console.log(max); 
-->

3. **Trouver le Plus Grand Nombre**
    - Demandez à l'utilisateur une liste de nombres séparés par des virgules, créez un tableau à partir de ces nombres, puis affichez le plus grand.
    - Vous pourrez avoir besoin de : `split`, `map` et `forEach` 


<!-- 
manques activité sur les objets
 -->