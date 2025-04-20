import { HistoryContainer, HistoryList } from './styles'

export function History() {
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
            <tr>
              <td>Tarefa 1</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa 2</td>
              <td>30 minutos</td>
              <td>Há 1 mês</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa 3</td>
              <td>45 minutos</td>
              <td>Há 1 semana</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa 4</td>
              <td>1 hora</td>
              <td>Há 1 dia</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
