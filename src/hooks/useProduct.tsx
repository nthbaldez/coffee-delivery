import { api } from '../services/api'

export async function getProduct(id: string) {
  const header = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  }
  const data = await api.get(`/products/${id}`, header)

  return {
    data,
  }
}
