import useLocalStorage from './useLocalStorage'

interface Product {
  name: string
  price: number
  id: string
  image: string
}

interface ProductInCart extends Product {
  quantity: number
}

export default function useCart() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    'cart-items',
    [],
  )

  function handleUpdateQuantity(id: string, quantity: number) {
    const cartListUpdated = value.map((item) => {
      if (item.id !== id) return item
      return {
        ...item,
        quantity,
      }
    })
    updateLocalStorage(cartListUpdated)
    console.log('atualizou a quantidade')
  }

  return { handleUpdateQuantity }
}
