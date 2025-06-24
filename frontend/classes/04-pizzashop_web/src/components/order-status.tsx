export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  processing: 'Em preparo',
  delivering: 'Em entrega',
  delivered: 'Entregue',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span
          data-testid="pending-status"
          className="h-2 w-2 rounded-full bg-slate-400"
        />
      )}
      {status === 'canceled' && (
        <span
          data-testid="canceled-status"
          className="h-2 w-2 rounded-full bg-rose-500"
        />
      )}
      {status === 'delivered' && (
        <span
          data-testid="delivered-status"
          className="h-2 w-2 rounded-full bg-emerald-500"
        />
      )}
      {['delivering', 'processing'].includes(status) && (
        <span
          data-testid="processing-status-and-delivering"
          className="h-2 w-2 rounded-full bg-amber-500"
        />
      )}
      <span className="text-muted-foreground font-medium">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
