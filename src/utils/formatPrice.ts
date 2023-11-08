export function formatPrice(valueInCents: number) {
  const formattedValue = valueInCents / 1000
  return formattedValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
