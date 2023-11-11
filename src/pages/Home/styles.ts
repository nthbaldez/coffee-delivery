import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  margin-top: 6rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  h1 {
    color: ${(props) => props.theme['gray-900']};
    font-family: 'Baloo2', sans-serif;
    font-weight: 800;
    line-height: 130%;
    font-size: 2rem;
  }

  p {
    margin-top: 16px;
    color: ${(props) => props.theme['gray-800']};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`

const FEATURE_COLORS = {
  yellow: 'yellow-500',
  orange: 'yellow-700',
  gray: 'gray-700',
  purple: 'purple-600',
} as const

interface FeatureProps {
  featureColor: keyof typeof FEATURE_COLORS
}

export const DefinitionContainer = styled.div`
  margin-top: 66px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const SpanContainer = styled.span<FeatureProps>`
  display: flex;
  align-items: center;

  padding: 8px;
  border-radius: 100%;
  background: ${(props) => props.theme[FEATURE_COLORS[props.featureColor]]};
`
