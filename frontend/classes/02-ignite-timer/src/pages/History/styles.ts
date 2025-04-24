import { styled } from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  margin-top: 2rem;
  height: 30rem;
  position: relative;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }

  thead {
    position: sticky;
    top: 0;
    z-index: 10;
  }

  tbody {
    display: block;
    max-height: calc(25rem - 3.2rem);
    overflow-y: auto;

    /* Personalização da scrollbar */
    &::-webkit-scrollbar {
      width: 0.6rem;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme['gray-800']};
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme['gray-600']};
      border-radius: 0.3rem;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme['gray-500']};
    }

    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme['gray-600']}
      ${({ theme }) => theme['gray-800']};
  }

  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  th {
    background-color: ${({ theme }) => theme['gray-700']};
    padding: 1rem;
    text-align: left;
    color: ${({ theme }) => theme['gray-100']};
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
      width: 50%;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }

  td {
    background-color: ${({ theme }) => theme['gray-700']};
    border-top: 4px solid ${({ theme }) => theme['gray-800']};
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      width: 50%;
      padding-left: 1.5rem;
    }

    &:last-child {
      padding-right: 1.5rem;
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: ${({ theme, statusColor }) =>
      theme[STATUS_COLORS[statusColor]]};
  }
`
