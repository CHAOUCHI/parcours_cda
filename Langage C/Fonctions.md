# Les fonctions
Les fonctions sont des *bout* de code réutilisable qui effectue des instructions et renvoi une valeur en fonction de paramètre que l'on lui donne.

Par exemple la fonction suivante fait la somme de deux paramètres `int` et renvoi un `int`, la somme.

```c
#include <stdio.h>

int somme(int a, int b){
  int resultat = a+b;
  return resultat;
}

int main(){
  int c = somme(4,9);
  printf("%d\n",c);
  return 0;
}
```

## Déclaration d'une fonction
**Attention !** pour qu'une fonction soit coonu dans la fonction main il faut la déclarer avant la fonction `main()`

Le code suivant est correct :
```c
#include <stdio.h>

// Je déclare et j'implémente la fonction somme()
int somme(int a, int b){
  int resultat = a+b;
  return resultat; // je renvoi 13
}

int main(){
  int c = somme(4,9); // J'appel la fonction somme
  printf("%d\n",c); // 13
  return 0;
}
```
Le code suivant va générer un *warning* à la compilation :
```c
#include <stdio.h>

int main(){
  int c = somme(4,9); // Je ne connais pas cette fonction ...
  printf("%d\n",c);
  return 0;
}


int somme(int a, int b){
  int resultat = a+b;
  return resultat;
}
```

Pour éviter d'avoir à mettre ses fonctions au début du fichier `main.c` on peut déclarer la fonction avant de l'implémenter(la remplir avec du code) en bas du main.
```c
#include <stdio.h>

// Je déclare d'abord la fonction !
int somme(int a, int b);

int main(){
  int c = somme(4,9); // Je connais cette fonction !
  printf("%d\n",c);
  return 0;
}

// J'implémente la fonction
int somme(int a, int b){
  int resultat = a+b;
  return resultat;
}
```