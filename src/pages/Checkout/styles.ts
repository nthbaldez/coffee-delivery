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

  header {
    margin-top: 1.38rem;

    h3 {
      font-family: 'Baloo 2';
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
      color: ${(props) => props.theme['gray-800']};
    }
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
  padding: 16px 24px;

  background: ${(props) => props.theme['gray-200']};

  header {
    margin-top: 1.38rem;

    h3 {
      font-family: 'Baloo 2';
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
      color: ${(props) => props.theme['gray-800']};
    }
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
