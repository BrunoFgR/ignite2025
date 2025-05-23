import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const chartData = [
  { date: '10/12', revenue: 186 },
  { date: '10/13', revenue: 305 },
  { date: '10/14', revenue: 237 },
  { date: '10/15', revenue: 73 },
  { date: '10/16', revenue: 209 },
  { date: '10/17', revenue: 214 },
]

export function RavenueChart() {
  return (
    <Card className="col-span-6 gap-2">
      <CardHeader className="flex items-center justify-between pb-8">
        <div>
          <CardTitle className="text-base font-medium">
            Receita do Periódo
          </CardTitle>
          <CardDescription>Receita diária do periódo</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={chartData} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={60}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
