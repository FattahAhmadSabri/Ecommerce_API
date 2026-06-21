let products = [{ id: 1, name: "Math" }];
let nextProductId = 2;

const getProductByIdService=(id)=>{
return products.find((prod)=>prod.id===id)
}

const createProductService =(name)=>{
    const newProduct = {
        id : nextProductId++,
         name
    }
    products.push(newProduct)
    return newProduct
}


module.exports ={getProductByIdService,products,createProductService}