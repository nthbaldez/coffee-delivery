import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    a {
      display: flex;
      align-items: center;
    }
  }
`

export const MapAndCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;

  a {
    color: ${(props) => props.theme['yellow-500']};
    padding: 8px;
    height: 3rem;
    background-color: ${(props) => props.theme['yellow-200']};
    border-radius: 8px;
  }
`

export const MapPinContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) => props.theme['purple-200']};

  width: 11rem;
  height: 3rem;
  border-radius: 8px;

  padding: 8px;

  p {
    color: ${(props) => props.theme['purple-600']};
  }
`

export const CartButton = styled.div`
  position: relative;
  cursor: pointer;
`

export const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 2px 5px;
  font-size: 12px;
  bottom: 35px;
  right: -5px;
  background: ${(props) => props.theme['yellow-700']};
  position: absolute;
  color: white;
  margin-left: -10px;
`
