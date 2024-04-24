# Promise
Une promesse est un objet qui effectue une action avant de vous fournir le résultat de façon asyncrone.
Le résultat d'une promesse est disponible dans une fonction callback.
On utilise la fonction resolve() pour résoudre la promesse et fournir un résultat dans le then().
Syntaxe :
```js
const promesse = new Promise((resolve)=>{
    console.log("Début de la promesse");
    const randomInteger = Math.floor(Math.random()*10); // integer [0;10]

    resolve(randomInteger); // je fournit le résultat à la fonction callback du then
    console.log("La résolution à été appelée et sera executée de façon asyncrone...");

    console.log("Fin de la promesse");
});

promesse.then(randomInteger=>{   // J'accède au résultat de la promesse
    console.log("Random number = ",data);
}); 
```
## Gestion d'erreur
Les promesses simplifie la gestion des erreurs via la fonction catch.
On passe une donnée dans la fonction reject, qui lève une erreur dans le programme.
Cette erreur est ensuite utilisable dans la fonction catch() de la même manière que pour la fonction then().
```js
const promesse = new Promise((resolve,reject)=>{
    const randomInteger = Math.floor(Math.random()*10); // Un nombre aléatoire [0,10]

    if(randomInteger%2 == 0){
        resolve("Le nombre est pair : "+randomInteger);
    }
    else{
        reject("ERROR ! Le nombre est impair : "+randomInteger);
    }
});

promesse
.then(data=>{
    console.log(data);
})
.catch(error=>console.log(error));
```

## Encapsuler une Promise dans une fonction
Vous remarquerez que, lors de l'instanciation d'un objet Promise, le code est instantanément executée ce qui peut être gênant si l'on veut réutiliser la promesse plus tard.
On encapsule donc généralement la promesse dans une fonction qui va retourner l'objet promesse.

```js
function pairNumber(){
    return new Promise((resolve,reject)=>{
        const randomInteger = Math.floor(Math.random()*10);
        
        if(randomInteger%2 == 1){
            resolve("Le nombre est pair : "+randomInteger);
        }
        else{
            reject("ERROR ! Le nombre est impair : "+randomInteger);
        }
    });
} 

pairNumber().then(data=>{
    console.log("1) Ce nombre est pair : ",data);
}).catch(error=>console.log("1)",error));

pairNumber().then(data=>{
    console.log("2) Ce nombre est pair : ",data);
}).catch(error=>console.log("2)",error));

pairNumber().then(data=>{
    console.log("3) Ce nombre est pair : ",data);
}).catch(error=>console.log("3)",error));
```

# Exemples
Les promesses sont faite pour gérer les actions asyncrones qui prennent du temps.
## setTimeout
```js
function delay(time){
    return new Promise((resolve)=>{
        setTimeout(resolve,time)
    });
}
delay(2000)
.then(_=>console.log("2s plus tard..."));
```
Parfois ces actions peuvent échouer et provoquer des erreurs comme pour une requete HTTP d'un fetch ou l'accès à une BDD SQL par exemple.
J'utilise donc `resolve` ET `reject` pour utiliser toute la puissance des Promises.
```js
function getNote(id){
    return new Promise((resolve,reject)=>{
        fetch("http://localhost:8000/note/"+id)
        .then(product=>{
            if(product == null){
                reject("Aucune note ne possède cet id !");
            }
            resolve(product);
        })
        .catch(error=>{
            // Echec du fetch, peut être du à :
            // CORS, connexion internet coupé, serveur éteint ou inaccessible...
            reject(error);  
        })
    });
}

getNote(3)
.then(product=>{
    console.log(product);
})
.catch(error=>console.log(error))
```
En terme de code les promesses sont plus longue à mettrent en place mais permettent de factoriser le code et la gestion d'erreur d'une façon très puissante, ma nouvelle fonction getProduct est très simple à utiliser et renvoi des erreurs dans le catch de façon intuitive.

La factorisation de promesse dans des fonctions permet une code propre lors de cas de figure qui neccessitent plusieurs appel de promesses.
Par exemple, la suppression d'un élement : Je veux créer une promesse qui supprime un élément et fournit l'élément qui à été supprimée.
Je doit donc utiliser la fonction getNote dans la fonction deleteNote
```js
function deleteNote(id){
    return new Promise((resolve,reject)=>{
        getNote(id)
        .then((note)=>{
            fetch("http://localhost:8000/note/"+id,{method:"delete"})
            .then(_=>{
                resolve(note);
            })
            .catch(error=>reject(error));
        })
        .catch(error=>reject(error));
    })
}

deleteNote(3)
.then(deletedNote=>{
    console.log("La note à bien été supprimée");
    console.log(deletedNote);
});
```
## async await
Si je veut faire disparaitre la syntaxe .then() je peut faire de ma fonction une fonction asyncrone avec le mot clé `async`, puis utilise le mot clé `await` pour attendre la résolution de la promesse avant de passer à la suite.
```js
function deleteNote(id){
    return new Promise(async (resolve,reject)=>{    // Cette fonction est asyncrone
        const note = await getNote(id).catch(error=>reject(error));
        await fetch("http://localhost:8000/note/"+id,{method:"delete"}).catch(error=>reject(error));
        resolve(note);
    })
}

deleteNote(3)
.then(deletedNote=>{
    console.log("La note à bien été supprimée");
    console.log(deletedNote);
});
```
Le code à nettement réduit. Je précise tout de même les `catchs` pour la gestion d'erreurs.

# Exercice promise 
1. delay(time) : comme effectué précedemment, encapsulez dans une fonction un setTimeout en tirant parti des promesses.
2. getNoteById(id) : comme effectué précedemment, encapsulez dans une fonction un fetch vers une route en tirant parti des promesses.
3. getAllNotes() : encapsulez dans une fonction Promise une route GET /notes qui renvoi tout les produits.
4. deleteNoteById(id) : comme effectué précédemment, encapsulez dans une fonction Promise une route DELETE /note/:id qui supprime une note.
5. editNote(content,title,isFavorite) : encapsulez dans une fonction Promise une route PUT /note qui modifie une note et renvoi la note modifiée.
6. addNote(title,content,idFavorite = false) : encapsulez dans une fonction Promise une route POST /note qui ajoute une note et la renvoi.
7. getFavoriteNote(isFavorite) : encapsulez dans une fonction Promise une route GET /notes/fav/:isFav qui récupère les notes favoris ou non.
7. BONUS : searchNotes(text) : encapsulez dans une fonction Promise une route GET /notes/:text qui cherche TOUTES les notes qui ont le paramètre `text` dans leurs `title` ou `content`.