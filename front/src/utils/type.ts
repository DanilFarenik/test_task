export interface iProduct {
  img?: string,
  price?: number,
  description?: string,
  title?: string,
  id?: string
}

export interface iAction {
  type: string,
  body?: iProduct | iProduct[],
}

export interface iRequestBody {
  body?: string,
  headers: {},
  method: string
}