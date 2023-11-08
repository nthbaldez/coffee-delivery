import { ShoppingCart } from 'phosphor-react'
import { Card } from './styles'
import AddOrDecrementButton from './AddOrDecrementButton'
import { formatPrice } from '../../../../utils/formatPrice'

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
  const priceFormatted = formatPrice(price)

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
          R$ <span>{priceFormatted}</span>
        </p>

        <AddOrDecrementButton />

        <button>
          <ShoppingCart size={32} weight="fill" color="white" />
        </button>
      </footer>
    </Card>
  )
}
