# Introduction à Unity
Unity est un moteur physique et un framework de développement de jeux vidéos. Il supporte les langages Java et C# et permet une cross-compilation, entre-autre, sur : PC, Mac, Linux, Web, Android, IOS, playstation, VR, AR.

# Installation de Unity Hub
Unity Hub est le *launcher* qui permet de télécharger et lancer une version de l'éditeur unity.

C'est avec Unity Hub que je vais créer mes projets.

https://unity.com/fr/unity-hub

# Création d'un projet
Pour créer un projet rendez-vous sur Unity Hub dans ***Projects>New Project***.

# Lancer un projet
Lancer le projet en doublie cliquant sur le projet dans la liste des *Projects*.

# La Scène et le lancement du jeu.
Au lancement du projet l'éditeur Untiy s'affiche et la scène principale aussi. C'est dans cette scène que vous allez placer vos *game objects* : personnages, plateformes, décors, lumières, cameras, musique.

# Créer des GameObject
Un *GameObject* est la brique élementaire d'un jeu Unity. Tout est un *GameObject* de la caméra au joueur en passant par les murs d'un niveau ou même la lumière.

Tout les `GameObject` possède une position `x,y,z` appelé composant `Transform`.

Si je modifie les attributs x, y ou z du trasnform de la `MainCamera` la caméra bouge.

## Un personnage

Dans le menu de gauche ( celui qui contient la caméra) je peut ajouter un GameObject.

Ajoutont un gameobject nommé "personnage".

Faite `Clic Droit > 2D Object > Sprites > Square` pour créer un GameObject avec un asset d'un carré blanc, nommé ce `GameObject` `personnage`.

Appuiez sur le bouton `Play` en haut de la fenetre pour lancer le jeu.

Vous devriez voir votre personnage (un carré blanc) floater.

## Une plateforme

1. Ajoutez un rectangle blanc en bas de la sacène pour fabriquer une plateforme pour notre personnage.

La plateforme floate dans les aire également.

## La gravité - RigidBody
Unity simule les effets physiques de la vraie vie de façon réaliste : il est donc temps d'ajouter de la gravité.

Je veux que mon personnage soit soumis à la gravité et tombe sur la plateforme.

Pour qu'un corps soit soumis à la gravité il lui faut un poids et un corps physique.

Tout ceci est représenté par le composant `RigidBody2D`.

Faite : 

1. Clic gauche sur le personnage
2. Dans le menu *Inspector* à droite, cliquer sur *Add Component*
3. Rechercher puis cliquez sur `RigidBody2D`.
4. Lancer le jeu avec Play pour voir votre personnage tombe.

Notre personnage est soumis à la gravité et tombe vers la plateforme.

Mais, pourquoi est ce qu'il traverse la plateforme ?

## Les collisions - Collider
Le composant `BoxCollider2D` permet d'ajouter une boite de collision (*hitbox*) à un `GameObject`.

1. Ajouter le composant `BoxCollider2D` sur la plateforme pour la rendre intraversable.
2. Lancer le jeu. Pourquoi est ce que le joueur traverse toujours la plateforme alors nous avons ajouté une hitbox sur la plateforme ?
3. Ajouter un box collider sur le joueur également.

Voilà à présent notre joueur tombe sur la plateforme et les deux rentre en collisions via leurs *BoxCollider* respectif.


## Déplacer un GameObject - RigidBody.AddForce()
Pour déaplacer un objet dans Unity je pourrais simplement modifier les valeurs de son *transform* mais celà aurait pour effet de déplacer "en dur" le game object dans le monde et donc d'empécher son RidgidBody et sont boxcollider d'intéragir physiquement correctement avec le monde.

La bonne manière de déplacer un gameobject c'est le `RidigBody2D`.

1. Sur le joueur ajouter un composant `Script` nommé `player_mouvement`.
2. Ouvrez le script `player_mouvement.cs` nouvellement crée par unity pour programmer votre personnage.


Votre script doit normalement ressembler à ceci : 

*player_mouvement.cs*
```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class player_mouvement : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
```

- La fonction `Start()` est appelé une fois au l'apparition du `GameObject` dans le monde.
- La fonction `Update()` est appelé à chaque frame du jeu. Voyez cette fonction comme une boucle while infinie.

Habituelement dans la fonction start on écrit les actions d'initalisation de l'objet. Et dans update on place les conditions d'actions qui doivent être testé en boucle : typiquement les mouvements par exemple.

> Pour obtenir l'autocompletion sur VSCode pour unity il faut :
> 1. Installer le SDK .NET
>```bash
> wget https://packages.microsoft.com/config/debian/12/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
> sudo dpkg -i packages-microsoft-prod.deb
> rm packages-microsoft-prod.deb
> sudo apt-get update
> sudo apt-get install dotnet-sdk-8.0
> ```
> 2. Installer l'extension `C#` et `Unity` toute deux publiées par Microsoft.
> Plus d'infos sur l'intellisense de Unity et VSCode ici : https://www.youtube.com/watch?v=ihVAKiJdd40&t=45s

Déplacer un joueur se fait en deux étapes :
1. Obtenir une variable de type RigidBody2D qui représente le rigidbody.

## Input.GetAxis() - Les entrées utilisateurs