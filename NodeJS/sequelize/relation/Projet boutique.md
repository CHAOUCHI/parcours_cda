# Projet boutique en ligne

Définissez chaque model dans un fichier du même nom.

Par exemple le modèle `User` est défini dans le fichier `User.js` avant d'être exporté dans database.js

## Diagramme simpliste : sans jointure ni champs
```mermaid
erDiagram
    Product
    Review["Review(join)"]
    Cart
    User
    Carac
    Images
    Role

    Product }|--|| Category : has

    Product ||--|{ Review : got
    Review }|--|| User : post

    Product }|--|{ Images : has
    Product }|--|{ Carac : has
    Product }|--|{ Cart : has
    User ||--|| Cart : got
    User }|--|| Role : has
```
## Diagramme complet avec jointure et champs des tables
```mermaid
erDiagram
    Product{
        name TEXT
        price FLOAT
    }
    Review["Review(join)"]{
        rating INT
        content TEXT
    }
    Cart{

    }
    User{
        name TEXT
        password TEXT
        email TEXT
        birth_date DATE
    }
    Carac{
        name TEXT
        unit TEXT
    }
    Images{
        url TEXT
    }
    Role{
        name TEXT
        importance INT
    }
    CaracProduct["CaracProduct(join)"]{
        value TEXT
    }
    ProductImages["ProductImages(join)"]
    
    Product }|--|| Category : has

    Product ||--|{ Review : got
    Review }|--|| User : post
    
    Product ||--|{ ProductImages : has
    Images ||--|{ ProductImages : has
    
    Product ||--|{ CaracProduct : has
    Carac ||--|{ CaracProduct : has
    
    Product ||--|{ ProductCart : has
    Cart ||--|{ ProductCart : has

    User ||--|| Cart : has
    User }|--|| Role : has
```
## 1. Implementation avec sequelize

Avec sequelize implementez le diagramme d'entité relation.
> Faite attention ! Ce diagramme ne contient pas les clés primaires et les clés etrangères.

## 2. Crud
Créez un programme NodeJS (un service) qui permet d'effectuer les actions CRUD sur ce diagramme.
- Faite le avec express.
- Tout le projet doit être dans un dossier nommé `api_crud`

> C'est important de mettre tout le projet dans un même dossier pour pouvoir faire un docker compose facilement plus tard.

Voici les routes à construirent :

*Pour les produits :*
- GET /product/:id
- GET /product/search/:input
- GET /products/:limit
- GET /products/category/:id
- POST /product
- DELETE /product
- PUT /product
- POST /product/review
- PUT /product/review
- GET /product/:id/review

*Pour les categories de produit :*
- GET /categories
- POST /category
- DELETE /category
- PUT /category

*Pour les utilisateurs :*
- POST /user/login
- POST /user/signin
- PUT /user
- GET /user/:id
- GET /users

*Pour le panier :*
- GET /cart/:userid
- POST /cart/:userid/:productid/:quantity
- PUT /cart/:userid/:productid/:quantity

