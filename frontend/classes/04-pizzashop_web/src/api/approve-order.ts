import { api } from '@/lib/axios'

export interface ApproveOrderParams {
  orderId: string
}

export async function approveOrder({
  orderId,
}: ApproveOrderParams): Promise<void> {
  await api.patch(`/orders/${orderId}/approve`)
}
