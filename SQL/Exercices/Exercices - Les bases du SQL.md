### Exercices MySQL les bases
## Pré-requis
- La documention W3S : https://www.w3schools.com/sql/default.asp
- Type de donnée SQL : https://www.w3schools.com/sql/sql_datatypes.asp
- `CREATE DATABASE`
- `USE`
- `CREATE TABLE`
- `ALTER TABLE` pour ajouter ou supprimer des colonnes
- `INSERT INTO` 
- `SELECT`
- `UPDATE`
- `DELETE `
- `WHERE`
- `ORDER BY`
- `LIMIT` pour limiter le nombre de résultats renvoyés
- `INNER JOIN` pour utiliser deux tables dans la recherche d'un résultat
    - voir la doc de w3s : https://www.w3schools.com/sql/sql_join.asp
- Les fonctions SQL : https://www.w3schools.com/sql/sql_ref_mysql.asp
- `AS` pour créer des alias de colonne

## Exercices
1. **Création de Base de Données:**
   - Créez une base de données appelée "GestionMagasin".

2. **Création de Table:**
   - Créez une table "Produits" avec les colonnes suivantes : idProduit (clé primaire), nomProduit, prixUnitaire, quantiteStock.

3. **Insertion de Données:**
   - Ajoutez quelques produits à la table "Produits".

4. **Sélection de Toutes les Données:**
   - Sélectionnez tous les enregistrements de la table "Produits".

5. **Filtrage des Résultats:**
   - Sélectionnez les produits dont le prix est supérieur à 50.

6. **Mise à Jour des Données:**
    - Augmentez le prix de tous les produits de 10%.
        - Astuce : mutliplier par 1.1 reviens à rajouter 10%

7. **Suppression de Données:**
   - Supprimez tous les produits dont la quantité en stock est inférieure à 10.

8. **Jointure Simple:**
   - Créez une nouvelle table "Commandes" avec les colonnes suivantes : idCommande (clé primaire), idProduit (clé étrangère vers Produits), dateCommande.

9. **Insertion de Commandes:**
   - Ajoutez quelques commandes à la table "Commandes".

10. **Agrégation:**
    - Calculez la somme totale des prix des produits en stock.

11. **Alias de Colonne:**
    - Sélectionnez le nom du produit et son prix avec un alias "Prix unitaire".

12. **Sous-requête:**
    - Sélectionnez tous les produits dont le prix est supérieur à la moyenne des prix.

13. **Tri des Résultats:**
    - Triez les produits par quantité en stock de manière décroissante.

14. **Limite des Résultats:**
    - Sélectionnez les 5 premiers produits de la table "Produits".

15. **Modification de la Structure de la Table:**
    - Ajoutez une nouvelle colonne "description" à la table "Produits".

16. **Jointure Entre Tables:**
    - Sélectionnez le nom du produit et la date de commande pour chaque commande.

17. **Requête Complexe:**
    - Sélectionnez le nom du produit, la quantité en stock et la valeur marchande total de chaque produit pour les produits dont la quantité en stock est supérieure à 20.
        - Astuce utiliser un alias
