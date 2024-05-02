import React, { useEffect, useState } from "react";
import data_mat from "./Data_a";
function Card_search() {
  let [val, Setval] = useState(data_mat);
  let [input, Setinput] = useState("");

  let handler = (e) => {
    Setinput(e.target.value);
    console.log(input, "hehehx");
    let v = val.filter((item, index) => {
      return item.name.includes(input);
    });
    Setval(v);
  };

  return (
    <>
      <div className="w-[1200px] min-h-[200px]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full text-2xl pl-2 rounded p-2 outline"
          onChange={handler}
          value={input}
        ></input>
        <div className="mt-6 flex w-fit items-center flex-wrap justify-between">
          {val.map((item, index) => {
            return (
              <>
                <div className="flex flex-col ml-2" key={index}>
                  <div className="w-[200px] h-[200px] rounded-full overflow-hidden border border-sky-500 mt-6">
                    <img src={item.ima} className="w-full h-full"></img>
                  </div>
                  <p className="mt-2 text-2xl font-semibold">{item.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Card_search;
