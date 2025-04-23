import { createContext, ReactNode, useReducer, useState } from 'react'
import {
  Cycle,
  CycleActionsArgs,
  cycleReducer,
  CycleStates,
} from '../reducers/cycles'

interface NewCycleFormData {
  task: string
  minutesAmount: number
}

interface CycleContextData {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  totalSecondsLeft: number
  markCurrentCycleAsFinished: () => void
  setSecondsLeft: (secondsLeft: number) => void
  createNewCycle: (data: NewCycleFormData) => void
  interruptCurrentCycle: () => void
}

export const CycleContext = createContext<CycleContextData>(
  {} as CycleContextData,
)

interface CycleContextProviderProps {
  children: ReactNode
}

export function CycleContextProvider({ children }: CycleContextProviderProps) {
  const [cyclesState, dispatch] = useReducer<CycleStates, [CycleActionsArgs]>(
    cycleReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
  )
  const [totalSecondsLeft, setTotalSecondsLeft] = useState<number>(0)

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setSecondsLeft(secondsLeft: number) {
    setTotalSecondsLeft(secondsLeft)
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: 'FINISH_CURRENT_CYCLE',
    })
  }

  function createNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch({
      type: 'ADD_NEW_CYCLE',
      payload: { newCycle },
    })

    setTotalSecondsLeft(0)
  }

  function interruptCurrentCycle() {
    dispatch({
      type: 'INTERRUPT_CURRENT_CYCLE',
    })
  }

  return (
    <CycleContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        totalSecondsLeft,
        markCurrentCycleAsFinished,
        setSecondsLeft,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}
