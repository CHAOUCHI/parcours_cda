const express = require("express");
const cors = require("cors");
const { del } = require("request");

const app = express();
app.use(express.json());
app.use(cors());

const products = [
    {name : "Nike",price : 30},
    {name : "Converse",price : 100},
    {name : "Adidias", price : 30},
];

app.get("/products",(req,res)=>{
    res.json(products);
})

app.get(parseIdToInt,"/product/:id",(req,res)=>{

    res.json(products[req.params.id]);
});

app.post("/product",(req,res)=>{
    const newProduct = req.body;
    products.push(newProduct);
    res.json(newProduct);
});

app.put(parseIdToInt,"/product/:id",(req,res)=>{
    const newProductValues = req.body;
    const product = products[req.params.id] = {
        ...products[req.params.id],
        ...req.body
    };
    res.json({id:req.params.id,product});
});


app.delete(parseIdToInt,"/product/:id",(req,res)=>{

    const deletedProducts = products.splice(id,1);
    
    res.json(deletedProducts);
});

app.listen(3030);


function parseIdToInt(req,res,next){
    const id = parseInt(req.params.id);
    if(id===NaN) {
        res.status(400).json({id : req.params.id});
        return;
    }
    req.params.id = id;

    next();
}