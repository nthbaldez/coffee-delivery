import { ReactNode, createContext, useContext, useState } from 'react'

interface PaymentProviderProps {
  children: ReactNode
}

interface PaymentContextData {
  address: string
  setAddress: (address: string) => void
  paymentType: string
  setPaymentType: (value: string) => void
}
const PaymentContext = createContext<PaymentContextData>(
  {} as PaymentContextData,
)

export function PaymentContextProvider({ children }: PaymentProviderProps) {
  const [address, setAddress] = useState('')
  const [paymentType, setPaymentType] = useState('')

  return (
    <PaymentContext.Provider
      value={{ address, setAddress, paymentType, setPaymentType }}
    >
      {children}
    </PaymentContext.Provider>
  )
}

export function usePayment(): PaymentContextData {
  const context = useContext(PaymentContext)

  return context
}
