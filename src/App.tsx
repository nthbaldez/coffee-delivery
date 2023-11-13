import Router from './Router'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './hooks/useCart'
import { PaymentContextProvider } from './hooks/usePayment'
import { ToastContainer } from 'react-toastify'

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
        <ToastContainer autoClose={3000} />
      </CartProvider>
    </ThemeProvider>
  )
}
