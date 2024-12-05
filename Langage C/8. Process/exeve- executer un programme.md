# execve - appel système pour executer un programme

exec est une famille de fonction qui permet "d'executer" un programme.

## Qu'est ce que c'est executer un programme ?
Un programme qui en execute un autre subit un remplacement complet de sa mémoire, le kernel relance ensuite le programme dans son etat nouveau.

### Exemple :
`a.out` veut executer `clear`. `a.out` devra disparaitre pour ça et sera remplacé dans la RAM par `clear`.

```c

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

/**
 * Fonctionnement des familles de fonction execve
 * Execve permet "d'executer" un programme, c'est à dire : remplacer le programme appelant (a.out) par un programme appelé (ls ou clear ou apt ou code)
 * On utilise plutôt les fonctions execvp ou execlp car le programme appelant est cherché dans le PATH.
 */
int main(){
	// ################ execvp ###################
	// Fonctionnement avec des tableaux
	// exec vector path : execute le program via un tableau de paramètre contenant les paramètres de la commande. 
	// Attention !!!
	// Y compris le nom du progamme. 
	//Il doit finir par NULL.
	char* argv[] = {
		"clear", 		// 0
		NULL		// 1
	};
	execvp(argv[0],argv);perror("execvp()");
	
	// ############### execlp ###################
	// exec list path : execute le programme via des paramètres multiples dont le dernier est NULL (une liste de paramètres)
	// Utilisez la quand vous voulez faire une commande précise
	// Par exemple : clear
	execlp("clear","clear",NULL);perror("execvp()");

    return 0;
}
```