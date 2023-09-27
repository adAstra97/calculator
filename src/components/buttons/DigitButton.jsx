import { ACTIONS } from "../../utils/actions";
import playButtonClickSound from "../../utils/sound";

export default function DigitButton({ dispatch, digit }) {
   return (
      <button
         className="transition-colors text-zinc-800 delay-50 text-3xl border border-white bg-zinc-50 bg-opacity-75 hover:bg-white hover:bg-opacity-90 focus:bg-white focus:bg-opacity-90 focus:shadow-inset"
         onClick={() => {
            dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit }});
            playButtonClickSound();
         }}>
            {digit}
      </button>
   )
}