# Les jetons JWT (JSON Web Token)
Un jeton (token) JWT est un moyen d'autoriser l'accès à une ressource HTTP. Dans sa forme la plus classique, un token est généré coté serveur lorsque le client effectue une requête d'autentification. Si le client fourni les bons identifiants, le jeton généré lui est fourni. Le client va ensuite fournir ce jeton à chaque requête, si le jeton est valide le serveur va lui renvoyer la ressource demandée, sinon un status code 401.

Un jeton peut transporter des données au format JSON appelées `payload` (un rôle utilisateur, un pseudo, ...). Il possède une signature qui certifie de sa validité et seul le serveur est capable de vérifier le jeton.

Un jeton JWT doit obligatoirement posséder une durée de validité (1semaine, 1mois, 1an).

## Structure d'un JWT
Un token JWT est une string JSON chiffré composé de 3 parties séparés par des points.

`header.payload.signature`

Le ***Header*** est un objet JSON qui défini l'algo utilisé pour le chiffrement du token.
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

Le ***Payload*** (charge utile) est une objet JSON qui contient les données utile à l'utilisation du token.
```json
{
  "sub": "massi.chaouchi@mail.com",
  "name": "Massinissa",
  "role":"admin",
  "iat":16273839
}
```
La ***Signature*** est une string chiffrée à partir de la concaténation du header et du payload ( chacun encodés en base64) séparée par un point. 

```
HS256(base64(header).base64(payload),secret_key)
```

Pour former le token final chaque partie est encodé en base64 et concaténé par un point.
```js
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

> ***eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9*** est le header encodé en base64. 

> ***eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ***. est le payload encodé en base64

> ***SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c*** est la singature encodé en base64

## Fournir un token JWT
Il existe de nombreuse bibliotèques pour générer un JWT, je vais utiliser le paquet npm `jsonwebtoken`.

Voir la liste des bibliotèques jwt  : https://jwt.io/libraries

```js
const jwt = require("jsonwebtoken");
const secret = "my-secret-key-of-the-dead";

app.post("/login",(req,res)=>{
    // testing user credentials...

    const payload = { name : "Massinissa", role : "admin"};
    const newToken = jwt.sign(payload,secret);

    return res.json({jwt : newToken});
})
```
> La clé secrète doit être stockée dans un fichier séparé et ne jamais apparaitre dans un repo github (gitignore).

## Vérifier un token JWT
```js
const jwt = require("jsonwebtoken");
const secret = "my-secret-key-of-the-dead";

// J'utilise le middleware checkJwt pour vérifier le jwt avant la route post.
app.post("/product",checkJwt,(req,res)=>{
   // ...
   res.status(200).json({...});
})

function checkJwt(req,res,next){
    const token = req.body.jwt;
    jwt.verify(token,secret,(err,decodedToken)=>{
        if(err){
            res.status(401).json("Unauthorized, wrong token");
            return;
        }
        switch (decodedToken.role){
            case "admin":
                next();
                break;

            case "guest":
            default:
                res.status(401).json("Unauthorized role");
                break;
        }
    })
}
```

> Le status code 401 correspond à la réponse HTTP `Unauthorized`.

## Le client envoi son token

L'exemple plus haut montre comment fournir au client un token JWT et comment lire un token envoyé par le client. Cependant pour des raisons de sécurité il est préférable de fournir au client le token via un Http Cookie. 

Cela empèche le client d'avoir accès au token et donc sécurise le token en cas de code JS malveillant dans le client front.

Une fois placé dans un cookie une donnée est automatiquement renvoyée par le navigateur à chaque requête. Le client n'a donc pas besoin de gérer l'envoi du token.

Pour placer le token dans le cookie avec express je peux :

```js
const jwt = require("jsonwebtoken");
const secret = "my-secret-key-of-the-dead";

app.post("/login",(req,res)=>{
    // testing user credentials...

    const payload = { name : "Massinissa", role : "admin"};
    const newToken = jwt.sign(payload,secret);

    res.cookie("token",newToken,{httpOnly:true});

    return res.json({msg : "Authorized"});
});
```

Le middleware `checkJwt` doit donc lire les cookies plutôt que le `body` de la requête.

```bash
npm i cookie-parser
```
```js
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// ...

function checkJwt(req,res,next){
    
    const token = req.cookies.token; // Lire les cookies plutôt que le body.


    jwt.verify(token,secret,(err,decodedToken)=>{
        if(err){
            res.status(401).json("Unauthorized, wrng token");
            return;
        }
        switch (decodedToken.role){
            case "admin":
                next();
                break;

            case "guest":
            default:
                res.status(401).json({msg:"Unauthorized role"});
                break;
        }
    })
}
```