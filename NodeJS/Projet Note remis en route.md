# Projet de remise en route - Appli NOTE

![alt text](../React/Cours/Note.png)

## Pré-requis technique
- NODEJS (express, mysql2)
- JavaScript front-end.
- fetch API
- DOM

## Description du projet
Un clone de l'application Note disponible sur IOS ou Android.
L'utilisateur écrit dans un `<textarea>` des notes comme : ses courses, des notes de cours, de reunion, etc.

## Cahier des charges
- L'utilisateur peut consulter ses notes.
- L'utilisateur peut ajouter, supprimer ou modifier une note
- L'utilisateut peut `liker` des notes. Les notes likées sont affichées en premières dans la liste des notes.
- Les notes sont enregistrées dans une BDD SQL en back-end.

## Consignes
1. Faite un diagramme de cas d'utilisation, puis appellez moi pour le valider.
2. Faite un diagramme d'entité relation, puis appellez moi pour le faire valider (ce projet ne contient aucune relation mais définir le diagramme reste obligatoire).
3. Définir les tâches du projet par ordres de priorité et démarrer un premier sprint. (Appellez moi si vous avez du mal à définir ces tâches) 

![alt text](../React/Cours/Note.png)


## Objectif BONUS
- Demander à l'utilisateur son nom lorsqu'il arrive sur le site et associer les notes à son nom lors de l'ajout.
- Si des noms existent deja il faut les afficher à l'utilisateur à l'arrivée sur le site pour qu'il puissent choisir son nom et voir uniquement ses notes.
- Utiliser le localStorage pour mémoriser le nom de l'utilisateur. L'utilisateur peut cliquer sur un bouton "déconnexion" pour effacer le localStorage et choisir le nom qu'il souhaite.
> Cet objectif bonus neccéssite une relation entre plusieurs tables. **Effectuer donc un diagramme d'entité relation pour définir cette relation.**