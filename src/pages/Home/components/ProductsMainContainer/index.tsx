import ProductCard from '../ProductCard'
import { ProductsContainer, ProductsList } from './styles'

export default function ProductsMainContainer() {
  return (
    <ProductsContainer>
      <h1>Nossos Cafés</h1>

      <ProductsList>
        <ProductCard />
      </ProductsList>
    </ProductsContainer>
  )
}
