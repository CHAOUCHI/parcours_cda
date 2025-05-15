# RabbitMQ
RabbitMQ est un programme qui permet la communication Inter process et inter host via une TaskQueue.

## Getting started de RabbitMQ
https://www.rabbitmq.com/tutorials/tutorial-one-javascript

## Theories et cas d'utilisations concrèts 

Concrètement, c’est un serveur qui peut recevoir des connexions de client RabbitMQ. Les clients RabbitMQ peuvent ensuite placer des messages dans une file d’attente et créer autant de file d’attente qu’il le souhaite ou bien consommer des messages d’une file d’attente. 

Il a donc deux types de clients RabbitMQ :

- Les producers , ceux qui placent une donnée dans file d’attente 
- et les consumers, ce qui lisent une donné la file d’attente 

L’intérêt principal de RabbitMQ, et que si producer place de nombreuses taches dans une file d’attente un consumer peut ensuite être lancé de multiples fois ou effectuer la lecture de façon asynchrones et ainsi rapidement vider rapidement cette file de tâches à faire.

En effet, lorsqu’une tâche de la file est consommée par consumer, elle disparaît de la file d’attente.

Par exemple si 10 taches sont placés dans la file d’attente et que trois consumers existe. Il est possible que :

- le premier en consomme trois 
- le deuxième en consomme cinq 
- et que le deuxième en consomme seulement deux 
en fonction de leur performance, nous avons ainsi réparti la charge sur trois programmes similaires au lieu de gérer de façon synchrone ces 10 taches lourdes sur un seul unique programme.

Ceci grâce au broker de messages RabbitMQ. 


## Exemple création dynamique de container Docker
Un cas d’utilisation concret serait par exemple une API Rest qui permettrait de créer des conteneurs docker.
Cette API est accessible via une simple requête HTTP. Je peux donc avec un simple fetch créer et lancer des conteneurs docker sur mon serveur mais également lister des conteneurs, en supprimer ou en relancer un ceci grâce à un interface Web(Angular par exemple ).

## Premier stack monolithique 

Je pourrais simplement construire un serveur http qui importe l’ami dockerclient et qui peut ensuite créer des conteneurs quand il reçoit par exemple une requête POST. 

Le problème c’est que la création d’un conteneur est une opération qui est plutôt lourde et mon serveur risque d’être plutôt lent si jamais je reçois énormément de demande de Création de conteneurs.

D’autant plus qu’à chaque conteneur crée un peu plus de ressources de mon serveur sont mangé, et par conséquent j’ai un serveur qui doit à la fois faire tourner des conteneurs docker et re recevoir des requêtes HTTP pour en lancer de nouveaux.

## Solution diviser la charge en plusieurs micro serveurs (micro services)

Je peux donc répartir la charge sur plusieurs programmes grâce à RabbitMQ, je vais conserver mon API Rest sur mon serveur et utiliser dans mon code le client RabbitMQ. Le client RabbitMQ va ensuite se lancer sur un serveur RabbitMQ qui tourne sur le même serveur. 

Le serveur qui host l’ami rest devient donc un producer , c’est-à-dire un client RabbitMQ qui lorsqu’on lui demande est capable de placer un message dans une file d’attente. 

### Le producer

Imaginons par exemple une file d’attente create-container.

Quand l’api rest reçoit une requête post pour créer un conteneur, elle place dans la file d’attente create-container un message contenant toutes les informations utiles à la création d’un container.

## les consumers 

Ensuite, il va falloir que je code un second programme que je ferais tourner sur un ou plusieurs serveur qui sera consumer, c’est-à-dire qui se connectera sur le même serveur RabbitMQ que le producer (l’api rest), mais qui cette fois, ne placera pas de message dans la file d’attente, mais va simplement consumer cette file d’attente et créer de nouveaux conteneursa chaque message reçu.

Étant donné que ce programme a été exécuté plusieurs fois sur de multiples serveur. J’ai donc plusieurs instances de consumer qui tourne sur plein de serveur différent. Mes containers docker peuvent donc être créé très rapidement par de multiples serveur.

J’ai donc réparti la charge du lancement de mes containers docker sur plusieurs serveur.

> A moi ensuite de me débrouiller pour que ces conteneurs soient accessible facilement via un seul unique nom de domaine si neccessaire 
> Je me demande si Kubernets peut pas faire ça à ma place je pense que oui 