import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice= createSlice({
    name:'products',
    initialState:{veg:
        [ {image:"th.jpg",  name:"potato",price:70},
            {image:"tomato.jpg",name:"tomato",price:30},
            { image:"brinjal.jpg",name:"brinjal",price:40},
            {image:"onion.jpg",name:"onion",price:80},
            {image:"ledes.jpg",name:"ladiesFingers",price:20},
            {image:"currylev.jpg",name:"CurryLeves",price:10},
            {image:"mirchi.jpg",name:"GreenChill",price:75},
            {image:"bet.jpg",name:"BetterGard",price:40},
            {image:"pamkin.jpg",name:"Pampkin",price:80},
            {image:"beroot.jpg",name:"Beetroot",price:60},
            {image:"calif.jpg",name:"Cauliflower",price:54},
            {image:"beelpeeer.jpg",name:"Bell Pepper",price:57},
            {image:"peas.jpg",name:" Peas ",price:80},
            {image:"cabbage.jpg",name:"Cabbage ",price:30},
            {image:"seetpo.jpg",name:"  Sweet Potato ",price:110},
            {image:"mash.jpg",name:"   Mushrooms",price:130},
            {image:"broc.jpg",name:" Broccoli",price:200},
            {image:"babycorn.jpg",name:"BabyCorn",price:110},
            {image:"bootle.jpg",name:" Bottle Gourd ",price:50},
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
                     {image:"lassi.jpg",name:"Lassi",price:20},
                     {image:"heri.jpg",name:"Heritage",price:60},
                     {image:"chesse.jpg",name:"Cheese",price:120},
                     {image:"panner.jpg",name:" Paneer",price:100},
                     {image:"curd.jpg",name:"  Curd",price:30},
                     {image:"ghee.jpg",name:" Ghee",price:400},
                    {image:"ara.jpg",name:"Aarogya",price:30},
                    {image:"sangam.jpg",name:"Sagam",price:50},
                    {image:"buttermilk.jpg",name:"Buttermilk",price:25},
                    {image:"milkpow.jpg",name:"Milk Powder",price:177},
                    {image:"Cream.jpg",name:"Fresh Cream",price:80},
                    
                  ],
             lefyVeg:[
                        {image:"spinach.jpg",name:"Spinach",price:30},,
                        {image:"mint.jpg",name:"Mint",price:25},
                        {image:"core.jpg",name:"Coriyander",price:30},
                        {image:"onionleaves.jpg",name:"SpringOnion leves",price:50},
                        {image:"lattec.jpg",name:" Lettuce",price:60},
                        {image:"swiss.jpg",name:"Swiss Chard",price:30},
                        {image:"collared.jpg",name:"Collard Greens",price:40},
                        {image:"mustord.jpg",name:"Mustard Greens",price:60}],

            fruits:[
            {image:"banana.jpg",name:"Banana",price:80},,
            {image:"apple.jpg",name:"Apple",price:100},
            {image:"cherry.jpg",name:"Cherry",price:120},
            {image:"grape.jpg",name:"Grape",price:40},
            {image:"kiwi.jpg",name:" Kiwi",price:50},
            {image:"mango.jpg",name:" Mango",price:200},
            {image:"orange.jpg",name:" Orange",price:130},
            {image:"papaya.jpg",name:"Papaya",price:130},
            {image:"pineapple.jpg",name:" Pineapple",price:60},
            {image:"staw.jpg",name:" Strawberry",price:80},
            {image:"water.jpg",name:" Watermelon ",price:50},
            
            {image:"pom.jpg",name:"Pomegranate ",price:120}
    
        ],
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