import { ACTIONS } from "../../utils/actions";

export default function OperationButton({ dispatch, operation }) {
   return (
      <button
         className="transition-colors delay-50 text-3xl border border-white bg-zinc-50 bg-opacity-75 hover:bg-white hover:bg-opacity-90 focus:bg-white focus:bg-opacity-90"
         onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation }})}>
            { operation }
      </button>
   )
}