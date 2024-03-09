
import fetch from "node-fetch";

describe("An API REST serving products",()=>{
    it("should serve all the products at GET /products",async ()=>{
        const response = await fetch("http://localhost:3030/products");
        const data = await response.json();
        
        expect(data).toBeInstanceOf(Array);
    })
})