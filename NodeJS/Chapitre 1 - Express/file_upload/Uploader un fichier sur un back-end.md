# Uploader un fichier sur un back end nodejs
L'upload d'un fichier sur un back-end se passe toujours de la même façon :

## Coté front-end :
1. L'utilisateur place le fichier dans un formulaire html
2. On effectue un fetch POST qui envoie le contenu du formulaire dans un objet FormData().
3. Je récupère l'url du fichier dans le then du fetch et j'en fait ce que je veux.

## Coté back-end :
1. Je crée une route POST pour accueillir les fichiers envoyé en fetch par le client
2. Je décode le body de la requête grace au middleware de l'extension express-fileupload
3. Je récupère mon fichier en tant qu'attribut de l'objet `req.files`.
4. J'enregistre le fichier dans un dossier nommé `/public` avec la fonction `mv()`.
5. J'envoie l'url en tant que body JSON au client.

*app.js*
```js
const express = require("express");
const cors = require("cors");

// J'importe le module express-fileupload.
// Il permet de parser les fichiers envoyés par le client.
// Le client doit obligatoirement préciser l'attribut enctyp à multipart/form-data
// Comme ceci : <form enctype="multipart/form-data">
const fileUpload = require("express-fileupload");
const app = express();

app.use(cors());

app.use(express.static("public"));

// Je remplis l'attribut req.files
// Au même titre que express.json() remplis req.body
// fileUpload() remplis req.files
app.use(fileUpload());

app.post("/upload", async (req,res)=>{
    console.log(req.files)
    // Le fichier s'appelle "image" à cause du name de la balide <input>
    // <input type="file" name="image" id="image">
    const image = req.files.image;  
    
    if(image == undefined){
        res.status(400).json({msg : "No image sent by the client"})
        return;
    }
    // Je forme un nom unique pour le fichier, cette étape n'est pas obligatoire.
    const extensionFile = image.name.split(".")[1];
    const fileName = image.name.split(".")[0];
    const completeFileName = `${fileName}_${Date.now()}.${extensionFile}`;

    // J'utilise la fonction mv() pour uploader le fichier
    // dans le dossier /public du répértoire courant
    image.mv(`${__dirname}/public/${completeFileName}`);

    // Je renvoi l'url final au client
    res.json({url : `http://localhost:8080/${completeFileName}`});
});

app.use((req,res)=>res.status(404).json({msg : "This route does not exists"}))

app.listen(8080,()=>{
    console.log("Server listen on port 8080")
});
```
> `__dirname` est une variable de NodeJS qui renvoi le répertoire actuel du fichier dans lequel y est appelé. Par exemple : **C:/User/Document/Projet/JS/back/...**

> image.mv() et image.name sont des propriété de la classe FileHandle. On peut utiliser ces propriétés car image est récupéré de l'objet req.files.
> Les attributs de req.files sont crée par le middleware `fileUpload()`

*index.html*
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uploader un fichier</title>
</head>
<body>
    <form enctype="multipart/form-data">
        <input type="text" name="name" id="name">
        <input type="file" name="image" id="image">
        <button type="submit">Envoyer</button>
    </form>
</body>
<script>
    const form = document.querySelector("form");

    form.addEventListener("submit",async (e)=>{
        e.preventDefault();
        
        // Pour l'envoi de fichier je n'utilise pas le format JSON 
        // mais FormData()
        const formData = new FormData(form);

        const data = await fetch("http://localhost:8080/upload",{
            method : "post",
            body : formData // Je passe les données FormData en body
        }).then(res=>res.json());

        const img = document.createElement("img");
        
        img.setAttribute("src",data.url);

        document.body.appendChild(img);
    });
</script>
</html>
```

## Utilisation
Uploader un fichier en lançant un serveur sur le `index.html`.
Un nouveau fichier doit être apparue dans votre dossier `/public`.