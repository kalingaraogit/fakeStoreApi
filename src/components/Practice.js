// const cart = [];

// const handlecart = (state=cart,action)=>{
//     const product = action.payload
//     switch(action.type){
//         case "ADDITEM":
//         const exist = state.find((x)=> x.id === product.id);
//         if(exist){
//             return state.map((x)=>
//             x.id===product.id?{...x,qty:x.qty+1}:x
//         );
//         else{}
//         }

//     }
// }
import React,{useState,useEffect} from 'react'

const Practice = () => {
    const [data,setData] = useState([]);
    const [filter,setFilter] = useState(data)
    const [loading,setLoading] = useState(false)
    let componentMounted = true

    useEffect(()=>{
        const getProducts = async()=>{
            const response = await fetch('https://fakestoreapi.com/products')
            
        }
    })
  return (
    <div>
      
    </div>
  )
}

export default Practice
