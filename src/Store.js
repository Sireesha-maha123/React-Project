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
            {image:"beroot.jpg",name:"Beetroot",price:60},
            {image:"calif.jpg",name:"Cauliflower",price:54},
            {image:"beelpeeer.jpg",name:"Bell Pepper",price:57},
            {image:"peas.jpg",name:" Peas ",price:80},
            {image:"cabbage.jpg",name:"Cabbage ",price:30},
            {image:"seetpo.jpg",name:"  Sweet Potato ",price:230},
            {image:"mash.jpg",name:"   Mushrooms",price:530},
            {image:"broc.jpg",name:" Broccoli",price:130},
            {image:"babycorn.jpg",name:"BabyCorn",price:110},
            {image:"bootle.jpg",name:" Bottle Gourd ",price:130},
            {image:"dramv.jpg",name:"  Drumstick",price:50},
        
            
        ],
          nonVeg:[
                {image:"chiken.jpg",name:"Chicken Drumsticks",price:300},
                {image:"prawn.jpg",name:"prawns",price:400},
                {image:"mutton.jpg",name:"mutton",price:300},
                {image:"eggs.jpg",name:"eggs",price:500},
                {image:"fish.jpg",name:"Fish",price:600},
               {image:"crab.jpg",name:"Crab",price:700},
               {image:"kongfish.jpg",name:"Kingfish",price:100},
               {image:"freshchi.jpg",name:"Whole Chicken",price:220},
               {image:"lob.jpg",name:"Lobster",price:170},
               {image:"thagi.jpg",name:"Chicken Thighs",price:500},
               {image:"freschbrest.jpg",name:"Chicken Breast",price:700},
               {image:"salman.jpg",name:"Salmon (Fresh)",price:500},

             ],
              



            milk:[
                     {image:"jers.jpg",name:"Jerssy",price:70},
                     {image:"lassi.jpg",name:"Lassi",price:90},
                     {image:"heri.jpg",name:"Heritage",price:100},
                     {image:"chesse.jpg",name:"Cheese",price:120},
                     {image:"panner.jpg",name:" Paneer",price:300},
                     {image:"curd.jpg",name:"  Curd",price:200},
                     {image:"ghee.jpg",name:" Ghee",price:1300},
                    {image:"ara.jpg",name:"Aarogya",price:309},
                    {image:"sangam.jpg",name:"Sagam",price:500},
                    {image:"buttermilk.jpg",name:"Buttermilk",price:400},
                    {image:"milkpow.jpg",name:"Milk Powder",price:177},
                    {image:"Cream.jpg",name:"Fresh Cream",price:800},
                    
                  ],
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