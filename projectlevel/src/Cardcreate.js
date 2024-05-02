import React, { useEffect, useState } from "react";
import dummyFoodData from "./Data";
import {useNavigate } from "react-router-dom";
function Cardcreate() {
  // this use state total dummydata store array format
  let [card, Setcard] = useState([]);
  let [add, Setadd] = useState([]);
  useEffect(() => {
    Setcard(dummyFoodData.map((item) => ({ ...item, quantity: 0 })));
  }, []);

  // addcard button function write
  function handleAddToCart(id) {
    // console.log(id);
    let update = card.map((item) => {
      return item.id === id ? { ...item, quantity: (item.quantity = 1) } : item;
    });
    Setcard(update);
    const productdata = { ...card.find((item) => item.id === id) };
    // console.log(productdata);
    Setadd([...add, productdata]);
    console.log(add,"addcard");
  }
 

  // increment button write function
  function handleAdd(id) {
    let update = card.map((item) => {
      return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
    });
    Setcard(update);
    const productToAdd = { ...card[id]};
    console.log(productToAdd,"producttoadd");
    Setadd([...card, productToAdd]);
    console.log("this is add containt",add);
    // console.log(card,"data of card");
  }

  // decrement button write function
  function handleRemove(id) {
    let update = card.map((item) => {
      return item.id === id ? { ...item, quantity: item.quantity - 1 } : item;
    });
    Setcard(update);

  }
  // **************************************
  // calculate total price of item
  function getTotalPrice(){
    let a= card.reduce((total, item) => total + item.price * item.quantity, 0);
    console.log(card);
    return a.toFixed(2)
 
  };
   // **************************************
  //  EXAMPLE OF REDUCE Method
      // let arr=[10,20,30,40,50,60];
      // let aa=arr.reduce((first,second)=>{
      //   return(
      //     first+second
      //   )
      // })
      // console.log("this value of reduce function",aa);

  //navigate use to new page open and data send possible
  let nav = useNavigate();
  function clickNewpage() {
    // price send new page
    let price = getTotalPrice();
    // new page pr send data only greater than zero 
    const filtercard = card.filter((item) => item.quantity > 0);
    nav("/view", { state: { add: filtercard, price } });
  
    // nav('/view')
  }

  return (
    <div>
      <div className="max-w-[1000px] min-h-[200px] m-auto mt-4 rounded flex flex-col relative bg-zinc-600">
        {card.map((value, index) => {
          return (
            <div className="flex">
              <div>
                <img
                  src={value.image}
                  className="w-[260px] h-[220px] rounded mb-2"
                ></img>
              </div>
              <div className="flex flex-col items-start ml-4 mt-2 text-2xl">
                <h1>{value.name}</h1>
                <p>{value.description}</p>
                <p>price :{value.price}</p>

                {/* validation button create and handle to help ternary operator */}
                {value.quantity === 0 ? (
                  <button
                    onClick={() => handleAddToCart(value.id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
                  >
                    Add card
                  </button>
                ) : (
                  <div className="flex w-[140px] justify-between items-start mt-2">
                    <p
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        handleRemove(value.id);
                      }}
                    >
                      -
                    </p>
                    <p>{value.quantity}</p>
                    <p
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleAdd(value.id)}
                    >
                      +
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        {/* Total price calculate */}
        <div className="flex absolute top-2 right-0 mr-6 items-center gap-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Total Price: {getTotalPrice()}
          </button>
          {/* <p>Total Price: {getTotalPrice()}</p> */}
        </div>
        {/* new page button create   */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute right-4 top-[200px]"
          onClick={clickNewpage}
        >
          View card :({card.filter((item) => item.quantity > 0).length})
        </button>
      </div>
    </div>
  );
}

export default Cardcreate;
