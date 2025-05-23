export const { format: formatCurrency } = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const { format: formatDate } = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});
