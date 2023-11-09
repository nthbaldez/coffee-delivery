import { useEffect, useState } from 'react'
import { formatPrice } from '../../utils/formatPrice'
import AddOrDecrementButton from '../Home/components/ProductCard/AddOrDecrementButton'
import {
  CoffeeSelectionContainer,
  MainContainer,
  Wrapper,
  HeaderMain,
  FormContainer,
  ListProducts,
  ButtonsContainer,
  CartType,
  ButtonRemoveItem,
  ItemsTotal,
  Total,
  TotalDefault,
  ConfirmButton,
  CepInput,
  StreetInput,
  NumberInput,
  ComplementInput,
  BairroInput,
  CityInput,
  UFSelect,
} from './styles'

import { FiTrash2 } from 'react-icons/fi'
import useLocalStorage from '../../hooks/useLocalStorage'

interface Product {
  name: string
  price: number
  description: string
  id: string
  image: string
  types: string[]
}

interface ProductInCart extends Product {
  quantity: number
}

export default function Checkout() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    'cart-items',
    [],
  )

  const [items, setItems] = useState<ProductInCart[]>([])

  const calculateTotalValue = (items: ProductInCart[]) => {
    return items.reduce(
      (total, item) => (total += item.price * item.quantity),
      0,
    )
  }

  useEffect(() => {
    setItems(value)
  }, [value])

  const cartTotalValue = formatPrice(calculateTotalValue(value))
  const deliveryFee = 3500
  const cartTotalWithDelivery = formatPrice(
    calculateTotalValue(value) + deliveryFee,
  )

  function handleDelete(id: string) {
    const itemsList = items.filter((item) => item.id !== id)
    updateLocalStorage(itemsList)
    setItems(itemsList)
  }

  return (
    <Wrapper>
      <MainContainer>
        <header>
          <h3>Complete seu pedido</h3>
        </header>

        <main>
          <HeaderMain>
            <img src="/public/icons/icon.svg" alt="" />
            <div>
              <p>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </HeaderMain>

          <FormContainer action="">
            <CepInput type="text" placeholder="CEP" />
            <StreetInput type="text" placeholder="Rua" />
            <div>
              <NumberInput type="text" placeholder="Número" />
              <ComplementInput type="text" placeholder="Complemento" />
            </div>
            <div>
              <BairroInput type="text" placeholder="Bairro" />
              <CityInput type="text" placeholder="Cidade" />
              <UFSelect name="estado">
                <option value="" disabled selected>
                  UF
                </option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </UFSelect>
            </div>
          </FormContainer>
        </main>
      </MainContainer>

      <CoffeeSelectionContainer>
        <h3>Cafés selecionados</h3>

        <ListProducts>
          {items.map((product) => (
            <CartType key={product.id}>
              <img src={product.image} alt={product.name} />

              <ButtonsContainer>
                <p>{product.name}</p>

                <div>
                  <AddOrDecrementButton data={product} />

                  <ButtonRemoveItem onClick={() => handleDelete(product.id)}>
                    <FiTrash2 />
                    <p>Remover</p>
                  </ButtonRemoveItem>
                </div>
              </ButtonsContainer>

              <span>{formatPrice(product.price)}</span>
            </CartType>
          ))}
          <ItemsTotal>
            <TotalDefault>
              <p>Total de itens</p>
              <span>{cartTotalValue}</span>
            </TotalDefault>
            <TotalDefault>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </TotalDefault>
            <Total>
              <p>Total</p>
              <span>{cartTotalWithDelivery}</span>
            </Total>
          </ItemsTotal>
          <ConfirmButton>Confirmar pedido</ConfirmButton>
        </ListProducts>
      </CoffeeSelectionContainer>
    </Wrapper>
  )
}
