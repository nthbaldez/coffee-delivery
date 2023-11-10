import styled from 'styled-components'

export const Card = styled.div`
  max-width: 22rem;
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
    margin-top: -50px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;

    span {
      background: ${(props) => props.theme['yellow-200']};
      color: ${(props) => props.theme['yellow-700']};
      padding: 4px 8px;
      border-radius: 100px;
      font-size: 10px;
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  h3 {
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    color: ${(props) => props.theme['gray-600']};
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    gap: 4px;

    p {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      span {
        color: ${(props) => props.theme['gray-800']};
        font-family: 'Baloo 2';
        font-size: 24px;
        font-style: normal;
        font-weight: 800;
        line-height: 130%;
        background: none;
      }
    }

    > button {
      background: ${(props) => props.theme['purple-700']};
      display: inline-flex;
      padding: 8px;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 8px;

      &:hover {
        background: ${(props) => props.theme['purple-600']};
        cursor: pointer;
      }
    }
  }
`

export const AddOrDecrementButtonContainer = styled.div`
  display: inline-flex;
  height: 32px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  background: ${(props) => props.theme['gray-400']};
  border-radius: 8px;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
    color: ${(props) => props.theme['purple-600']};

    display: flex;
    height: 32px;
    justify-content: center;
    align-items: center;
    gap: 4px;

    &:hover {
      color: ${(props) => props.theme['purple-700']};
    }
  }

  p {
    background: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['gray-900']};
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`
