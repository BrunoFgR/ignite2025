import { createContext, ReactNode, useState } from 'react'

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

interface CycleContextProviderProps {
  children: ReactNode
}

export function CycleContextProvider({ children }: CycleContextProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [totalSecondsLeft, setTotalSecondsLeft] = useState<number>(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setSecondsLeft(secondsLeft: number) {
    setTotalSecondsLeft(secondsLeft)
  }

  function markCurrentCycleAsFinished() {
    setCycles((prev) =>
      prev.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            finishedDate: new Date(),
          }
        }
        return cycle
      }),
    )
  }

  function createNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((prevCycles) => [...prevCycles, newCycle])
    setActiveCycleId(id)
    setTotalSecondsLeft(0)
    // reset();
  }

  function interruptCurrentCycle() {
    setCycles((prev) =>
      prev.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            interruptedDate: new Date(),
          }
        }
        return cycle
      }),
    )
    setActiveCycleId(null)
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
