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

Dans la vraie vie pour déplacer un objet je doit ajouter une force sur son corps, le pousser !

Je dois donc *"addForce to the Rigidbody"*.

Déplacer un joueur se fait en deux étapes :
1. Obtenir une variable de type RigidBody2D qui représente le rigidbody.
2. Appeler la fonction addForce() de la classe RigidBody2D pour appliquer une force sur l'objet.

### Obtenir le rigidbody

Dans le script de mouvement créer un attribut de classe et initalisé la avec le composant Rigidbody2D dans la fonction Start(), comme suit :

> Dites vous que les attributs de classes sont comme des variables globales à la classe. La variable est donc dispo dans les fonctions Start() et Update().


```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class move : MonoBehaviour
{
    Rigidbody2D rb;
    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
    }
}

```

Ensuite vous pouvez appellez la fonction addForce en prenant soin de lui donner un Vecteur `x,y` pour indiquer la direction de pousser.


```cs
using System.Collections;
using System.Collections.Generic;
using System.Numerics;
using UnityEngine;
using Vector2 = UnityEngine.Vector2;

public class move : MonoBehaviour
{
    Rigidbody2D rb;
    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        // J'appel la fonction AddForce et je lui fournit la direction de poussé.
        rb.AddForce(new Vector2(10,0));
    }
}
```

## Input.GetAxis() - Les entrées utilisateurs

La fonction Input.GetAxis() fournit une valeur en tre -1 et 1 :

- 0 signifie que le joueur n'appuie sur aucune touche de déplcement(q ou d) ou n'a pas bougé le joystick
- -1 signifie joystick à gauche ou la touche `q`
- 1 signifie joystick à droite ou la touche `d`

```cs
using System.Collections;
using System.Collections.Generic;
using System.Numerics;
using UnityEngine;
using Vector2 = UnityEngine.Vector2;

public class move : MonoBehaviour
{
    Rigidbody2D rb;
    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        rb.AddForce(new Vector2(10*Input.GetAxis("Horizontal"),0));
    }
}
```

### Variable public 

Je peux rendre la vitesse facilement modifiable en en faisant un attribut publique modifiable directement depuis Unity Editor.

```cs
using System.Collections;
using System.Collections.Generic;
using System.Numerics;
using UnityEngine;
using Vector2 = UnityEngine.Vector2;

public class move : MonoBehaviour
{
    Rigidbody2D rb;
    float speed  = 10;
    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        // Je remplace 10 par la variable speed
        rb.AddForce(new Vector2(speed*Input.GetAxis("Horizontal"),0));
    }
}
```

La variable speed est modifiable dans l'onglet composant Script du gameobject personnage dans l'editeur.

Vous pouvez même modifier en temps réel pendant l'execution la valeurs d'un attribut publique pour tester directement la bonne valeur pendant le jeu.

## Detecter une collision 

Pour detecter une collision il faut rajouter une fonction d'évenement dans le script qui va être appelé quand le gameobject touche un autre gameobject.

```cs
using System.Collections;
using System.Collections.Generic;
using System.Numerics;
using Unity.VisualScripting;
using UnityEngine;
using Vector2 = UnityEngine.Vector2;

public class move : MonoBehaviour
{
    Rigidbody2D rb;
    float speed  = 10;
    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        rb.AddForce(new Vector2(speed*Input.GetAxis("Horizontal"),0));
    }

    void OnCollisionEnter2D(Collision2D other) {

    }
}
```

Cette fonction est appelé quand un autre objet appelé `other` le touche.

La méthode classique est d'attribuer un tag au gameObject plateforme pour le reconnaitre facilement et d'utiliser ce tag dans un if pour savoir si le joueur touche la plateforme


J'applique la même logique à l'évenement Exit pour définir si le joueur touche ou non le sol.

j'utilise un attribut binaire `bool` pour me souvenir de l'état du joueur, ce sera utile pour coder un saut.
```cs
using System.Collections;
using System.Collections.Generic;
using System.Numerics;
using Unity.VisualScripting;
using UnityEngine;
using Vector2 = UnityEngine.Vector2;

public class move : MonoBehaviour
{
    bool isTouchingGround = false;
    Rigidbody2D rb;
    float speed  = 10;
    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        rb.AddForce(new Vector2(speed*Input.GetAxis("Horizontal"),0));
    }

    void OnCollisionEnter2D(Collision2D other) {
        if (other.gameObject.tag == "plateforme"){
            isTouchingGround = true;
        }
        
    }

    void OnCollisionExit2D(Collision2D other) {
        if (other.gameObject.tag == "plateforme"){
            isTouchingGround = false;
        }
    }
}
```



# Coder un saut.

Pour coder un saut il faut que je fasse un `rigidbody.AddForce()` **SI** je touche le sol.

1. Coder le saut du joueur en utilisant la variable isTouchingGround et la fonction AddForce().