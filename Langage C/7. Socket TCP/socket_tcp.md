# Socket TCP 

## Les fichiers sockets des *tuyaux de données*

Socket est une API du kernel Linux qui permet d’envoyer des octets de données à un autre programme exécuté par un autre ordinateur sur le réseau internet.

```mermaid
flowchart
    p_client((Programme CLIENT))
    p_server((Programme SERVEUR))
    s_client[Socket CLIENT]
    s_server[Socket SERVER]

    subgraph Ordinateur client
    p_client
    s_client
    end

    subgraph Ordinateur serveur
    p_server
    s_server
    end

    p_client-->s_client
    p_server-->s_server
    s_client<-->s_server
```

Les deux programmes possèdent chacun un fichier spécial appelé socket. Un socket est un fichier linux « connecté » au serveur.
Les données placées sur le socket du client ressortent sur le fichier socket du serveur comme un tuyau transporte de l’eau. 


## Le protocle TCP

Le TCP est un protocole fiable avec connexion. 

C’est à dire que les données sont garanties sans perte via un système de vérification de la bonne réception des données à chaque envoi.

Ont dit protocole avec connexion car avant l’envoi de données il faut d’abord se connecter à un socket server, un fois la connexion acceptée le client peut envoyer des données au serveur et le serveur au client.

Vous pouvez voir un socket TCP comme une « tuyauterie » direct entre un client et un serveur. Une fois la connexion établie il suffit d’envoyer de l’eau dans le tuyau (écrire sur le socket) pour envoyer les données au serveur. De la même façon il suffit de regarder (lire le socket) le tuyau pour récupérer des données entrantes.

Le TCP permet donc une connexion dans les deux sens entre client et serveur : une connexion duplex donc (dans les deux sens). 

Il y a deux types de sockets : 

⁃ Les sockets clients qui se connectent(Connect)à un serveur pour ensuite envoyer(send)ou recevoir(rcv) des données au serveur.

⁃ Les sockets serveur qui écoute(listen) les requêtes de tout client qui souhaite se connecter au serveur, puis accepte (accept) la connexion et récupère une « copie » du socket client. Ce socket client présent côté server est en quelques sortes l’autre extrémité de la tuyauterie mise en place par le client avec le socket. 

Si le client veut communiquer avec le serveur il lui suffit de lire/écrire dans son socket. 

Si le serveur veux communiquer avec un client il lui faut écrire/lire sa copie du socket client. 

Il est interessant de noter que du point de vu du client son socket est un seul et unique « tuyau » qui se branche au serveur. 
Alors que le serveur lui possède autant de tuyaux que de clients dont la connexion a été acceptés. 

Également le socket personnel du serveur est verrouillé si il écoute(listen) les demandes de connexion des clients. 

On ne peut donc ni lire ni écrire directement sur le socket server. Comme dit plus haut pour communiquer avec un client le serveur doit écrire/lire sa copie du socket client. 

## 

## Exemple de code d'un serveur web ici :
https://github.com/CHAOUCHI/tcp-socket/settings

>Il ne fait pas de sens pour un serveur de vouloir écrire dans son propre socket, ce socket ne sert qu’à gérer les connexions. 

> Le socket client est toujours synchronisé avec sa copie côté serveur. 


## Exercie 1
Pour ce premier exercice nous allons uniquement coder le serveur, nous utiliserons google chrome comme client TCP.

Faite un serveur TCP qui renvoie une réponse http au client pour afficher une page HTML.

```mermaid
flowchart TB
    server((server))
    socket["server_fd = socket()"]
    bind["bind(server_fd)"]
    listen["listen(server_fd)"]
    accept["client_fd = accept()"]
    send["send(client_fd,reponse)"]
    close_client["close(client_fd)"]
    close_server["close(server_fd)"]
    
    server-->socket-->bind-->listen-->accept-->send-->close_client-->close_server-->fin(("fin"))
```

En effet chrome est un client HTTP et le protocole HTTP est par dessus le TCP dans le modèle OSI. Chrome est donc par extension un client TCP valide.

Cependant pour qu'une page HTML s'affiche il faut respecter le format HTTP.

Une réponse HTTP ressemble à ça : 

```http
HTTP/1.1 200 OK

<h1>Hello World !</h1>
```
*Voir la RFC HTTP(6.Response) : https://datatracker.ietf.org/doc/html/rfc2616#section-6*

Vous pouvez former la réponse à envoyer au client comme ceci :
```c
char reponse[BUFSIZ];memset(response,0,BUFSIZ);
sprintf(reponse,"HTTP/1.1 200 OK\n\n<h1>Hello World!</h1>");
```

pour ensuite l'envoyer au serveur comme ceci.
```c
send(client_fd,message,strlen(message),0);
```

> Rappel un client place SON PROPRE SOCKET dans la fonction send pour envoyer un message au serveur. En aucun cas le client ne peut placer le socket serveur dans send comme pour dire : "Envoyer un message au server". Il faut plutot voir les socket comme des boites aux lettres, le client pose sont message dans la boite au lettre(socket client) et le serveur lit la boite avec recv().

## Exercice 2
Acctuelement le server
2.	Faite un server tcp qui retourne à un état accept après avoir close la connexion au client.

3.	Créez un client TCP qui envoie un requête au serveur et affiche sa réponse

4.	Faite un serveur tcp qui peut traiter plusieurs connexion clients en même temps. Pour ceci vous aurez besoin d’un tableau d’int pour stocker les socket clients et de multithreading pour traiter les accept en même temps que les recv