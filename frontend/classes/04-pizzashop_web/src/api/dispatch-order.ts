import { api } from '@/lib/axios'

export interface DispatchOrderParams {
  orderId: string
}

export async function dispatchOrder({
  orderId,
}: DispatchOrderParams): Promise<void> {
  await api.patch(`/orders/${orderId}/dispatch`)
}
