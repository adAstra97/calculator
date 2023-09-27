import evaluate from "./evaluate-result";
import { ACTIONS } from "./actions";

export default function reducer(state, { type, payload }) {
   switch (type) {
      case ACTIONS.ADD_DIGIT:
         if (state.overwrite) {
            return {
               ...state,
               currentOperand: payload.digit,
               overwrite: false,
            };
         }

         if (payload.digit === '0' && state.currentOperand === '0') {
            return state;
         }
         //there can only be one zero

         if (payload.digit === '.' && state.currentOperand == null) {
            return state;
         }
         //press the dot when the current operand is empty

         if (payload.digit === '.' && state.currentOperand.includes('.')) {
            return state;
         }
         //there can only be one dot

         return {
            ...state,
            currentOperand: `${state.currentOperand || ''}${payload.digit}`,
         };

      case ACTIONS.CHOOSE_OPERATION:
         if (state.currentOperand == null && state.previousOperand == null) {
            return state;
         }
         //if nothing is entered, the operation cannot be pressed

         if (state.currentOperand == null) {
            return {
               ...state,
               operation: payload.operation,
            };
         }

         if (state.previousOperand == null) {
            return {
               ...state,
               operation: payload.operation,
               previousOperand: state.currentOperand,
               currentOperand: null,
            };
         }
         //if there is no previous operand

         return {
            ...state,
            previousOperand: evaluate(state),
            operation: payload.operation,
            currentOperand: null,
         };

      case ACTIONS.CLEAR:
         return {};

      case ACTIONS.DELETE_DIGIT:
         if (state.overwrite) {
            return {
               ...state,
               overwrite: false,
               currentOperand: null,
            };
         }

         if (state.currentOperand == null) return state;

         if (state.currentOperand.length === 1) {
            return {
               ...state,
               currentOperand: null,
            };
         }

         return {
            ...state,
            currentOperand: state.currentOperand.slice(0, -1),
         };

      case ACTIONS.EVALUATE:
         //show result
         if (
            state.operation == null ||
            state.currentOperand == null ||
            state.previousOperand == null
         ) {
            return state;
         }

         return {
            ...state,
            overwrite: true,
            previousOperand: null,
            operation: null,
            currentOperand: evaluate(state),
         };
   }
}
