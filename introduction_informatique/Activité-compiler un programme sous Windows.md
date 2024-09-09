
## Activité - Comment compiler son premier programme ?

### Pré-requis
Je recommande de coder en C sous linux car la plupart des logiciels codé en C tourne sous Linux ou dans un environnement UNIX.

Il est également important pour vous de vous familiarisez le plus tot possible avec les commandes Linux pour ne pas être handicapé plus tard lors de la conception de vértiable logiciel.

Il existe plusieurs moyens d'être sous Linux sans abandonner Windows : 
- Le dual-boot, installer deux OS sur le même PC.
- Un Machine Virtuel(VM) qui va émuler un ordinateur et dans laquelle je peux installer Linux.
- WSL, Windows Subsystem for Linux. Qui rajoute un surcouche Linux à Windows, ce n'est pas un OS Linux au complet mais c'est suffisant pour se que nous voulons faire.

Comme première expérience je vais compiler un programme sous Windows.

## Installer WSL
Dans un PowerShell utiliser la commande *wsl* pour installer Ubuntu une distribution ("version") de Linux.

```bash
wsl --install -d Ubuntu
```

Vous pouvez ensuite lancer le logiciel wsl.
![alt text](image-28.png)

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
1. Créez un fichier nommée ***main.c*** sur le Bureau
2. Ecrivez ce code source dans un editeur de texte (blocnote, notepad++ ou vscode) à l'intérieur du fichier.
```c
#include <stdio.h>

int main(){
    printf("Bonjour, appuiez sur n'importe quelle touche pour quitter le programme!\n");
    int input;
    scanf("%d",&input);
    return 0;
}
```
3. Enregistrez ce fichier sous le nom ***main.c***

>J'affiche un message, puis je demande à l'utilisateur de tapez quelque chose (je me sert pas de l'input entrez) puis le programme fini avec le return

### Compiler le code source
Pour compiler notre code source il nous faut un compilateur.

### Installer le compilateur MinGW

*minGw* est un compilateur C pour windows

Installez le avec *apt* :

```bash
sudo apt-get install mingw-w64
```

## Compiler le code source
```bash
x86_64-w64-mingw32-gcc main.c
```

### Executer le programme
Il est temps d'éxécuter notre programme !

Double cliquez sur le fichier *a.exe* qui est apparu sur votre *Bureau*.

# Questions
1. Si je retire la ligne scanf, que ce passe-t-il a l'exection et pourquoi ?
2. A quoi sert scanf() ?

**Fonctionnement d'une variable**
Une variable est un espace mémoire auquelle je donne un nom.
Voyez sa comme un casier que je crée et dans lequel je mes une valeur.
```c
// %d permet d'afficher un nombre
int nombre = 10;
printf("%d\n",&nombre);
```
> *\n* est le caractère retour à ligne

**Fonctionnement de printf**
printf() signifie Print formated, car il permet d'afficher un texte dans la console et qu'il foit donc la possibilité d'y ajouter des variables à afficher avec des code de formatage.

```c
// %d permet d'afficher un nombre
int nombre = 10;
printf("%d",&nombre);
```

**Programmation conditionnel, le fonctionnement du If**
Avec un SI (if) je peut vérifier si une chose est vrai avant d'effectuer une action.
```c
int age = 24;
// Si age est inférieur à 18
if(age < 18){
    // J'execute cette ligne
    printf("Je suis mineur");
}
if(age > 17){
    // Sinon je fais celle-ci
    printf("Je suis majeur");
}
```
Ecrivez un programme,
3. Qui dit si le nombre rentré est inférieur à 100.
4. Qui affiche le carré du nombre
5. Qui demande deux nombres et affiche leurs produit.
4. Avec l'aide de scanf() et printf() essayez de coder un mini-jeu "Question pour champion !" ! :D
5. (Par équipe de 2) Inventez une idée de jeu suffisement simple pour être fait avec les outils que vous connaissez et codez le ensemble ! :)
6. Préparez ensemble un petit oral et expliquez comment vous vous y êtes pris pour faire le jeu.