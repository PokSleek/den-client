import { act } from 'react-dom/test-utils';


export const logger = (store: { getState: () => any; }) => (next: (arg0: any) => void) => (action: any) => {
  console.log('Before update: ', store.getState());
  next(action);
  console.log('After update: ', store.getState())
}
