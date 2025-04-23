import { Cycle } from './reducer'

export type CycleActionsArgs =
  | { type: 'ADD_NEW_CYCLE'; payload: { newCycle: Cycle } }
  | { type: 'INTERRUPT_CURRENT_CYCLE' }
  | { type: 'FINISH_CURRENT_CYCLE' }

export function addNewCycleAction(newCycle: Cycle): CycleActionsArgs {
  return {
    type: 'ADD_NEW_CYCLE',
    payload: { newCycle },
  }
}

export function interruptCurrentCycleAction(): CycleActionsArgs {
  return {
    type: 'INTERRUPT_CURRENT_CYCLE',
  }
}

export function finishCurrentCycleAction(): CycleActionsArgs {
  return {
    type: 'FINISH_CURRENT_CYCLE',
  }
}
