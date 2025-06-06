import { api } from '@/lib/axios'

interface UpdateProfileBody {
  name: string
  description: string
}

export async function updateProfile(body: UpdateProfileBody) {
  const response = await api.put('/profile', body)
  return response.data
}
