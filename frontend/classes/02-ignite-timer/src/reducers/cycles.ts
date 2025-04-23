export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export interface CycleStates {
  cycles: Cycle[]
  activeCycleId: string | null
}

export type CycleActionsArgs =
  | { type: 'ADD_NEW_CYCLE'; payload: { newCycle: Cycle } }
  | { type: 'INTERRUPT_CURRENT_CYCLE' }
  | { type: 'FINISH_CURRENT_CYCLE' }

export function cycleReducer(
  state: CycleStates,
  actions: CycleActionsArgs,
): CycleStates {
  switch (actions.type) {
    case 'ADD_NEW_CYCLE':
      return {
        ...state,
        cycles: [...state.cycles, actions.payload.newCycle],
        activeCycleId: actions.payload.newCycle.id,
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
}
