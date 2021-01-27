export const logger = (store) => (next) => (action) => {
    console.log('Before update: ', store.getState());
    next(action);
    console.log('After update: ', store.getState());
};
