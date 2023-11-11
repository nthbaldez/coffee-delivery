import styled from 'styled-components'

export const HeaderContainer = styled.div`
  margin-top: 80px;
  h1 {
    font-family: 'Baloo 2';
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-700']};
  }

  p {
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    /* font-weight: 400; */
    line-height: 130%;

    color: ${(props) => props.theme['gray-800']};
  }
`

export const SpanContainer = styled.span`
  font-weight: 700;
`

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: black;
  margin-top: 40px;
`

export const OrderInfoContainer = styled.div`
  display: flex;
  gap: 100px;
`

export const InfoContainer = styled.div`
  border: 1px solid ${(props) => props.theme['yellow-500']};
  padding: 40px;
  display: flex;
  width: 526px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 6px 36px;

  div {
    img {
    }
  }
`
