import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { AddOrDecrementButtonContainer } from './styles'
import { useState } from 'react'
import useCart from '../../../../../hooks/useCart'

interface Product {
  name: string
  price: number
  description: string
  id: string
  image: string
  types: string[]
}

interface AddOrDecrementProps {
  data: Product
}

export default function AddOrDecrementButton({ data }: AddOrDecrementProps) {
  const { handleUpdateQuantity } = useCart()
  const [quantity, setQuantity] = useState(0)
  // const [product, setProduct] = useState<Product>()
  const { id } = data

  function handleIncrement() {
    setQuantity(quantity + 1)
    handleUpdateQuantity(id, quantity)
    handleAddToCart()
  }

  function handleDecrement() {
    if (quantity > 0) {
      setQuantity(quantity - 1)
      handleUpdateQuantity(id, quantity)
      handleAddToCart()
    }
  }

  function handleAddToCart() {
    const cartItems = localStorage.getItem('cart-items')
    if (cartItems) {
      const cartItemsArray = JSON.parse(cartItems)

      const existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === id,
      )

      if (existingProductIndex !== -1) {
        cartItemsArray[existingProductIndex].quantity += 1
      } else {
        cartItemsArray.push({ ...data, quantity: 1, id })
      }
      localStorage.setItem('cart-items', JSON.stringify(cartItemsArray))
    } else {
      const newCart = [{ ...data, quantity: 1, id }]
      localStorage.setItem('cart-items', JSON.stringify(newCart))
    }
  }

  return (
    <AddOrDecrementButtonContainer>
      <button id="decrement" onClick={handleDecrement}>
        <AiOutlineMinus />
      </button>
      <p>{quantity}</p>
      <button id="increment" onClick={handleIncrement}>
        <AiOutlinePlus />
      </button>
    </AddOrDecrementButtonContainer>
  )
}
