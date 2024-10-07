## Le FileSystem Linux

En C, vous pouvez interagir avec le système de fichiers à l'aide de la bibliothèque `<stdio.h>` et des fonctions spécifiques :

- **Ouverture de fichiers** : `fopen()`
- **Placer le curseur de lecture du fichier** : `fseek()`
- **Lecture/Écriture** : `fread()`, `fprintf()`
- **Fermeture** : `fclose()`

1. La première étape de la lecture d'un fichier est de créer une variable de type `FILE*` avec la fonction `fopen()`. En précisiant le mode d'accès.
    - `"w"` : Ecriture seule, curseur au début, fichier crée si inconnu
    - `"r"` : Lecture seule, curseur au début.
    - `"w+"` : Lecture et écriture, curseur au début, fichier crée si inconnu
    - `"r+"` : : Lecture et écriture, curseur au début.
> Le plus flexible est `"w+"`.

2. Je n'oublie pas de précisier les droits d'accès au fichier : `"w"` pour l'écriture, `"r"` pour la lecture.

Exemple d'utilisation :

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main() {
    // 1. Ouvrir le fichier avec fopen()
    FILE* file = fopen("mon_fichier", "w+"); // Ouvre un fichier en écriture et lecture
    
    if (file != NULL) {
        int age = 24;
        // 2. Lire le fichier avec fprintf()
        fprintf(file, "Salut tout le monde j'ai %d ans\n",age);

        char buf[255];
        memset(buf,0,255);

        // 3. Reposition le curseur du fichier au début pour pouvoir lire le fichier depuis le début
        fseek(file,0,SEEK_SET);

        // 4. Utiliser fread() pour lire le fichier
        fread(buf,1,255,file);

        // J'affiche le buf remplit par fread()
        printf("%s\n",buf);
        
        fclose(file); // 5. Ferme le fichier
    }
    return 0;
}
```