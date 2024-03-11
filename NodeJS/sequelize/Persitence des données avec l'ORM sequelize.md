# Persitance des données avec l'ORM Sequelize.

`Sequelize` est un module npm qui permet d'accéder à une BDD SQL sans jamais écrire le moindre code SQL. Toutes les actions habituelles du SQL sont accessible via des objets. Les programmes comme sequelize s'appelle des ORM ( object-relational mapping ) c'est une surcouche (un interface) du SQL qui permet un accès simple, rapide et orienté objet à la BDD.

A titre d'exemple une requête comme :
```sql
SELECT * FROM User WHERE User.id==1
```
S'écrit sous sequelize :
```js
const user = await User.findByPk(1);
```
Une relation One to Many se crée comme suit :
```js
Category.hasMany(Product);
Product.belongsTo(Category);
```

Ce cours se déroulera en deux parties.

1. Découverte de sequelize, les fonctionnalitées de bases et la documentation.
2. Projet : Création d'un projet Pokedex de zéro du front-end au back-end. Le back-end sera fait d'un serveur `express` et de `sequelize` pour l'accès simplifié à la BDD.

# Installer sequelize
```bash
npm init # Répondez au questions avant de faire la commande suivante
npm install express cors sequelize
```

