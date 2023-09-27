import { ACTIONS } from "../../utils/actions";

export default function DeleteDigitButton({ dispatch, symbol }) {
   return (
      <button
         className="transition-colors delay-50 text-3xl border border-white bg-zinc-50 bg-opacity-75 hover:bg-white hover:bg-opacity-90 focus:bg-white focus:bg-opacity-90"
         onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
            {symbol}
      </button>
   )
}