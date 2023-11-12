import { ReactNode, createContext, useContext, useState } from 'react'

interface PaymentProviderProps {
  children: ReactNode
}

interface PaymentContextData {
  address: string
  setAddress: (address: string) => void
  paymentType: string
  setPaymentType: (value: string) => void
  city: string
  setCity: (value: string) => void
  bairro: string
  setBairro: (value: string) => void
  state: string
  setState: (value: string) => void
  paymentMethod: string
  setPaymentMethod: (value: string) => void
}
const PaymentContext = createContext<PaymentContextData>(
  {} as PaymentContextData,
)

export function PaymentContextProvider({ children }: PaymentProviderProps) {
  const [address, setAddress] = useState('')
  const [paymentType, setPaymentType] = useState('')
  const [city, setCity] = useState('')
  const [bairro, setBairro] = useState('')
  const [state, setState] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')

  return (
    <PaymentContext.Provider
      value={{
        address,
        setAddress,
        paymentType,
        setPaymentType,
        city,
        setCity,
        bairro,
        setBairro,
        state,
        setState,
        paymentMethod,
        setPaymentMethod,
      }}
    >
      {children}
    </PaymentContext.Provider>
  )
}

export function usePayment(): PaymentContextData {
  const context = useContext(PaymentContext)

  return context
}
