#include <stdio.h>
// reviser pourquoi utiliser stdio.h et pas autres choses
// vérifier si il existe dautre commande que "#include"
int main() {
    float nombre1, nombre2;
    float somme, difference, produit, quotient;
    // %.2f pour afficher 2 chiffres apres la virgule avec float (vérifier si .3f fonctionne)
    //quotien = résultat d'une division 
    //somme = résultat d'une addition 
    //produit = résultat d'une multiplication
        printf("Entrez le premier nombre : ");
        scanf("%f", &nombre1);
        
        printf("Entrez le deuxième nombre : ");
        scanf("%f", &nombre2);
        somme = nombre1 + nombre2;
        difference = nombre1 - nombre2;
        produit = nombre1 * nombre2;
            if (nombre2 != 0) {
                quotient = nombre1 / nombre2;
                printf("Le quotient est : %.2f\n", quotient);
            } else {
                printf("Erreur : Division par zéro c pas possible.\n");
            }
            printf("La somme des nombres est : %.2f\n", somme);
            printf("La différence des nombres est : %.2f\n", difference);
            printf("Le produit des nombres est : %.2f\n", produit);

    return 0;
}