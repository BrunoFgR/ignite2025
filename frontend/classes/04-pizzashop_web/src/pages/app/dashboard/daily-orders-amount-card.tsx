import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DailyOrderAmountCard() {
  return (
    <Card className="gap-2">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">20</span>
        <p className="text-muted-foreground text-xs">
          <span className="text-rose-500 dark:text-rose-400">-4%</span> em
          relação ao dia anterior
        </p>
      </CardContent>
    </Card>
  )
}
