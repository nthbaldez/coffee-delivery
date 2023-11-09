import AddOrDecrementButton from './AddOrDecrementButton'

import { ShoppingCart } from 'phosphor-react'
import { Card } from './styles'
import { formatPrice } from '../../../../utils/formatPrice'

type CoffeeProps = {
  id: string
  name: string
  description: string
  price: number
  image: string
  types: string[]
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
  types,
}: CoffeeProps) {
  const priceFormatted = formatPrice(price)

  console.log(types)

  return (
    <Card>
      <img src={image} alt={name} />

      <div>
        {types.map((type, index) => (
          <span key={index}>{type}</span>
        ))}
      </div>
      <h3>{name}</h3>
      <p>{description}</p>

      <footer>
        <p>
          <span>{priceFormatted}</span>
        </p>

        <AddOrDecrementButton />

        <button>
          <ShoppingCart size={32} weight="fill" color="white" />
        </button>
      </footer>
    </Card>
  )
}
