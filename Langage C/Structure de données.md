# Structure de données

Une structure de données est une variable qui contient plusieurs autres variables.

A la différence des tableaux une `struct` peut contenir des données de plusieurs types différents.

Les `struct` sont comme des types primitifs : `int`, `float`, `char` à la différence qu'une `struct` peut être fabriqué par le programeur et contenir plusieurs variables de type différent.

## Déclartion d'un type struct

Je déclare le nom de ma struct ainsi que ses attributs et leurs types. Je le fais **en dehors et avant la fonction `main()`**

```c
#include <stdio.h>

struct personnage{
  int pv;
  int endurance;
  char* nom;
};

int main()
{

    return 0;
}
```

## Instanciation d'une struct
Une fois ma `struct` crée je peux m'en servir comme un type classique pour créer des instances d'elle même. Des variables en somme.

```c
#include <stdio.h>

struct personnage{
  int pv;
  int endurance;
  char* nom;
};

int main()
{
    struct personnage mario;
    return 0;
}
```

## Affectation et accès au attributs
L'interet d'une struct c'est de représente un "objet" qui contient plusieurs informations variables.

Je peux accéder à ces variables, appellées attributs, grâce à l'opérateur `.`.

Je peux leurs affecter une valeurs.

```c
#include <stdio.h>

struct personnage{
  int pv;
  int endurance;
  char* nom;
};

int main()
{
    struct personnage mario;
    mario.endurance = 12;
    mario.pv = 5;
    return 0;
}
```

Et même accéder à ses attributs.

```c
#include <stdio.h>

struct personnage{
  int pv;
  int endurance;
  char* nom;
};

int main()
{
    struct personnage mario;
    printf("ENDurance:\t%d\n",mario.endurance);
    printf("PV:\t%d\n",mario.pv);
    mario.endurance = 12;
    mario.pv = 5;
    mario.pv++;
    mario.pv++;
    mario.endurance--;
    printf("ENDurance:\t%d\n",mario.endurance);
    printf("PV:\t%d\n",mario.pv);
    
    printf("ENDurance:\t%d\n",mario.endurance);
    printf("PV:\t%d\n",mario.pv);
    prinft("Calcul:\t%d\n",10+mario.pv/(mario.endurance*100*mario.pv));
    return 0;
}
```


**Exemple de création d'une `struc` et de la déclaration de deux instance de cette struct**
```c
#include <stdio.h>

struct personnage{
  int pv;
  int endurance;
  char* nom;
};

int main()
{
  /**
   * Je déclare un personnage
   */
  // la variable link est du type struct personnage.
  struct personnage link;
  
  // J'affecte une valeur à ces attributs
  link.nom = "Link"; 
  link.pv = 100;
  link.endurance = 500;

  printf("Je suis %s !\n",link.nom); // J'accède à un attribut
  
  /**
   * Je déclare un personnage
   */
  // la variable mario est du type struct personnage.
  struct personnage mario;
  // J'affecte une valeur à ces attributs
  mario.nom = "Mario";
  mario.pv = 2;
  printf("It's me %s !\n",mario.nom); // J'accède à un attribut

  return 0;
} 
```

## Exercices

1. **Déclaration de structures simples :**
   Déclare une structure appelée `Personne` avec les champs : `nom` (une chaîne de caractères), `age` (un entier), et `taille` (un flottant). Crée ensuite une fonction pour afficher les informations d'une personne.

2. **Structure imbriquée :**
   Crée une structure `Adresse` avec les champs `rue`, `ville` et `codePostal`. Puis crée une structure `Personne` contenant un champ `Adresse`. Écris un programme pour afficher les informations d'une personne et de son adresse.

3. **Tableau de structures :**
   Déclare une structure `Etudiant` avec les champs `nom`, `matricule` et `note`. Crée un tableau de 5 étudiants et écris une fonction pour afficher leurs informations.

4. **Structure avec pointeur :**
   Déclare une structure `Rectangle` avec les champs `largeur` et `hauteur`. Crée une fonction qui prend un pointeur sur un rectangle et calcule sa surface.
> **Rappel Passage par référence**
> Le seul moyen de modifier une structure ou même une variable à l'intérieur d'une fonction et passé l'adresse de la variable et non sa valeur ! 
>
> On appel ceci le passage par adresse.
>```c
> 
>```

5. **Manipulation de structures avec fonctions :**
   Crée une structure `Point` avec deux champs `x` et `y` (coordonnées). Écris une fonction qui prend deux `Point` en paramètre et retourne la distance entre ces deux points.

6. **Structure dynamique :**
   Déclare une structure `Livre` avec les champs `titre`, `auteur` et `annee`. Utilise l'allocation dynamique pour créer un tableau de livres. Demande à l'utilisateur d'entrer les informations sur chaque livre.

7. **Tri de structures :**
   Déclare une structure `Joueur` avec les champs `nom` et `score`. Crée un tableau de 5 joueurs et écris une fonction pour trier ce tableau par score croissant.

8. **Copie de structure :**
   Déclare une structure `Vecteur` avec les champs `x`, `y`, et `z`. Écris une fonction qui prend un `Vecteur` en paramètre, en crée une copie, et retourne cette copie.

9. **Structure avec énumération :**
   Crée une structure `Voiture` avec les champs `marque`, `modele` et une énumération `TypeCarburant` qui peut être `Essence`, `Diesel` ou `Electrique`. Écris une fonction qui affiche les informations d'une voiture.

10. **Liste chaînée simple avec structures :**
    Crée une structure `Noeud` représentant un élément d'une liste chaînée avec un champ `valeur` (entier) et un pointeur vers le prochain noeud. Implémente une fonction pour ajouter un élément à la fin de la liste chaînée et une autre pour afficher tous les éléments de la liste.


## Projet - RPG Textuel
Voici un projet de RPG texutel qui necessite les structs.

Vous allez faire un *Donjons et dragons like* en ligne de commande

|Tache|Description|
|-|-|
|Boucle d'évenement| Le jeu est une suite de question réponse, ou le joueur se voit poser une question comme : "Quel porte ouvir ? 1.Droite 2. gauche Ces décision entre des perte ou des gains de caratéristiques (les attiributs de sa struct). |
|Game Over| Si le joueur arrives à 0 point de vie le jeu s'arrête. 
|WIN | Le joueur obtient 1000piece d'or le jeu s'arrete.|
| Interface | Vous utiliserez system("clear") pour effacer l'écran à chaque fin de boucle et réafficher l'interface avec les nouvelles valeurs (pv piece).|
|BONUS (pauvreté) |Si le joueur arrives à zéro pièce d'or il va perdre 1pv et 1point d'endurance par tour|
|BONUS (fatigue extreme)| Si le joueur atteint 0 ENDurance Il va perdre 1pv par tour (cumulable avec l'effet pauvreté). Des évenement comme une auberge ou une cannette de redbull peuvent faire remonter l'endurance|

### Interface du jeu
```c
|----------------------------------|
|-------------RPG Texutel----------|
 PV                      18
 ENDurance               99
 Pièce(s) Or             999
 EVEN(T)ement rencontrés    6
|----------------------------------|
 Il y a devant vous un ours gigantesque ! Que faite vous ?

 1. Je le mord au visage ! Arrrg ! (-10 ENDurence)
 2. Je m'enfuis... (-3 ENDurance)
 3. Je cherche une arme (-1 ENDurance)
|------Tapez votre réponse---------|
 |
|----------------------------------|
Réponse 1, "Je le mord au visage !"
-10 END
-199 pv
+1 EVENT

"Vous sautez au viasage de l'ours et lui mordez l'oeil ! Mais malheursement il lève une patte fablement et vous déchire en deux..."
|----------------------------------|
        GAME OVER 
|----------------------------------|
|----------------------------------|

```