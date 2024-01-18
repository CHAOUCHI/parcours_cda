class Promesse{
    constructor(executor){
        this.resolveFunctions = new Array();       
        executor((userValue)=>{
            queueMicrotask(()=>{
                this.resolveFunctions.forEach(cb=>cb(userValue));
            })
        });
    }

    then(cb){
        this.resolveFunctions.push(cb);
        return this;
    }
}
console.log("Starts");
setTimeout(()=>console.log("timeout"),0);

let promesse = new Promesse((resolve)=>{
    console.log("Exector promesse");
    resolve(101);
})
console.log("Ends");

promesse.then((value)=>{
    console.log("microtask then method 1 : ",value);
});



