import React, { useEffect, useState } from 'react'

function Dataapi() {
        const [data, Setdata] = useState([]);
        useEffect(() => {
          fetch('https://dummyjson.com/recipes')
            .then((res) => {
              console.log(res);
              return res.json();
            })
            .then((data) => {
              console.log(data,"REAL");
              
            //   Setdata([...data]);
            let ab=data.recipes
            Setdata(ab);
            console.log(data,"first");
            });
        }, []);
        // console.log(data,"second");
        function chandData(cardid){
            let ac=data.filter((item,index)=>{
                return(
                    index!=cardid
                )
            })
            Setdata(ac)
        }
        
  return (
    <>
        {data.map((item,index)=>{
            return(
                <>
                <h1>{item.id}</h1>
            
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>chandData(index)}>delete</button>

                </>
            
            )
        })}
    </>
  )
}

export default Dataapi;