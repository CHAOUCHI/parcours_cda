fetch("http://localhost:3000/tasks")
.then(res=>res.json())
.then(tasks=>{
    console.log(tasks);
});