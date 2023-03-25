export function excerpt(value: string, length: number = 15, withDots: boolean = true): string {
  return value.length <= length ? value : (value.substr(0, length) + (withDots ? '...' : ''))
}