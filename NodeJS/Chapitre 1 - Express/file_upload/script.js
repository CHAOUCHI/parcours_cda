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
})
