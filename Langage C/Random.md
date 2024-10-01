# Random :Obtenir des valeurs aléatoire en C

En informatique l'alétoire est impossible, on parle plutot de pseudo-aléatoire, c'est à dire d'une valeur généré via une formule mathématique. 

En C cette formule est implémenté par la fonction `rand()` de la bibliotèque `stdlib`.

> ***Attention le code suivant ne génère pas encore une valeur aléatoire, nous verrons pourquoi plus tard !***
```c
#include <stdlib.h>
#include <stdio.h>

int main(){
    int r = rand();
    printf("%d\n",r);
    return 0;
}
```
### Exercice

1. Testez le code précédent plusieurs fois et observez la valeur sortie à chaque execution. Quand concluez-vous ?

## La seed, générer des valeurs aléatoire différentes.
Si vous utilisez rand() toute seule vous allez toujours générer la même valeur car la fonction de génération de rand() génére une valeur à partit d'une valeur appellé seed(graine).

Pour une même seed rand() fabriquera toujours la même valeur.

La fonction srand() permet de définir cette seed.

Ici je donne des seed différente et j'obtients donc des valeurs différentes.

```c
#include <stdlib.h>
#include <stdio.h>
int main(){
    int r;

    srand(1);
    r = rand();
    printf("%d\n",r);

    srand(19);
    r = rand();
    printf("%d\n",r);
    return 0;
}
```


Un méthode classique de génération de seed est d'utilise le temps UNIX (voir */Langage C/Time.md* ).

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    srand(time(NULL));
    int r = rand();
    printf("%d\n",r);
    return 0;
}
```

### Exercice
2. Executez le code suivant et expliquez pourquoi la valeur aléatoire change lentement.
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    while(1){
        srand(time(NULL));
        int r = rand();
        printf("%d\n",r);
    }
    return 0;
}
```

### Générer un nombre aléatoire entre 0 et 1
Le nombre aléatoire généré est compris entre `0` et la constante `RAND_MAX`.

Pour générer un nombre aléatoire entre 0 et 1 je dois diviser le nombre par `RAND_MAX`.
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    while(1){
        srand(time(NULL));
        float r = (float)rand()/RAND_MAX;
        printf("%f\n",r);
    }
    return 0;
}
```
#### Exercices
3. Générez un nombre compris entre 0 et 10
4. Générez un nombre compris entre 0 et 17
5. Générez un nombre compris entre 5 et 15
6. Générez un nombre compris entre deux variables `float from` et `float to`.


<!-- 
Correction 6.
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    while(1){
        srand(time(NULL));
        float r = (float)rand()/RAND_MAX;
        int from = 5;
        int to = 15;
        printf("%f\n",r*(to-from)+from);
    }
    return 0;
}
``` -->


## L'entropie - Générer un nombre aléatoire solide entre A et B

Générer un nombre aléatoire avec la fonction time() possède plusieurs défauts:

- On ne peux générer des nombres qu'une fois toutes les secondes.
- La seed est facilement devinable, il suffit de connaitre la date à laquelle la seed à été générée pour trouver la valeur aléatoire.


**La clé d'une bonne valeur aléatoire réside dans sa seed**.

Plus la seed est imprévisible plus la valeur sera aléatoire.

Il nous faut donc un moyen de fabriquer une seed la plus aléatoire possible.

La solution réside dans la fonction `getentropy()`.

### `getentropy()` obtenir des valeurs imprévisibles.
Pour fabriquer une seed de grande qualitée il faut obtenir des valeurs imprévisibles.

La fonction `getentropy()` renvoie un tableau de `int` aléatoires basés sur les valeurs de tous les ports de l'ordinateur (processeur, carte wifi, usbs, carte graphique). Plus il se passe de chose sur la machine plus la *seed* sera imprévisible.

La fonction `getentropy()` fait partie de la bibliotèque `sys/random.h`

```c
#include <sys/random.h>
#include <stdlib.h>
#include <stdio.h>

int main(){
    // Generating a random buf of bytes
    int buf[255];
    getentropy(buf,sizeof(buf));
    for(int i = 0; i < 255;i++){
        printf("%d\n",buf[i]);
    }
}
```

1. Executer le code suivant et observer la suite d'octets aléatoire affichés à l'écran par le `printf()`.
2. Faite la somme de tout ces `int` et stockez la dans une variable `int seed` qui contiendra notre *seed* de qualité.
3. Maintenant que vous avez cette *seed* fournissez la à la fonction `srand()` puis utiliser `rand()` dans une boucle `while` infinie.Ainsi vous générerez une infinité de nombre aléatoire à haute vitesse. Afficher cette suite de valeur aléatoire à l'infini avec un `printf()` dans le `while`.
4. Complétez la fonction suivante (`aleatoire()`) pour qu'elle fabrique une nombre aléatoire entropique compris entre `from` et `to` :
```c
#include <stdio.h>
#include <stdlib.h>
#include <sys/random.h>

float aleatoire(float,float);

int main(){
    while(1){
        float r = aleatoire(5,15);
        printf("random : %f\n",r);
    }
    return 0;
}


/**
 * Generating a random value between from and to
 * @dependecies : stdlib.h, sys/random.h
 */
float aleatoire(float from, float to){
    // Generating a random buf of bytes
    int buf[255];
    getentropy(buf,sizeof(buf));
    
    // Generating a random seed with the sum of all random bytes.
    int seed = 0;
    for (int i = 0; i < sizeof(buf); i++)
    {
        // addition des éléments du tableau d'int buf pour fabriquer une seed de qualité
        /**
            TO DO...




        */
    }
    // Give the seed to srand
    srand(seed);
    // Generating random value
    int valeur_random = rand();
    float random_from_to = /*  ???? calcul d'un random entre from et to */
    return random_from_to;
}
```
<!-- 
#### *Valeur random de qualité grâce à l'entropie entre 0 et RAND_MAX*
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <sys/random.h>

int main(){
    while(1){

        int buf[255];
        getentropy(buf,sizeof(buf));
        int seed = 0;
        for (int i = 0; i < sizeof(buf); i++)
        {
            seed+=buf[i];
        }
        printf("seed : %d\n",seed);
        
        srand(seed);
        int valeur_random = rand();
        printf("random : %d\n\n",valeur_random);
    }
    return 0;
}
```
#### Fonction de génération d'un nombre aléatoire de qualité en deux `int` `from` et `to`
```c
#include <stdio.h>
#include <stdlib.h>
#include <sys/random.h>

float aleatoire(float,float);

int main(){
    while(1){
        float r = aleatoire(5,15);
        printf("random : %f\n",r);
    }
    return 0;
}


/**
 * Generating a random value between from and to
 * @dependecies : stdlib.h, sys/random.h
 */
float aleatoire(float from, float to){
    // Generating a random buf of bytes
    int buf[255];
    getentropy(buf,sizeof(buf));
    
    // Generating a random seed with the sum of all random bytes.
    int seed = 0;
    for (int i = 0; i < sizeof(buf); i++)
    {
        seed+=buf[i];
    }
    // Give the seed to srand
    srand(seed);
    // Generating random value
    int valeur_random = rand();

    return (to-from)*((float)valeur_random/RAND_MAX)+from;
}
``` -->
