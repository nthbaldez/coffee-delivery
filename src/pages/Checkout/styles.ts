import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 32px;

  @media (min-width: ${(props) => props.theme.desktopBreakPoint}) {
    flex-direction: row;
  }
`
export const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;

  h3 {
    font-family: 'Baloo 2';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }

  main {
    background: ${(props) => props.theme['gray-200']};
    padding: 40px;
    width: 100%;
    margin-top: 1rem;
  }
`
export const CoffeeSelectionContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 28rem;

  h3 {
    font-family: 'Baloo 2';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const HeaderMain = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
      color: ${(props) => props.theme['gray-800']};
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }

    span {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme['gray-700']};
    }
  }
`

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr;
`

export const ListProducts = styled.div`
  display: flex;
  width: 448px;
  padding: 40px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 1rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme['gray-200']};
`

export const CartType = styled.div`
  display: flex;
  padding: 0px 4px 24px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  img {
    display: flex;
    width: 64px;
    height: 64px;
    justify-content: center;
    align-items: center;
  }

  span {
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  p {
    color: ${(props) => props.theme['gray-800']};
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const ButtonRemoveItem = styled.button`
  background: ${(props) => props.theme['gray-400']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;
  padding: 0px 8px;
  height: 32px;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme['purple-600']};

  &:hover {
    color: ${(props) => props.theme['purple-700']};
  }

  p {
    color: ${(props) => props.theme['gray-600']};
  }
`
export const ItemsTotal = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

export const TotalDefault = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';
  color: ${(props) => props.theme['gray-700']};
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  span {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';
  color: ${(props) => props.theme['gray-800']};
  p,
  span {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`
