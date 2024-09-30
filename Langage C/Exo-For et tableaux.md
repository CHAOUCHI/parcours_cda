
# Boucle for

La boucle for est une autre syntaxe pour un boucle while avec compteur.


La syntaxe suivante :
```c
int i = 0;
while(i<10){
    printf("%d",i*2);
    i++;
}
```

équivaut à la syntaxe suivante :

```c
for(int i = 0;i<10;i++){
    printf("%d",i*2);
}
```

La boucle for permet d'éviter les boucle infini et également de parcourir un tableau.

```c
int tab[3] = {4,8,7};

for(int i = 0;i<10;i++){
    printf("%d",tab[i]);
}
```

> ### Rappel - modifier un élément d'un tableau
> ```c
> int tab[3];
> tab[0] = 4;
> tab[1] = 8;
> tab[2] = 7;
> ```

1. A l'aide d'une boucle for afficher tout les nombres de 1 à 12
2. A l'aide d'une boucle for afficher tout les nombres de -10 à 37
3. A l'aide d'une boucle for afficher tout les nombres paires
4. A l'aide d'une boucle for remplissez un tableau de int `int tab[12]` avec uniquement des 0. Afficher son contenu.

5. Remplissez un tableau avec une boucle for pour tout valeur de i de 0 à 7.

6. Faite la somme des élements du tableau précedent

7. Faite le quotient des élements du tableau précedent puis afficher si le resultat est un nombre pair ou non.

8. A l'aides des deux tableaux `notes` et `coefs` remplissez un troisième tableau `notes_coef` qui contient les notes multiplier par leurs coef respectif.
```c
notes : 10 12 15 9 11
coefs :  1  2  1 3  8
```

9. Trouver le plus grand elements d'un tableau d'int.
```c
tabl : -18 37 12 13 90 5
```
10. Trouver le plus petit element d'un tableau

11. Inversé le tableau suivant dans le tableau rever
```c
#include <stdio.h>
#include <stdlib.h>

int main(){
    int tab[5] = {1,2,3,4,5};
    int rever[5];
    
    
    return 0;
}
```

12. Écrire un programme qui compte combien de fois un élément donné apparaît dans un tableau.

13. Trier un tableau par ordre croissant

14. Fusionné les deux tableau suivants et afficher le tableau `fusion`.
```c
#include <stdio.h>
#include <stdlib.h>

int main(){
    int tableau1[5] = {1, 3, 5, 7, 9};
    int tableau2[5] = {2, 4, 6, 8, 10};
    int fusion[10];
    
    
    return 0;
}
```

15. Écris un programme qui vérifie si un tableau d'entiers est trié en ordre croissant.

16. Écris un programme qui effectue une rotation circulaire à droite d'un tableau d'entiers. Cela signifie que chaque élément du tableau est déplacé vers la droite, et que le dernier élément devient le premier.

