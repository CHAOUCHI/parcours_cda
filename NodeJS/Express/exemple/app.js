const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({
    origin : [
        "todolist.com"
    ]
}));

const products = [
    {name : "Nike",price : 30},
    {name : "Converse",price : 100},
    {name : "Adidias", price : 30},
];
app.get("/products",(req,res)=>{
    res.json(products);
})

app.post("/product",(req,res)=>{
    const newProduct = req.body;
    products.push(newProduct);
    res.json(newProduct);
});

app.listen(3030);