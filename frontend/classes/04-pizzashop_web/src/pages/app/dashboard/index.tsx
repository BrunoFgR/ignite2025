import { Helmet } from '@dr.pogodin/react-helmet'

import { DailyOrderAmountCard } from './daily-orders-amount-card'
import { MonthlyOrderAmountCard } from './monthly-orders-amount-card'
import { MonthlyRevenueCard } from './monthly-revenue-card'
import { MonthlyCanceledOrderAmountCard } from './montly-canceled-orders-amount-card'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MonthlyRevenueCard />
          <MonthlyOrderAmountCard />
          <DailyOrderAmountCard />
          <MonthlyCanceledOrderAmountCard />
        </div>
      </div>
    </>
  )
}
