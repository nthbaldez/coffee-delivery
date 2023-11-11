import { formatPrice } from '../../utils/formatPrice'
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
  AddOrDecrementButtonContainer,
  PaymentContainer,
  HeaderPaymentContainer,
  PaymentList,
  LiStyle,
} from './styles'

import { useNavigate } from 'react-router'
import { FiTrash2 } from 'react-icons/fi'
import { Product } from '../../types'
import { useCart } from '../../hooks/useCart'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { usePayment } from '../../hooks/usePayment'
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'

export default function Checkout() {
  const navigate = useNavigate()
  const { cart, removeProduct, updateProductAmount } = useCart()
  const { address, setAddress, paymentType, setPaymentType } = usePayment()

  const [addressForm, setAddressForm] = useState('')
  const [numberAddress, setNumberAddress] = useState('')

  const cartFormatted = cart.map((product: Product) => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount),
  }))

  const total = cartFormatted.reduce((sumTotal, product) => {
    return sumTotal + product.price * product.amount
  }, 0)

  const totalFormatted = formatPrice(total)
  const deliveryFee = 3500
  const cartTotalWithDelivery = formatPrice(total + deliveryFee)

  function handleUpdateAmount(productId: string, amount: number) {
    updateProductAmount(productId, amount)
  }

  function handleRemoveProduct(productId: string) {
    removeProduct(productId)
  }

  function handleChangePaymentType(type: string) {
    setPaymentType(type)
  }

  function handleAddress(e: ChangeEvent<HTMLInputElement>) {
    setAddressForm(e.target.value)
  }

  function handleNumberAddress(e: ChangeEvent<HTMLInputElement>) {
    setNumberAddress(e.target.value)
  }

  function handleSubmit() {
    if (addressForm === '' || numberAddress === '') {
      toast.error('Preencha todos os dados')
    } else {
      const completeAddress = `${addressForm}, ${numberAddress}`
      setAddress(completeAddress)
      toast.success('Pedido finalizado com sucesso!')

      setTimeout(() => navigate('/success'), 5000)
    }
  }

  return (
    <Wrapper>
      <MainContainer>
        <header>
          <h3>Complete seu pedido</h3>
        </header>
        <p>{address}</p>
        <main>
          <HeaderMain>
            <img src="/public/icons/icon.svg" alt="" />
            <div>
              <p>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </HeaderMain>

          <FormContainer action="submit">
            <CepInput type="text" placeholder="CEP" />
            <StreetInput
              type="text"
              placeholder="Rua"
              onBlur={(e) => handleAddress(e)}
            />
            <div>
              <NumberInput
                type="text"
                placeholder="Número"
                onBlur={(e) => handleNumberAddress(e)}
              />
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

        <PaymentContainer>
          <HeaderPaymentContainer>
            <img src="/public/icons/currency.svg" alt="" />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagar.
              </span>
            </div>
          </HeaderPaymentContainer>

          <PaymentList>
            <ul>
              <LiStyle
                selected={paymentType === 'credit'}
                onClick={() => handleChangePaymentType('credit')}
              >
                <img src="/public/icons/cartao-credito.svg" alt="" />
                Cartão de Crédito
              </LiStyle>

              <LiStyle
                selected={paymentType === 'debit'}
                onClick={() => handleChangePaymentType('debit')}
              >
                <img src="/public/icons/cartao-debito.svg" alt="" />
                Cartão de Débito
              </LiStyle>

              <LiStyle
                selected={paymentType === 'pix'}
                onClick={() => handleChangePaymentType('pix')}
              >
                <img src="/public/icons/dinheiro.svg" alt="" />
                Pix
              </LiStyle>
            </ul>
          </PaymentList>
        </PaymentContainer>
      </MainContainer>

      <CoffeeSelectionContainer>
        <h3>Cafés selecionados</h3>

        <ListProducts>
          {cartFormatted.map((product) => (
            <CartType key={product.id}>
              <img src={product.image} alt={product.name} />

              <ButtonsContainer>
                <p>{product.name}</p>

                <div>
                  <AddOrDecrementButtonContainer>
                    <button
                      id="decrement"
                      onClick={() =>
                        handleUpdateAmount(product.id, product.amount - 1)
                      }
                    >
                      <AiOutlineMinus />
                    </button>
                    <p>{product.amount}</p>
                    <button
                      id="increment"
                      onClick={() =>
                        handleUpdateAmount(product.id, product.amount + 1)
                      }
                    >
                      <AiOutlinePlus />
                    </button>
                  </AddOrDecrementButtonContainer>

                  <ButtonRemoveItem
                    onClick={() => handleRemoveProduct(product.id)}
                  >
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
              <span>{totalFormatted}</span>
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
          <ConfirmButton type="submit" onClick={handleSubmit}>
            Confirmar pedido
          </ConfirmButton>
        </ListProducts>
      </CoffeeSelectionContainer>
    </Wrapper>
  )
}
