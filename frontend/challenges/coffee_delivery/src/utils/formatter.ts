export function currencyFormatter(value: number): string {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  return formatter;
}
