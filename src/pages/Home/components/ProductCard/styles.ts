import styled from 'styled-components'

export const Card = styled.div`
  max-width: 16rem;
  height: 19rem;
  border-radius: 6px 36px;

  background: ${(props) => props.theme['gray-200']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;

  img {
    width: 120px;
    height: 120px;
    margin-top: -60px;
  }

  span {
    background: ${(props) => props.theme['yellow-200']};
    color: ${(props) => props.theme['yellow-700']};
    padding: 4px 8px;
    border-radius: 100px;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 700;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
