import { createContext, ReactNode, useReducer, useState } from 'react'

interface NewCycleFormData {
  task: string
  minutesAmount: number
}

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
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

interface CycleStates {
  cycles: Cycle[]
  activeCycleId: string | null
}

interface CycleActionsArgs {
  type: 'ADD_NEW_CYCLE' | 'INTERRUPT_CURRENT_CYCLE' | 'FINISH_CURRENT_CYCLE'
  payload?: { cycle: Cycle }
}

interface CycleContextProviderProps {
  children: ReactNode
}

export function CycleContextProvider({ children }: CycleContextProviderProps) {
  const [cyclesState, dispatch] = useReducer<CycleStates, CycleActionsArgs[]>(
    (state, actions) => {
      switch (actions.type) {
        case 'ADD_NEW_CYCLE':
          return {
            ...state,
            cycles: [...state.cycles, actions.payload?.cycle],
            activeCycleId: actions.payload?.cycle?.id,
          }
        case 'INTERRUPT_CURRENT_CYCLE':
          return {
            ...state,
            cycles: state.cycles.map((cycle) => {
              if (cycle.id === state.activeCycleId) {
                return {
                  ...cycle,
                  interruptedDate: new Date(),
                }
              }
              return cycle
            }),
            activeCycleId: null,
          }
        case 'FINISH_CURRENT_CYCLE':
          return {
            ...state,
            cycles: state.cycles.map((cycle) => {
              if (cycle.id === state.activeCycleId) {
                return {
                  ...cycle,
                  finishedDate: new Date(),
                }
              }
              return cycle
            }),
            activeCycleId: null,
          }
      }

      return state
    },
    { cycles: [], activeCycleId: null },
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
      payload: { cycle: newCycle },
    })

    setTotalSecondsLeft(0)
  }

  function interruptCurrentCycle() {
    dispatch({
      type: 'INTERRUPT_CURRENT_CYCLE',
      payload: { cycle: activeCycle! },
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
