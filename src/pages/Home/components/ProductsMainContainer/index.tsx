import { useEffect, useState } from 'react'
import { ProductsContainer, ProductsList } from './styles'
import { GetProducts } from '../../../../services/products.service'

import ProductCard from '../ProductCard'

type CoffeeProps = {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export default function ProductsMainContainer() {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetProducts()
        setCoffees(response.data)
      } catch (error) {
        console.error('Erro na requisição:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <ProductsContainer>
      <h1>Nossos Cafés</h1>
      <ProductsList>
        {coffees.map((coffee) => (
          <ProductCard key={coffee.id} {...coffee} />
        ))}
      </ProductsList>
    </ProductsContainer>
  )
}
