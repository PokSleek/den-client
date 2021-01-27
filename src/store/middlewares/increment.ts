let incrementt = 1;

export const increment = () => (next: (arg0: { type: any; payload: number; }) => void) => (action: { payload: number; type: any; }) => {

  const newAction = {
    type: action.type,
    payload: action.payload + incrementt++
  };
  console.log('newAction ', newAction);
  next(newAction)
}
