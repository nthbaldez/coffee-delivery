import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { ShoppingCart } from 'phosphor-react'
import { AddOrDecrementButtonContainer, Card } from './styles'
import { useEffect, useState } from 'react'

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

interface ProductCardProps {
  addProduct: (id: string, amount: number) => void
  product: CoffeeProps
  itemsAmount: number
}

export default function ProductCard({
  product,
  addProduct,
  itemsAmount,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    setQuantity(itemsAmount)
  }, [itemsAmount])

  function handleAddProduct(id: string, amount: number) {
    addProduct(id, amount)
  }
  return (
    <Card>
      <img src={product.image} alt={product.name} />

      <div>
        {product.types.map((type, index) => (
          <span key={index}>{type}</span>
        ))}
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <footer>
        <p>
          <span>{product.priceFormatted}</span>
        </p>

        <AddOrDecrementButtonContainer>
          <button id="decrement">
            <AiOutlineMinus />
          </button>
          <p>{quantity}</p>
          <button id="increment">
            <AiOutlinePlus />
          </button>
        </AddOrDecrementButtonContainer>

        <button onClick={() => handleAddProduct(product.id, quantity)}>
          <ShoppingCart size={32} weight="fill" color="white" />
        </button>
      </footer>
    </Card>
  )
}
