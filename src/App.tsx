import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { CartProvider } from './hooks/useCart'
import { PaymentContextProvider } from './hooks/usePayment'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <PaymentContextProvider>
          <GlobalStyle />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </PaymentContextProvider>
      </CartProvider>
    </ThemeProvider>
  )
}
