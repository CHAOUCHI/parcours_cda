#### **Service HTTP Apache2**

##### **1. Qu'est-ce qu'un serveur HTTP ?**
Un serveur HTTP est un logiciel qui reçoit des requêtes HTTP (Hypertext Transfer Protocol) des clients, généralement des navigateurs web, et leur répond en envoyant le contenu demandé (pages web, fichiers, etc.). Il gère les requêtes entrantes et distribue le contenu en fonction de l'URL demandée. Apache est l'un des serveurs HTTP les plus utilisés au monde.

##### **2. Qu'est-ce qu'un client HTTP ?**
Un client HTTP, tel qu'un navigateur web (Chrome, Firefox, etc.), est une application qui envoie des requêtes HTTP au serveur pour récupérer des ressources (pages web, images, vidéos). Le client interprète ensuite la réponse du serveur pour l'afficher à l'utilisateur final.

##### **3. Comment il fonctionne : TCP/IP et le protocole HTTP**
Le protocole HTTP fonctionne au-dessus de la pile TCP/IP. Lorsqu'un client souhaite accéder à une ressource sur un serveur, il ouvre une connexion TCP avec le serveur sur le port 80 (ou 443 pour HTTPS) et envoie une requête HTTP. Le serveur traite cette requête et répond avec le contenu demandé. Cette communication repose sur un modèle client-serveur.

---

#### **Installer Apache2**

1. **Mise à jour du système**
   ```bash
   sudo apt update && sudo apt upgrade
   ```

2. **Installation d'Apache2**
   ```bash
   sudo apt install apache2
   ```
   - Vérifier que le service Apache est en cours d'exécution :
   ```bash
   sudo systemctl status apache2
   ```

---

#### **Mettre en production un site web**

1. **Déploiement du site web**
   - Copier les fichiers du site dans le dossier racine d'Apache : `/var/www/html/`.
   - Redémarrer Apache pour appliquer les changements :
   ```bash
   sudo systemctl restart apache2
   ```

#### **Configurer Apache2**

##### **1. Changer le dossier racine du site web**
   - Modifier le fichier de configuration principal d'Apache (`/etc/apache2/sites-available/000-default.conf`).
   - Changer la directive `DocumentRoot` vers le nouveau dossier souhaité.
   - Redémarrer Apache :
   ```bash
   sudo systemctl restart apache2
   ```

<!-- ##### **2. Ajouter le HTTPS avec un certificat SSL**
   - Installer `certbot` pour générer un certificat SSL :
   ```bash
   sudo apt install certbot python3-certbot-apache
   ```
   - Utiliser `certbot` pour obtenir un certificat :
   ```bash
   sudo certbot --apache
   ```
   - Configurer Apache pour utiliser le certificat SSL. -->


### **Activité - Créer un site web GROUPE DE 2**

#### **Introduction succincte à HTML et CSS**
- **HTML (Hypertext Markup Language)** : Langage de balisage utilisé pour structurer le contenu des pages web.

- **CSS (Cascading Style Sheets)** : Langage utilisé pour styliser le contenu HTML (couleurs, polices, mise en page, etc.).

#### **Créer et mettre en production des sites web**

1. **Choisissez l'un des pitchs suivants, puis codez le site en HTML/CSS :**

Créez un site web en HTML et CSS sur le thème de votre choix

2. **Mettez-le ensuite en production sur le serveur web pour que tout le LAN puisse y accéder :**
   - Déployer le site sur `/var/www/html/` ou dans le dossier racine configuré.
   - Tester l'accès au site depuis d'autres machines du réseau local.(Attention à bien faire un Bridged sur la VM)
