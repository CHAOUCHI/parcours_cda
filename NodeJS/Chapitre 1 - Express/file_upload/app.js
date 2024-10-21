const express = require("express");
const cors = require("cors");

// J'importe le module express-fileupload, il permet de parser les fichiers envoyés par le client
// Le client doit obligatoirement préciser l'attribut enctyp à multipart/form-data
// Comme ceci : <form enctype="multipart/form-data">
const fileUpload = require("express-fileupload");
const app = express();

app.use(cors());

app.use(express.static("public"));

// Je remplis l'attribut req.files
app.use(fileUpload());  

app.post("/upload",async (req,res)=>{
    console.log(req.files)
    // Le fichier s'appelle image à cause du name de la balide <input>
    // <input type="file" name="image" id="image">
    const image = req.files.image;  
    
    if(image == undefined){
        res.status(400).json({msg : "no image sent by client"})
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