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
} from './styles'

import { FiTrash2 } from 'react-icons/fi'

const products = [
  {
    id: '1',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9900,
    types: ['Tradicional'],
    image: '/public/coffees/Type=Expresso.png',
  },
  {
    id: '2',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9900,
    types: ['Tradicional'],
    image: '/public/coffees/Type=Americano.png',
  },
]

export default function Checkout() {
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
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <select name="estado">
              <option value="AC">Acre (AC)</option>
              <option value="AL">Alagoas (AL)</option>
              <option value="AP">Amapá (AP)</option>
              <option value="AM">Amazonas (AM)</option>
              <option value="BA">Bahia (BA)</option>
              <option value="CE">Ceará (CE)</option>
              <option value="DF">Distrito Federal (DF)</option>
              <option value="ES">Espírito Santo (ES)</option>
              <option value="GO">Goiás (GO)</option>
              <option value="MA">Maranhão (MA)</option>
              <option value="MT">Mato Grosso (MT)</option>
              <option value="MS">Mato Grosso do Sul (MS)</option>
              <option value="MG">Minas Gerais (MG)</option>
              <option value="PA">Pará (PA)</option>
              <option value="PB">Paraíba (PB)</option>
              <option value="PR">Paraná (PR)</option>
              <option value="PE">Pernambuco (PE)</option>
              <option value="PI">Piauí (PI)</option>
              <option value="RJ">Rio de Janeiro (RJ)</option>
              <option value="RN">Rio Grande do Norte (RN)</option>
              <option value="RS">Rio Grande do Sul (RS)</option>
              <option value="RO">Rondônia (RO)</option>
              <option value="RR">Roraima (RR)</option>
              <option value="SC">Santa Catarina (SC)</option>
              <option value="SP">São Paulo (SP)</option>
              <option value="SE">Sergipe (SE)</option>
              <option value="TO">Tocantins (TO)</option>
            </select>
          </FormContainer>
        </main>
      </MainContainer>

      <CoffeeSelectionContainer>
        <h3>Cafés selecionados</h3>

        <ListProducts>
          {products.map((product) => (
            <CartType key={product.id}>
              <img src={product.image} alt={product.name} />

              <ButtonsContainer>
                <p>{product.name}</p>

                <div>
                  <AddOrDecrementButton />

                  <ButtonRemoveItem>
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
              <span>R$ 29,90</span>
            </TotalDefault>
            <TotalDefault>
              <p>Total de itens</p>
              <span>R$ 29,90</span>
            </TotalDefault>
            <Total>
              <p>Total</p>
              <span>R$ 29,90</span>
            </Total>
          </ItemsTotal>
        </ListProducts>
      </CoffeeSelectionContainer>
    </Wrapper>
  )
}
