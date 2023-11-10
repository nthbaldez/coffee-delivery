export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  types: string[]
  amount: number
}

export interface ProductInCart extends Product {
  amount: number
}
