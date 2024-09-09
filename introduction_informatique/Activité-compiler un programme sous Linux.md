
## Activité - Comment compiler son premier programme ?

### Pré-requis
Je recommande de coder en C sous linux car la plupart des logiciels codé en C tourne sous Linux ou dans un environnement UNIX.

Il est également important pour vous de vous familirisez le plus tot possible avec les commandes Linux pour ne pas être handicapé plus tard lors de la conception de vértiable logiciel.

Il existe plusieurs moyens d'être sous Linux sans abandonner Windows : 
- Le dual-boot, installer deux OS sur le même PC.
- Un Machine Virtuel(VM) qui va émuler un ordinateur et dans laquelle je peux installer Linux.

Si vous n'etes pas sous linux veuillez consulter l'activité sur les machines virtuel pour mêttre en place une VM Debian.

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

Sous GNU/Linux installez le compilateur gcc via apt.
```bash
sudo apt install gcc
```

> *sudo* permet de demander les droits administrateur néccessaire à l'installation d'un programme.

Rendez-vous ensuite dans le dossier qui contient votre code source grâce à la commande *cd*(*change directory*):

```bash
cd Documents/my_first_app
```

Compiler *main.c* en un fichier nommé *hello*

```bash
gcc main.c -o hello
```

Voilà ! Nous venons de créer un programme nommé *hello*.

> Sous linux les programmes n'on pas besoin d'extension pour fonctionner. Mais sous windows votre programme s'appelle *hello.exe*.

> Pour avoir plus d'info sur le programme *gcc*, notament la signification du paramètre *-o*, tapez la commande suivante et accédé au manuel :
>```
>man gcc
>```


### Executer le programme
Il est temps d'éxécuter notre programme !

```bash
./hello
Bonjour !
```
> *./* permet de dire à l'invité de commande (shell) de chercher un fichier qui se trouve dans le répertoire courant. 
>Par defaut le shell cherche le nom des programmes dans des dossiers inscrit dans la variable d'environnement *PATH* (chemin) or notre dossier my_first_app n'est pas connu du *PATH*.