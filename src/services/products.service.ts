import { api } from '../services/api'

export async function GetProducts() {
  const urlAPI = `${api.defaults.baseURL}/products`

  const header = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  }

  return await api.get(urlAPI, header)
}
