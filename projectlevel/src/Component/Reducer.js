import React, { useReducer } from 'react'
function Reducer() {
    let reducer=(state,action)=>{
        if (action.type==="ince") {
            return state+1;
            
        }
        else if(action.type==="dec"){
            return state-1;
        }
        else if(action.type==='reset'){
            return state=0;
        }
       if (action.type==='colorchange') {
         if (action.type==="colorchange") {
                state=true
                
            }
            else{
                state=false
            }
            
            
            
        }
        return state
    }
  
    let [state,dispatch]=useReducer(reducer,0)
    
    const initialState = false;
    
    const reducer1 = (staten, action) => {
        switch (action.type) {
            case 'toggle':
      return !staten;
    case 'reset':
      return initialState;
      default:
          return staten;
        }
    };
    const [staten, dispatc] = useReducer(reducer1, initialState);

  

  return (
    <div>
         <div style={{color:staten?"red":"blue"}}> {staten ? 'On' : 'Off'}</div>
         <button   onClick={()=>dispatc({type:"toggle"})} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[140px] mt-4 mb-6' >on</button>
         <div className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[140px] mb-4' onClick={()=>dispatch({type:"ince"})}>Increment</div>
         <div>{state}</div>
         <div className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[140px] mt-4' onClick={()=>dispatch({type:"dec"})}>Decrement</div>
         <div onClick={()=>dispatch({type:"reset"})} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[140px] mt-4'>Reset</div>

    </div>
  )
}

export default Reducer