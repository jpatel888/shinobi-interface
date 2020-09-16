import { Currency, ETHER, Token } from '@uniswap/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'UBQ'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
