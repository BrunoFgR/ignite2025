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
      return 'Concluído'
    }
    if (interruptedDate) {
      return 'Interrompido'
    }
    if (!finishedDate && !interruptedDate) {
      return 'Em Andamento'
    }
    return 'Status não definido'
  }

  const statusColor = (status: string) =>
    (({
      Concluído: 'green',
      Interrompido: 'red',
      'Em Andamento': 'yellow',
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
                    {getStatus(cycle.finishedDate, cycle.interruptedDate)}
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
