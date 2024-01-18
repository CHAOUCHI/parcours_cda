# Parcours JS
## Objectif final :  Pouvoir comprendre et savoir faire le getting started de Angular (6 mois)

## I) Introduction à l'informatique CPU / MEMOIRE(RAM/Pile) / IO

## II) La programmation
### a) A quoi ça sert ?
- Automatiser des taches en ecrivant un algorithme
### b) Comment sa marche?
- Le code source (L'algo)
- Le code binaire (le programme)
- Le compilateur

## III) Les langages compilés : Le langage C
- Histoire
- Fonctionnement (source - gcc- .exe)
- Application Hello World

## IV) Les langages intérprétés : le python
- Différence entre langage compilé et langage intérprété
- Le langage compilé va resulté en un fichier executable par l'OS, le code source n'est pas accessible via le fichier exectuable
- le Langage intérprété va resulté en un fichier texte executé ligne par ligne par un interpreteur, le code source est accessible a tous.
  - Exemple le python:
    - Histoire
    - Fonctionnement (source- python)
    - Application Hello World

## V) Comprendre le web
### Qu'est ce que le "web" ? - réseau de page html accessible via internet et le protocole HTTP
### Architecture client server
  - Cisco packet tracer
  - Utilité des protocole de communcation et des programmes qui les implémentes
### WireShark try out
  - Envoyer un message sur un serveur
  - Recevoir une reponse

## VI) Les langages du Web
 ### Le HTML
  - Interpreteur coté client(browser)
 ### Le CSS
  - Interpreteur coté client (browser)
 ### Le PHP
  - Interpreteur coté serveur
### Le JavaScript
  - Interpreteur coté client (browser)
    - Precisions sur node
### Conculsion reconaitre un Langage front-end ou back-end.

## VII) Le JavaScript - préquis
### Pré-requis :
- HTML / CSS
- Comprendre l'architecture client - serveur
- Expérience dans un langage compilé et fortement typé est un plus
### Pré-requis technique:
- Un interpreteur JS
- Un editeur de code
### 2 interpreteurs
- Navigateur web
- Node

## VIII) Votre premier programme JavaScript : Hello World
- Avec Node
- Avec un navigateur web
- console.log

## VIV) Un rapide tour de JavaScript
### Tour
- commentaire
- Variable
- affectation
  - types
- typeof
- Literals
- objects
- arrays
- operateurs (2 opérandes, renvoi une valeur d'un certain type en fonction du type des opérandes et de l'opérateur en lui-même)
  - arithmétiques : +,-,*,/,/,%
  - binaires : &&, ||, <,> <=, >=,==,===, !
- functions
- methods
  - use method
  - make your own
- Structures de controle : Les conditions
  - if else
  - for
  - while
- class : créer ses propres "type d'object" reutilisable
### Le TRES GRAND minimum à connaitre pour écrire un script
- variable
- conditions
- Ecriture (console.log)
- Lecture ( window.prompt)

## X) Les variables
  ### Vue global
  - Créer
  - affecter
  - afficher
  - modifier
  - Tester son type
  ### Qu'est ce qui se passe dans la mémoire de l'ordinateur
  - reference
  - identifiant
  - valeur
  - type
  ### Les types primitifs
  - Number
  - string
  - boolean
  - null
  - undefined
  ### Opérateurs et changer de type
  - constante
  - (browser) recupérer une entrée utilisateur simplement : prompt()
  - le cas de "var" (utilisation non recommander)

## XI) Les conditions
### Bloc d'expressions {}
- Scope
### if
- if(condition) expression;
- opérateurs binaire
- if(condition) bloc d'expressions
### while
-while(condition) expression;
- while(condition) bloc d'expressions
- boucle infini
### for
- for(iterator in array) expression;
- for(iterator in array) bloc d'expressions
- for(init expression,first expression of block,last expression of block) expression;
- for(init expression,first expression of block,last expression of block) bloc d'expressions
- for (iterator of object) expression;
- for (iterator of object) bloc d'expressions
- Matrice avec boucle boucle for
### Jumps
- break
- continue
- return

## XII) Créer une fonction
### Syntaxe
### type de valeur de retour
### parametre
- passage par valeur
- passage par adresse( prévision)

## XIII) Object
### Paradigme
- attributs
- methodes
### Vue global
- créer
- modifier
- lire les attributs
    - notation point (la plus utiliser)
    - notation crochet (presque jamais utilisée sauf pour les tableau (array))
- executer une methode
### Syntaxe
- attributs
- methodes
- this
- attribut et methodes dynamiques
- passage par adresse
- égalité entre deux objet les pointeurs
### Class
- constructor
- public
- private
- heritage
    - exemple avec un JV (classe Personnage et classe Hero)
    - attribut _proto_
    - tout les objet herite de la classe Object
      
## XIV) Arrays
### Vue global
- Créer
- Lire
- Modifier
### Interet d'un array
- Contenir une liste de données
- Possède des methodes qui facilite l'accès a ces données.
- Est presque toujours utilisé pour stocker une données d'une BDD dans son programme
### Difference avec objet classique
- Array n'est pas different d'un objet car un Array est un objet de la class Array
- Les elements d'un array sont simplement des attributs de l'objet dont l'identifiant est un nombre
- Un array possède des attributs numerique il est donc impossible d'y accèder via l'operateur point.
### Precisions
- Possible d'ajouter des nouvelles methodes ou attributs a l'array comme n'importe quel Objet

## XV) Dev front-end avec JavaScript
### L'objet window
- l'objet window.console
- l'objet window.document
- methode window.setInterval
- methode window.setTimeout
  
## XVI) Dev back-end avec Javascript
- l'objet global
  
## Tips
- COmment fonctionne cette fonction ?
    - Chercher l'objet associer et sa classe puis chercher sa classe dans la MDN
    - Chercher la méthode qui nous intéresse
    - Regarder sa valuer de retour
    - Puis ses arguments
    - enfin sa description
    - SI on ne comprend toujours pas on peut lire en détail la page de la fonction et eventuelment l'objet
- Je doit metre quoi dans les parenthese de cette fonction ?
     - regarder le type des parametre dans la doc MDN de la fonction
- Je ne sais pas comment mis prendre pour afficher plusieurs informations qui possède une meme forme, grille de produits, message, etc ?
    - Je code un affiche unique d'un seul element
    - J'identifier les partie dynamiques
    - Je créer un array d'objet avec ses informations
    - Je mets le code qui crée un affichage unique dans une boucle for qui parcours l'array
    - Je remplaces les parties dynamique par les arguments de l'objet
- Comment résoudre ce problème ?
    - Partir de la fin
    - C'est à dire que je regarde le resultat que je veux obtenir
    - J'isole les partie dynamique
    - Je code le reste pour créer ces partie dynamique lorsqu'un certain evenement se presente
        Exemple:
            - Burger menu
                - element du menu(static)
                - couleur, police des element static
                - height du menu (dynamique, le menu doit apparaitre)
            - J'evenement perturbateur c'est le click sur le burger
            - Ca veut dire que je dois modifier en JS la height quand je clique sur le burger















