import styled from 'styled-components'

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

export const ConfirmButton = styled.button`
  width: 100%;
  display: flex;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-500']};
  border: none;

  color: white;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-700']};
  }
`
