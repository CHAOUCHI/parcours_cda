# Serveur HTTP

## Le Besoin
Mettre en production un serveur http. 

## Pré-requis
- WireShark
- Installer python3 sur windows : COCHEZ LA CASE **ADD TO PATH** PENDANT L'INSTALLATION ! 
- un réseau local

# Activité
## Créer un dossier dans votre ordinateur 
Créer un dossier qui sera le dossier public accessible à tous. Il contiendra vos sites web.

## Lancer le serveur web
1. Ouvrez un invité de commande dans le dossier précédemment crée.
2. Exécutez la commande suivante pour lancer le serveur http (shift-clicdroit>ouvirir powershell dans le dossier)
```
> python -m http.server
```
3. Exécutez la commande ip config pour connaître votre adresse ipv4 et la partager au autre PC du réseau.
```
> ipconfig
```
Normalement votre adresse ip commence par 132.

4. Tester votre serveur web via le PC d'un camarade du réseau local sur un navigateur web, n'oubliez pas de préciser le port 8000.

5. Sniffez les réponses reçues avec WireShark et faites le schéma de la transmission.


## Mettre un site web en production

1. Créer un site web qui contient :
    - Une page d'accueil
    - Une page de contact
    - un fichier style.css
    - La page d'acceuil doit contenir une image, être stylisé en CSS et un lien clickable vers la page contact.html.

2. Placez le site web dans votre serveur web.

3. Testez son accessibilité sur l'un des PC du réseau.

4. Sniffez le réseau et faite l'inventaire de toutes les requêtes et réponses HTTP en rapport avec votre serveur web.

5. Que pouvez-vous en conclure ?


