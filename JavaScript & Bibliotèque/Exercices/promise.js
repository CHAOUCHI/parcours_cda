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
