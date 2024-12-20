import { Helmet } from 'react-helmet-async'

import { DailyOrdersAmountCard } from './DailyOrdersAmountCard'
import { MonthlyCanceledOrdersAmountCard } from './MonthlyCanceledOrdersAmountCard'
import { MonthlyOrdersAmountCard } from './MonthlyOrdersAmountCard'
import { MonthlyRevenueCard } from './MonthlyRevenueCard'
import { PopularProductsChart } from './PopularProductsChart'
import { RevenueChart } from './RevenueChart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthlyRevenueCard />
          <MonthlyOrdersAmountCard />
          <DailyOrdersAmountCard />
          <MonthlyCanceledOrdersAmountCard />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
