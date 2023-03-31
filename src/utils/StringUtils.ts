export function excerpt(value: string, length: number = 15, withDots: boolean = true): string {
  return value.length <= length ? value : (value.substr(0, length) + (withDots ? '...' : ''))
}

export function firstCap(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1)
}