import React, { useState } from "react";
import { useLocation } from "react-router-dom";
function Pages() {
  let location = useLocation();
  // console.log(location);
  const { add, price } = location.state;
  let [dcard,Setcard]=useState(add)
  // let [currentprice,Setcurrentprice]=useState()
  // console.log(dcard);
  // console.log(price, "this is data");

  // increment item function write
  function Handladd(id){
    // console.log(id);
  let a=  dcard.map((item)=>{
      return(
        item.id===id? { ...item, quantity: item.quantity + 1 } : item
        
      )
     
    })
    // console.log(a,"hye");
    Setcard(a)
  }

  // function create decrement button
  function Handleremove(id){
    let a=dcard.map((item)=>{
      return(
        item.id===id &&item.quantity>0?{...item,quantity:item.quantity-1}:item
      )
    })
    Setcard(a)
    // console.log(currentprice);
  }
  
  // total price calculate
  function getTotalPrice(){
    let a= dcard.reduce((total, item) => total + item.price * item.quantity, 0);
    // console.log(card);
    return a.toFixed(2)
   
  };
  return (
    <div>
      {/* <h1>Total price :{price}</h1> */}
      <button >Total Price: {getTotalPrice()}</button>
      {dcard.map((item) => {
        return (
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-4 mb-6" onClick={()=>Handladd(item.id)}>+</button>
            {item.name} Quantity: {item.quantity}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ml-4" onClick={()=>{Handleremove(item.id)}}>-</button>
          </div>
        );
      })}
    </div>
  );
}

export default Pages;
