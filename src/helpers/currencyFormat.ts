export function formatCurrency(value: string, currencyCode = 'BRL'): string {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2,
  };
  const formattedValue = new Intl.NumberFormat('pt-BR', options).format(Number(value));

  return formattedValue;
}
