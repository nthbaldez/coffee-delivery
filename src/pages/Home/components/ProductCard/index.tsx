import { ShoppingCart } from 'phosphor-react'
import { Card } from './styles'

type CoffeeProps = {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
}: CoffeeProps) {
  return (
    <Card>
      <img src={image} alt="" />

      <div>
        <span>Tradicional</span>
      </div>
      <h3>{name}</h3>
      <p>{description}</p>

      <footer>
        <p>
          R$ <span>9,90</span>
        </p>

        <div>
          <button className="select-button" id="decrement">
            -
          </button>
          <span>1</span>
          <button className="select-button" id="increment">
            +
          </button>
        </div>

        <button>
          <ShoppingCart size={32} weight="fill" color="white" />
        </button>
      </footer>
    </Card>
  )
}
