# Antentication

L'authentification d'une application web c'est le fait de limité l'accès à certaine routes du back-end ou du front-end au client.

Par exemple si le client arrivent sur un site de catalogue video type netflix, il peut voir la page d'accueil. 

Si il souhaite accéder au catalogue de films il va devoir fournir au back-end un jeton de connexion. 

Pour se faire le client devra d'abord accéder à une page de connexion qui va effectuer un fetch() au service d'authentification du back-end, celui-ci va lui fournir le jeton. 

Le jeton de connexion possède une durée de vie et quelques informations importantes comme le niveau de droit de l'utilisateur (admin,user,invité) ou encore son identifiant unique.