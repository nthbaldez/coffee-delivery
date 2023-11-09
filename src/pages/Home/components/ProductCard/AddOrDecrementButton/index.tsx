import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { AddOrDecrementButtonContainer } from './styles'
import { useState } from 'react'

export default function AddOrDecrementButton() {
  const [quantity, setQuantity] = useState(0)

  function handleIncrement() {
    setQuantity(quantity + 1)
  }

  function handleDecrement() {
    if (quantity > 0) {
      setQuantity(quantity - 1)
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
