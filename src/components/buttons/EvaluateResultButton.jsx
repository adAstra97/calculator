import { ACTIONS } from "../../utils/actions";
import playButtonClickSound from "../../utils/sound";

export default function EvaluateResultButton({ dispatch, symbol }) {
   return (
      <button
         className="transition-colors text-zinc-700 delay-50 col-span-2 text-3xl border border-white bg-zinc-50 bg-opacity-75 hover:bg-white hover:bg-opacity-90 focus:bg-white focus:bg-opacity-90 focus:shadow-inset"
         onClick={() => {
            dispatch({ type: ACTIONS.EVALUATE });
            playButtonClickSound();
         }}>
            {symbol}
      </button>
   )
}