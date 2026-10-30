export function createFormatter(currency: '€' | '$'): (price: number) => string {
  return (price) => `${price.toFixed(2)} ${currency};`
}
