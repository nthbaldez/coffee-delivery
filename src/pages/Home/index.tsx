import { ShoppingCart, Timer } from 'phosphor-react'
import { PiPackageFill, PiCoffeeFill } from 'react-icons/pi'
import {
  DefinitionContainer,
  InfoContainer,
  MainContainer,
  SpanContainer,
} from './styles'

import ProductsMainContainer from './components/ProductsMainContainer'

export default function Home() {
  return (
    <>
      <MainContainer>
        <InfoContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <DefinitionContainer>
            <div>
              <div>
                <SpanContainer featureColor="orange">
                  <ShoppingCart size={16} weight="fill" color="white" />
                </SpanContainer>
                Compra simples e segura
              </div>
            </div>

            <div>
              <div>
                <SpanContainer featureColor="gray">
                  <PiPackageFill size={16} weight="fill" color="white" />
                </SpanContainer>
                Embalagem mantém o café intacto
              </div>
            </div>

            <div>
              <div>
                <SpanContainer featureColor="yellow">
                  <Timer size={16} weight="fill" color="white" />
                </SpanContainer>
                Entrega rápida e rastreada
              </div>
            </div>

            <div>
              <div>
                <SpanContainer featureColor="purple">
                  <PiCoffeeFill size={16} weight="fill" color="white" />
                </SpanContainer>
                O café chega fresquinho até você
              </div>
            </div>
          </DefinitionContainer>
        </InfoContainer>

        <div>
          <img src="/public/image.png" alt="" />
        </div>
      </MainContainer>
      <ProductsMainContainer />
    </>
  )
}
