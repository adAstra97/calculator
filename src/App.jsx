import React, { useReducer } from "react";

import reducer from "./utils/reducer-actions";
import formatOperand from "./utils/format-operand";
import Keyboard from "./components/Keyboard";


function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {});

  return (
    <div className="inline-block border-8 rounded-2xl">
      <div className='grid grid-cols-repeat-4-6rem grid-rows-6-rows'>
        <div className='col-span-full bg-black bg-opacity-70 flex flex-col items-end justify-between rounded-t-md p-4 break-all'>
          <div className=' text-pink-100 text-opacity-75 text-2xl'>{formatOperand(previousOperand)} {operation}</div>
          <div className='text-white text-4xl'>{formatOperand(currentOperand)}</div>
        </div>

        <Keyboard dispatch={dispatch}/>
      </div>
    </div>
  )
}

export default App;
