import { ActionReducer, Action } from '@ngrx/store';
//y is ActionReducer required?

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

// previous state, action-to-dispatch: Action (Action is an inbuilt class)
export function counterReducer(state: number = 0, action: Action) {
  console.log(action);
  
	switch (action.type) {
		case INCREMENT:
      console.log('incremented');
			return state + 1;

		case DECREMENT:
      console.log('decremented');
			return state - 1;

		case RESET:
      console.log('reset');
			return 0;

		default:
			return state;
	}
}
