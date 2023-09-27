import { ACTIONS } from "../../utils/actions";
import playButtonClickSound from "../../utils/sound";

export default function ClearButton({ dispatch, symbol }) {
   return (
      <button
         className="transition-colors delay-50 col-span-2 text-2xl text-zinc-800 border border-white bg-zinc-50 bg-opacity-75 hover:bg-white hover:bg-opacity-90 focus:bg-white focus:bg-opacity-90 focus:shadow-inset"
         onClick={() => {
            dispatch({ type: ACTIONS.CLEAR });
            playButtonClickSound();
         }}>
            {symbol}
      </button>
   )
}