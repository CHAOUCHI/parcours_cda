# ChatApp

Nous allons créer une application de chat type groupe whats app / discord.

## Fonctionnalitées.

- Se connecter à un serveur de discussion
- Envoyer un message à tout les participants à la discussion.
- Afficher les messages 

## Fonctionnement 

Une application de chat néccessite l'utilisation du protocole TCP pour la réceception des messages en temps réel. habituellement en developpement web vous utilisez utniquement le HTTTP pour récupérer des données quand VOUS LE SOUHAITEZ. La réponse du serveur arrive au client uniquement si une requete du client est faite. Dans une application de chat les messages peuvent arrivez à n'importe quel moments le client ne sait donc pas quand envoyer une requetes pour recevoir une réponses contenant les messages. Une solution serait d'envoyer à intervale régulier une requete au serveur pour se tenir informé des messages entrant, c'est une très mauvaise solution car le client spam son réseau internet sans être assuré de recevoir un message à chaque requete.

Non, ce qu'il nous faudrait se serait un moyen de se connecter UNE fois au serveur et ensuite attendre que le serveur envoie un message au client. Cette solution c'est le protocole TCP.

### Les socket TCP
Un socket est un point de connexion entre un client et un serveur. 

#### Connexion

Le socket client envoie une requete au socket serveur qui envoie une réponse au client, on appelle cette étape le *handshake*.
Dans le cas d'une connexion TCP une fois le handshake effectué
#### Maintient de la connexion


## ETAPES

```bash
npm create vite
client
React 
JavaScript
```

```bash
mkdir serveur
cd serveur
npm init
```
Dans /client
```bash
npm install socket.io-client
```

1. Crée un fichier /serveur/main.js
