export const requireField = (value: string): void | string => {
  if (!value) return "Field require";
}

export const maxLength = (max: number): (value: string) => string | void => (value) => {
  if (value.length >= max) return "The field is full";
}

export const minLength = (min: number): (value: string) => string | void => (value) => {
  if (value.length <= min) return "The field is too short";
}

export const maxPrice = (value: number): string | void => {
  if (value >= 9999) return "maximum price 9999";
}

export const minPrice = (value: number): string | void => {
  if (value <= 0) return "The price cannot be less than zero";
}

export const isNumber = (value: number): string | void => {
  if (isNaN(value)) return "Wrong number";
}