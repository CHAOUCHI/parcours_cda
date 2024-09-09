
## Activité - Comment compiler son premier programme ?

### Pré-requis
Je recommande de coder en C sous linux car la plupart des logiciels codé en C tourne sous Linux ou dans un environnement UNIX.

Il est également important pour vous de vous familirisez le plus tot possible avec les commandes Linux pour ne pas être handicapé plus tard lors de la conception de vértiable logiciel.

Il existe plusieurs moyens d'être sous Linux sans abandonner Windows : 
- Le dual-boot, installer deux OS sur le même PC.
- Un Machine Virtuel(VM) qui va émuler un ordinateur et dans laquelle je peux installer Linux.

Comme première expérience je vais compiler un programme sous Windows.

### Ecrire le le code source.

Pour compiler un programme il faut d'abord l'écrire dans un fichier texte en respectant la syntaxe d'un langage de programmation.

Le texte ainsi écrit est appelé *code source*.

Voici le code source d'un programme tout simple écrit en C qui affiche "Bonjour !".
```c
#include <stdio.h>

int main(){
    printf("Bonjour !\n");
    return 0;
}
```
1. Créez un dossier nommée *my_first_app*
2. Ecrivez ce code source dans un editeur de texte (blocnote, notepad++ ou vscode)
3. Enregistrez ce fichier sous le nom ***main.c***

### Compiler le code source
Pour compiler notre code source il nous faut un compilateur.

### Installer le compilateur MinGW

## Compiler le code source


### Executer le programme
Il est temps d'éxécuter notre programme !

Double clické sur le fichier *hello.exe*.