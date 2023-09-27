//number formation

const INTEGER_FORMATTER = new Intl.NumberFormat('ru-Ru', {
   maximumFractionDigits: 0,
});

export default function formatOperand(operand) {
   if (operand == null) return;

   const [integer, decimal] = operand.split('.');
   if (decimal == null) return INTEGER_FORMATTER.format(integer);
   return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}
