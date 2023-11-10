import { createContext, ReactNode, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'
import { Product } from '../types'
import { setItem } from '../utils/setItem'

interface CartProviderProps {
  children: ReactNode
}

interface UpdateProductAmount {
  productId: string
  amount: number
}

interface CartContextData {
  cart: Product[]
  addProduct: (productId: string, amount: number) => Promise<void>
  removeProduct: (productId: string) => void
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@coffee-delivery:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }

    return []
  })

  async function addProduct(productId: string, amount: number) {
    try {
      const updatedCart = [...cart]

      const productAlreadyExists = updatedCart.find(
        (product) => productId === product.id,
      )

      const currentAmount = productAlreadyExists
        ? productAlreadyExists.amount
        : 0

      if (productAlreadyExists) {
        productAlreadyExists.amount = currentAmount + amount
      } else {
        const product = await api.get(`/products/${productId}`)

        const newProduct = {
          ...product.data,
          amount,
        }
        updatedCart.push(newProduct)
      }

      setCart(updatedCart)
      setItem(updatedCart)
    } catch {
      toast.error('Erro na adição do produto')
    }
  }

  function removeProduct(productId: string) {
    try {
      const updatedCart = [...cart]

      const product = updatedCart.findIndex(
        (product) => product.id === productId,
      )

      if (product >= 0) {
        updatedCart.splice(product, 1)
        setItem(updatedCart)
        setCart(updatedCart)
      } else {
        throw Error()
      }
    } catch {
      toast.error('Erro na remoção do produto')
    }
  }

  async function updateProductAmount({
    productId,
    amount,
  }: UpdateProductAmount) {
    try {
      if (amount <= 0) {
        throw Error()
      }

      const updatedCart = [...cart]
      const productExists = updatedCart.find(
        (product) => product.id === productId,
      )

      if (productExists) {
        setCart(updatedCart)
        setItem(updatedCart)
      } else {
        throw Error()
      }
    } catch {
      toast.error('Erro na alteração de quantidade do produto')
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext)

  return context
}
