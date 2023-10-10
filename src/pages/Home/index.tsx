import { Timer } from 'phosphor-react'
import {
  ColumnContainer,
  DefinitionContainer,
  InfoContainer,
  MainContainer,
  SpanContainer,
} from './styles'
import ProductsList from './components/ProductsList'

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
            <ColumnContainer>
              <div>
                <SpanContainer featureColor="orange">
                  <Timer size={16} weight="fill" color="white" />
                </SpanContainer>
                Compra simples e segura
              </div>
              <div>
                <SpanContainer featureColor="yellow">
                  <Timer size={16} weight="fill" color="white" />
                </SpanContainer>
                Entrega rápida e rastreada
              </div>
            </ColumnContainer>
            <ColumnContainer>
              <div>
                <SpanContainer featureColor="gray">
                  <Timer size={16} weight="fill" color="white" />
                </SpanContainer>
                Embalagem mantém o café intacto
              </div>
              <div>
                <SpanContainer featureColor="purple">
                  <Timer size={16} weight="fill" color="white" />
                </SpanContainer>
                O café chega fresquinho até você
              </div>
            </ColumnContainer>
          </DefinitionContainer>
        </InfoContainer>

        <div>
          <img src="/public/image.png" alt="" />
        </div>
      </MainContainer>
      <ProductsList />
    </>
  )
}
