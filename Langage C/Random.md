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
        int r = (float)rand()/RAND_MAX;
        printf("%d\n",r);
    }
    return 0;
}
```
### Exercices
3. Générez un nombre compris entre 0 et 10
4. Générez un nombre compris entre 0 et 17
5. Générez un nombre compris entre 5 et 15
6. Générez un nombre compris entre les varaible `float from` et `float to`.

<!-- ```c
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

<!-- 
## L'entropie - Générer un nombre aléatoire solide entre A et B

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
<!-- 
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
``` -->