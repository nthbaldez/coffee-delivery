import { useEffect, useState } from 'react'
import { ProductsContainer, ProductsList } from './styles'

import ProductCard from '../ProductCard'
import { formatPrice } from '../../../../utils/formatPrice'
import { api } from '../../../../services/api'
import { Product } from '../../../../types'
import { useCart } from '../../../../hooks/useCart'

type CoffeeProps = {
  id: string
  name: string
  description: string
  price: number
  priceFormatted: string
  image: string
  types: string[]
  amount: number
}

interface CartItemsAmount {
  [key: number]: number
}

export default function ProductsMainContainer() {
  const [products, setProducts] = useState<CoffeeProps[]>([])

  const { addProduct, cart } = useCart()

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount }
    newSumAmount[+product.id] = product.amount

    return newSumAmount
  }, {} as CartItemsAmount)

  useEffect(() => {
    const controller = new AbortController()
    async function loadProducts() {
      const response = await api.get<Product[]>('/products', {
        signal: controller.signal,
      })

      const productsFormatted = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }))
      setProducts(productsFormatted)
    }

    loadProducts()

    return () => controller.abort()
  }, [])

  return (
    <ProductsContainer>
      <h1>Nossos Cafés</h1>
      <ProductsList>
        {products.map((coffee) => (
          <ProductCard
            key={coffee.id}
            addProduct={addProduct}
            product={coffee}
            itemsAmount={cartItemsAmount[+coffee.id] || 0}
          />
        ))}
      </ProductsList>
    </ProductsContainer>
  )
}
