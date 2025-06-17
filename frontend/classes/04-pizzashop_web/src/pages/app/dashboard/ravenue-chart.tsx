import { useQuery } from '@tanstack/react-query'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import { getDailyRevenueInPeriod } from '@/api/get-daily-revenue-in-period'
import Calendar02 from '@/components/calendar-02'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export function RavenueChart() {
  const { data: chartData } = useQuery({
    queryKey: ['dailyRevenue'],
    queryFn: getDailyRevenueInPeriod,
  })

  return (
    <Card className="col-span-6 gap-2">
      <CardHeader className="flex items-center justify-between pb-8">
        <div>
          <CardTitle className="text-base font-medium">
            Receita do Periódo
          </CardTitle>
          <CardDescription>Receita diária do periódo</CardDescription>
        </div>

        <div className="flex items-center gap-3">
          <Label>Período</Label>
          <Calendar02 />
        </div>
      </CardHeader>
      <CardContent>
        {chartData && (
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chartData} style={{ fontSize: 12 }}>
              <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                width={60}
                tickFormatter={(value: number) =>
                  (value / 100).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                }
              />

              <CartesianGrid vertical={false} className="stroke-muted" />

              <Line
                type="linear"
                strokeWidth={2}
                dataKey="receipt"
                stroke={colors.violet[500]}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  )
}
