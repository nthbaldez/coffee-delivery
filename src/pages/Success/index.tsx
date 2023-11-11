import { usePayment } from '../../hooks/usePayment'
import {
  HeaderContainer,
  InfoContainer,
  MainContainer,
  OrderInfoContainer,
  SpanContainer,
} from './styles'

const address = 'Avenida Central Bloco 1645, 12'

export default function Success() {
  // const { address } = usePayment()
  console.log(address)
  return (
    <div>
      <HeaderContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </HeaderContainer>
      <MainContainer>
        <OrderInfoContainer>
          <InfoContainer>
            <div>
              <img src="/public/icons/location.svg" alt="" />
              <p>
                Entrega em <SpanContainer>{address}</SpanContainer>
              </p>
            </div>
          </InfoContainer>

          <div>
            <img src="/public/icons/illustration.svg" alt="" />
          </div>
        </OrderInfoContainer>
      </MainContainer>
    </div>
  )
}
