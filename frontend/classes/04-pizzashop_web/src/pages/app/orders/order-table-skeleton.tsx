import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function OrderTableSkeleton() {
  return Array.from({ length: 10 }).map((_, index) => (
    <TableRow key={index}>
      <TableCell>
        <Button disabled variant="outline" size="sm">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[172px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[148px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[120px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[200px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[64px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[92px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[92px]" />
      </TableCell>
    </TableRow>
  ))
}
