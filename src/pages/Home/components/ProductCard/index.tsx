import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { ShoppingCart } from 'phosphor-react'
import { AddOrDecrementButtonContainer, Card } from './styles'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

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

  function handleProductIncrement() {
    setQuantity((prev) => prev + 1)
  }

  function handleProductDecrement() {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1)
    }
  }

  function handleAddProduct(productId: string, quantity: number) {
    if (quantity !== 0) {
      addProduct(productId, quantity)
    }
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
          <button id="decrement" onClick={handleProductDecrement}>
            <AiOutlineMinus />
          </button>
          <p>{quantity}</p>
          <button id="increment" onClick={handleProductIncrement}>
            <AiOutlinePlus />
          </button>
        </AddOrDecrementButtonContainer>

        <button onClick={() => handleAddProduct(product.id, quantity)}>
          <NavLink to="/checkout">
            <ShoppingCart size={32} weight="fill" color="white" />
          </NavLink>
        </button>
      </footer>
    </Card>
  )
}
