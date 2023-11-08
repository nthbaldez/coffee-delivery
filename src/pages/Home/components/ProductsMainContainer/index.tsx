import { useState } from 'react'
import ProductCard from '../ProductCard'
import { ProductsContainer, ProductsList } from './styles'

type CoffeeProps = {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export default function ProductsMainContainer() {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])

  return (
    <ProductsContainer>
      <h1>Nossos Cafés</h1>

      <ProductsList>
        <ProductCard />
      </ProductsList>
    </ProductsContainer>
  )
}
