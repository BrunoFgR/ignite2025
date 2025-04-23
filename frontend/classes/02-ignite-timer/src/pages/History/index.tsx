import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'
import { CycleContext } from '../../contexts/CycleContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function History() {
  const { cycles } = useContext(CycleContext)

  const getStatus = (
    finishedDate: Date | undefined,
    interruptedDate: Date | undefined,
  ) => {
    if (finishedDate) {
      return 'finished'
    }
    if (interruptedDate) {
      return 'interrupted'
    }
    if (!finishedDate && !interruptedDate) {
      return 'in_progress'
    }
    return 'status_not_defined'
  }

  const StatusText = (status: string) => {
    switch (status) {
      case 'finished':
        return 'Concluído'
      case 'interrupted':
        return 'Interrompido'
      case 'in_progress':
        return 'Em andamento'
      default:
        return 'Status não definido'
    }
  }

  const statusColor = (status: string) =>
    (({
      finished: 'green',
      interrupted: 'red',
      in_progress: 'yellow',
    })[status] || 'green') as 'green' | 'red' | 'yellow'

  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(cycle.startDate, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  <Status
                    statusColor={statusColor(
                      getStatus(cycle.finishedDate, cycle.interruptedDate),
                    )}
                  >
                    {StatusText(
                      getStatus(cycle.finishedDate, cycle.interruptedDate),
                    )}
                  </Status>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
