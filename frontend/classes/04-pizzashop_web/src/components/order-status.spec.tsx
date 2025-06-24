import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display the right text when order status is pending', () => {
    const orderStatus = 'pending'

    const wrapper = render(<OrderStatus status={orderStatus} />)

    const statusText = wrapper.getByText('Pendente')
    const pendingStatus = wrapper.getByTestId('pending-status')

    expect(statusText).toBeInTheDocument()
    expect(pendingStatus).toHaveClass('bg-slate-400')
  })

  it('should display the right text when order status is canceled', () => {
    const orderStatus = 'canceled'

    const wrapper = render(<OrderStatus status={orderStatus} />)

    const statusText = wrapper.getByText('Cancelado')
    const canceledStatus = wrapper.getByTestId('canceled-status')

    expect(statusText).toBeInTheDocument()
    expect(canceledStatus).toHaveClass('bg-rose-500')
  })

  it('should display the right text when order status is delivered', () => {
    const orderStatus = 'delivered'

    const wrapper = render(<OrderStatus status={orderStatus} />)

    const statusText = wrapper.getByText('Entregue')
    const deliveredStatus = wrapper.getByTestId('delivered-status')

    expect(statusText).toBeInTheDocument()
    expect(deliveredStatus).toHaveClass('bg-emerald-500')
  })

  it('should display the right text when order status is delivering', () => {
    const orderStatus: OrderStatus = 'delivering'

    const wrapper = render(<OrderStatus status={orderStatus} />)

    const statusText = wrapper.getByText('Em entrega')
    const deliveringStatus = wrapper.getByTestId(
      'processing-status-and-delivering',
    )

    expect(statusText).toBeInTheDocument()
    expect(deliveringStatus).toHaveClass('bg-amber-500')
  })

  it('should display the right text when order status is processing', () => {
    const orderStatus = 'processing'

    const wrapper = render(<OrderStatus status={orderStatus} />)

    const statusText = wrapper.getByText('Em preparo')
    const processingStatus = wrapper.getByTestId(
      'processing-status-and-delivering',
    )

    expect(statusText).toBeInTheDocument()
    expect(processingStatus).toHaveClass('bg-amber-500')
  })
})
