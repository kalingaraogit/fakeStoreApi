// For Add Item To Cart 

export const addCart = (product)=>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// For Del Item From Cart

export const delCart =(product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
} 

// clearcart 
export const clearCart = (product) => {
    return {
      type: "CLEAR_CART"
    };
  };