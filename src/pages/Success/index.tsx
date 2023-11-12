import { usePayment } from '../../hooks/usePayment'
import {
  AddressContainer,
  ContainerSeparateInfo,
  HeaderContainer,
  InfoContainer,
  MainContainer,
  OrderInfoContainer,
  SpanContainer,
  SpanCustomized,
} from './styles'

import { TiLocation } from 'react-icons/ti'
import { PiTimerFill } from 'react-icons/pi'
import { BsCurrencyDollar } from 'react-icons/bs'

export default function Success() {
  const { address, city, bairro, state, paymentMethod } = usePayment()
  console.log(city)
  return (
    <div>
      <HeaderContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </HeaderContainer>
      <MainContainer>
        <OrderInfoContainer>
          <InfoContainer>
            <ContainerSeparateInfo>
              <SpanCustomized featureColor="purple">
                <TiLocation size={16} weight="fill" color="white" />
              </SpanCustomized>
              <AddressContainer>
                <p>
                  Entrega em <SpanContainer>{address}</SpanContainer>
                </p>
                <p>{`${bairro} - ${city}, ${state}`}</p>
              </AddressContainer>
            </ContainerSeparateInfo>

            <ContainerSeparateInfo>
              <SpanCustomized featureColor="yellow">
                <PiTimerFill size={16} weight="fill" color="white" />
              </SpanCustomized>
              <AddressContainer>
                <p>Previsão de Entrega</p>
                <SpanContainer>20 min - 30 min</SpanContainer>
              </AddressContainer>
            </ContainerSeparateInfo>

            <ContainerSeparateInfo>
              <SpanCustomized featureColor="orange">
                <BsCurrencyDollar size={16} weight="fill" color="white" />
              </SpanCustomized>
              <AddressContainer>
                <p>Pagamento na entrega</p>
                <SpanContainer>{paymentMethod}</SpanContainer>
              </AddressContainer>
            </ContainerSeparateInfo>
          </InfoContainer>

          <div>
            <img src="/public/icons/illustration.svg" alt="" />
          </div>
        </OrderInfoContainer>
      </MainContainer>
    </div>
  )
}
