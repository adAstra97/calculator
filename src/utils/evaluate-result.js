export default function evaluate({ currentOperand, previousOperand, operation }) {
   const prev = +previousOperand;
   const current = +currentOperand;

   if (isNaN(prev) || isNaN(current)) return '';

   let computation;

   switch (operation) {
      case '+':
         computation = prev + current;
         break;
      case '-':
         computation = prev - current;
         break;
      case '*':
         computation = prev * current;
         break;
      case '÷':
         computation = prev / current;
         break;
   }

   return computation.toString();
}
