import { produce } from 'immer'
import { CycleActionsArgs } from './actions'

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

export function cycleReducer(
  state: CycleStates,
  actions: CycleActionsArgs,
): CycleStates {
  switch (actions.type) {
    case 'ADD_NEW_CYCLE':
      return produce(state, (draft) => {
        draft.cycles.push(actions.payload.newCycle)
        draft.activeCycleId = actions.payload.newCycle.id
      })
    case 'INTERRUPT_CURRENT_CYCLE': {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
        draft.activeCycleId = null
      })
    }
    case 'FINISH_CURRENT_CYCLE': {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].finishedDate = new Date()
        draft.activeCycleId = null
      })
    }
  }

  return state
}
