import styled from 'styled-components'

export const ProductsContainer = styled.div`
  margin-top: 32px;
  width: 100%;
`

export const ProductsList = styled.div`
  margin-top: 3.5rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  gap: 2rem;
`
