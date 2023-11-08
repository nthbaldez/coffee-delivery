import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { AddOrDecrementButtonContainer } from './styles'

export default function AddOrDecrementButton() {
  return (
    <AddOrDecrementButtonContainer>
      <button id="decrement">
        <AiOutlineMinus />
      </button>
      <span>1</span>
      <button id="increment">
        <AiOutlinePlus />
      </button>
    </AddOrDecrementButtonContainer>
  )
}
