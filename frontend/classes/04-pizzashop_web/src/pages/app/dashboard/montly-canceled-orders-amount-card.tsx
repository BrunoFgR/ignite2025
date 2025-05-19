import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthlyCanceledOrderAmountCard() {
  return (
    <Card className="gap-2">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">32</span>
        <p className="text-muted-foreground text-xs">
          <span className="text-emerald-500 dark:text-emerald-400">-6%</span> em
          relação ao mês anterior
        </p>
      </CardContent>
    </Card>
  )
}
