import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice= createSlice({
    name:'products',
    initialState:{veg:
        [ {image:"th.jpg",  name:"potato",price:200},
            {image:"tomato.jpg",name:"tomato",price:300},
            { image:"brinjal.jpg",name:"brinjal",price:200},
            {image:"onion.jpg",name:"onion",price:100},
            {image:"ledes.jpg",name:"ladiesFingers",price:400},
            {image:"currylev.jpg",name:"CurryLeves",price:120},
            {image:"mirchi.jpg",name:"GreenChill",price:170},
            {image:"bet.jpg",name:"BetterGard",price:230},
            {image:"pamkin.jpg",name:"Pampkin",price:430},
        ],
          nonVeg:[
                {image:"chiken.jpg",name:"chicken",price:300},,
                {image:"prawn.jpg",name:"prawns",price:400},
                {image:"mutton.jpg",name:"mutton",price:300},
                {image:"eggs.jpg",name:"eggs",price:500},
                {image:"fish.jpg",name:"Fish",price:600},
               {image:"crab.jpg",name:"Crab",price:700} ],
            milk:[
                     {image:"jers.jpg",name:"Jerssy",price:300},,
                    {image:"heri.jpg",name:"Heritage",price:400},
                    {image:"ara.jpg",name:"Aarogya",price:300},
                    {name:"Sagam",price:500}],
             lefyVeg:[
                        {image:"spinach.jpg",name:"Spinach",price:300},,
                        {image:"mint.jpg",name:"Mint",price:400},
                        {name:"Coriyander",price:300},
                        {name:"SpringOnion leves",price:500}],

        },
        reducers:{},
});
const cartSlice= createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
         let   item=state.find((item)=>item.name===action.payload.name);
         if(item)
        {
            item.quantity+=1;
         } 
         else
         {
            state.push({...action.payload,quantity:1});
         } 
        } ,
        increment:(state,action)=>
        {
            let item=state.find(item=>item.name===action.payload.name);
            if(item){
                item.quantity+=1;
            }
        },
        decrement:(state,action)=>
            {
                let item=state.find(item=>item.name===action.payload.name);
                if(item && item.quantity>1){
                    item.quantity-=1;
                }
                else
                {

                
                    return state.filter(item=>item.name!==action.payload.name);
                }

                
            },
            remove:(state,action)=>
                {
                    return state.filter(item=>item.name!==action.payload.name);
                },
            clearCart: ()=> []
            
                
            
    
    }
    
});

const purchaseDetailsSlice=createSlice({
              name:'purchase',
              initialState:[],
              reducers:{
                addPurchaseDetails:(state,action)=>
                    
                    {state.push({...action.payload});
                },
            },
                
              });
const authSlice=createSlice({
    name:"auth",
    initialState:
    {
        isAuthenticated:localStorage.getItem("username")
        ?true:false,
        user:localStorage.getItem("username")|| "",
    },
    reducers:{
        login:(state,action)=>
            {
            state.isAuthenticated=true;
            state.user=action.payload;
            localStorage.setItem("username",
                action.payload);
            },
        
        logout:(state)=>
        {
            state.isAuthenticated=false;
            state.user="";
            localStorage.removeItem("username");
        },
     },

    
});


const store=configureStore({
    reducer:{products:productSlice.reducer,
             cart:cartSlice.reducer,
             purchase:purchaseDetailsSlice.reducer,
             auth:authSlice.reducer
    },

});


export const {addToCart,increment,decrement,remove,clearCart} =cartSlice.actions;
export const {addPurchaseDetails} =purchaseDetailsSlice.actions;
export const {login,logout}=authSlice.actions;
export default store;