let counter = 1;

export const increment = (store) => (next) => (action) => {
    const newAction = {
        type: action.type,
        payload: action.payload + counter++,
    };
    console.log('newAction ', newAction);
    next(newAction);
};
