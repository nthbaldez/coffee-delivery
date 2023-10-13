import { ShoppingCart } from 'phosphor-react'
import { Card } from './styles'

export default function ProductCard() {
  return (
    <Card>
      <img src="/public/type=expresso.png" alt="" />

      <span>Tradicional</span>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos.</p>

      <footer>
        <p>
          R$ <span>9,90</span>
        </p>

        <select name="" id=""></select>
        <button>
          <ShoppingCart size={32} weight="fill" color="white" />
        </button>
      </footer>
    </Card>
  )
}
