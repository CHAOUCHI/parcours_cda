# String - les chaines de caractère
Les chaines de caractère (`string`) permettent de stocker des textes.

## Déclarer et remplir une chaine de caratère.

En langage C une string est une suite de `char` stockés dans un tableau les uns à la suite des autres.

```c
char prenom[5] = {'M','a','s','s','i'};
```

- Ici je déclare un tableau de 5 éléments de type `char`.
- J'y stock ensuite 5 `char` les uns à la suite des autres.

Comme ma string est un tableau je peut y accéder avec l'opérateur d'indexation `[]`.

> **Attention je rappel que les tableaux commence à l'index `0` !**
```c
printf("%c\n",prenom[0]); // M
printf("%c\n",prenom[1]); // a
printf("%c\n",prenom[2]); // s
printf("%c\n",prenom[3]); // s
printf("%c\n",prenom[4]); // i
```

## Parcourir une chaine de caractère
Nous avons vu que je peut accéder au caractère d'une string avec l'opérateur d'indexation en écrivant *en dur* les index : `0,1,2,3,4`.

Avec une boucle for je peut parcourir une chaine de caractère automatiquement grâce à une variable d'index i.


1. A partir de la boucle for suivante, affichez chaque élément de la string en passant à la ligne à chaque fois avec `\n`.
```c
#include <stdio.h>
#define TAILLE 5

int main(){
    char prenom[5] = {'M','a','s','s','i'};

    for(int i = 0;i < TAILLE;i++){
        printf("%c\n",/*Codez ici ..*/);
    }
    return 0;
}
```

> `#define` permet de définir une constante. Le compilateur remplacera toutes les utilisation de `TAILLE` par la valeur `5`. Ca nous évite de reécrire `5` à chaque fois et évite ainsi les erreurs de frappe.

## Le caractère de fin de string `\0`.
Les chaine de caractère doivent toujours finir par le caractère NULL de la tableau ASCII. Celà permet de savoir quand est ce que le texte est fini.

Le caractère NULL s'écrit `\0` ou `0` en décimal.

```c
#include <stdio.h>
#define TAILLE 6

int main(){
    char prenom[TAILLE] = {'M','a','s','s','i',0};

    for(int i = 0;i < TAILLE;i++){
        printf("%c : %d\n",prenom[i],prenom[i]);
    }
    return 0;
}
```

Ce caractère est utilisable pour connaitre la fin d'une chaine de caractère.


Par exemple ici j'utilise une boucle `while` pour avancer dans le tableau jusqu'à le caractère `0`. Avec la fonction `putchar()` j'affiche une seul caractère à l'écran.
> putchar est une fonction fondamentale du C, sur laquelle print() est basée.
```c
#include <stdio.h>
#define TAILLE 6

int main(){
    char prenom[TAILLE] = {'M','a','s','s','i',0};
    int i = 0;
    while(prenom[i] != 0){
        putchar(prenom[i]);
        i++;
    }
    return 0;
}
```
Résultat :
```
Massi
```

Grâce à cette méchanique je peut mieux comprendre comment printf() fonctionne.

```c
#include <stdio.h>
#define TAILLE 6

int my_print(char* str);

int main(){
    char prenom[TAILLE] = {'M','a','s','s','i',0};
    int i = 0;
    my_print(prenom);
    return 0;
}

int my_print(char* str){
  int i = 0;
  while(str[i] != 0){
      putchar(str[i]);
      i++;
  }
}
```
Résultat :
```
Massi
```


## Déclarer une string litérale
Les string litérale sont des chaines de caractère qui possède déjà le caractère `0` à la fin.

Au lieu de déclarer un tableau de `char` je dois déclarer un pointeur sur `char`, c'est à dire *une variable qui contient l'adresse du premier caractère du tableau*.

```c
char* nom;
nom = "Chaouchi";
```
Ou en une ligne :

```c
char* nom = "Chaouchi";
```

Comme dit précedemment les string litérales contiennent déjà le caratère 0 à la fin.

Je peux le voir avec une boucle `for()`
```c
#include <stdio.h>

int main(){
    char* nom = "Chaouchi";
    int i = 0;
    for (int i = 0; i < 9; i++){
        printf("%d : %c\n",nom[i],nom[i]);
      
    }
    return 0;
}
```
```
67 : C
104 : h
97 : a
111 : o
117 : u
99 : c
104 : h
105 : i
0 : 
```

## Récupérer l'entrée utilisateur
Jusqu'ici vous avez utilisé `scanf()` pour récupéré l'entrée utilisateur. Cette fonction n'est pas utilisé dans l'industrie.


### fgets() pour récupérer la string tapée par l'utilisateur.
La fonction `fgets()` permet de récuperer une string tapée par l'utilisateur dans la console.

Voilà comment :

```c
#include <stdio.h>

int main(){
    char texte[100]; // Je déclarer un tableau de char
    fgets(texte,sizeof(texte),stdin); // Je le rempli grace à fgets()
    
    printf("%s\n",texte);
    return 0;
}
```

Les paramètres de `fgets()` sont :

- texte : le tableau de `char`à remplir
- sizeof(texte) : la taille du tableau `texte`, ici 100. C'est le nombre de caractère que l'ordinateur va lire. Si un utilisateur tape 150 lettres seules 100 seront enregistrées.
- `stdin` : C'est le fichier qui lit le clavier sous Linux. `fgets()` permet de lire 

#### Récupérer une string
```c
#include <stdio.h>

int main(){
    char texte[100]; // Je déclarer un tableau de char
    fgets(texte,sizeof(texte),stdin); // Je le rempli grace à fgets()
    
    printf("%s\n",texte);
    return 0;
}
```

#### Récupérer un `int`
La fonction `atoi()` ASCII to Integer transformer un texte en `int`.
```c
#include <stdio.h>
#include <stdlib.h>
#define BUF_SIZE 100

int main(){
    // Je déclare un tableau de char de 100 caratère
    char buf[BUF_SIZE];
    // Je le remplis avec fgets(), fgets rajoute un \0 à la fin pour en faire une string
    fgets(buf,BUF_SIZE,stdin);

    // Je convertis la string en interger avec atoi "24" deviens 24.
    int age = atoi(buf);
    printf("%d\n",age);

    return 0;
}
```

1. Afficher si l'utilisateur est majeur ou mineur
2. Redemander son age à l'utilisateur si il met une valeur négative ou 0.
3. Si l'utilisateur écrit du texte au lieu d'un entier `atoi()` renvoi `0`. Prennez en compte ce cas de figure et redemander son age à l'utilsiateur dans ce cas.


#### Récupérer un `float`
La fonction `atof()` ASCII to Float transformer un texte en `float`.
```c
#include <stdio.h>
#include <stdlib.h>
#define BUF_SIZE 100

int main(){
    // Je déclare un tableau de char de 100 caratère
    char buf[BUF_SIZE];
    // Je le remplis avec fgets(), fgets rajoute un \0 à la fin pour en faire une string
    fgets(buf,BUF_SIZE,stdin);

    // Je convertis la string en float avec atof "1.70" devient 1.70.
    float taille = atof(buf);
    printf("%f\n",age);

    return 0;
}
```

Le rollercoster demande de faire entre 1m40 et 1m90
1. Afficher si l'utilisateur est autoriser à faire le rollercoaster
2. Redemander sa taille à l'utilisateur si il met une valeur négative ou inférieur à 40cm.
3. Si l'utilisateur écrit du texte au lieu d'un float `atof()` renvoi `0.0000`. Prennez en compte ce cas de figure et redemander son age à l'utilisiateur dans ce cas.
#### Formater un texte
La fonction sprintf() permet de fabriquer une string qui contient des variables.
Sa syntaxe est très similaire à printf() sauf qu'aux lieu d'afficher le texte dans le temrinal il le place dans un tableau de `char`.

```c
#include <stdio.h>
#include <stdlib.h>
#define BUF_SIZE 100

int main(){
    // Je déclare un tableau de char de 100 caratère
    char* prenom = "Massinissa";
    int age = 24;
    char buf[BUF_SIZE];
    sprintf(buf,"Salut je suis %s et j'ai %d ans !\n",prenom,age);
    
    printf("%s",buf);
    return 0;
}
```

<!-- 
<!--  -->
Le soucis avec sizeof : pointeur sur char fiat 8octets
<!--  -->

Connaitre la taille d'une chaine de caractère. -->