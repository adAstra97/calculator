import DigitButton from "./buttons/DigitButton";
import OperationButton from "./buttons/OperationButton";
import ClearButton from "./buttons/ClearButton";
import DeleteDigitButton from "./buttons/DeleteDigitButton";
import EvaluateResultButton from "./buttons/EvaluateResultButton";

export default function Keyboard({ dispatch }) {
   return (
      <>
         <ClearButton symbol="AC" dispatch={dispatch} />
         <DeleteDigitButton symbol="DEL" dispatch={dispatch} />
         <OperationButton operation="÷" dispatch={dispatch} />

         <DigitButton digit="1" dispatch={dispatch} />
         <DigitButton digit="2" dispatch={dispatch} />
         <DigitButton digit="3" dispatch={dispatch} />
         <OperationButton operation="*" dispatch={dispatch} />

         <DigitButton digit="4" dispatch={dispatch} />
         <DigitButton digit="5" dispatch={dispatch} />
         <DigitButton digit="6" dispatch={dispatch} />
         <OperationButton operation="+" dispatch={dispatch} />

         <DigitButton digit="7" dispatch={dispatch} />
         <DigitButton digit="8" dispatch={dispatch} />
         <DigitButton digit="9" dispatch={dispatch} />
         <OperationButton operation="-" dispatch={dispatch} />

         <DigitButton digit="." dispatch={dispatch} />
         <DigitButton digit="0" dispatch={dispatch} />
         <EvaluateResultButton symbol="=" dispatch={dispatch} />
      </>
   )
}