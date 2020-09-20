const customLoggerMiddleware = store => next => action => {
  console.group(action.type)
  console.log('%c action', 'color: gray', action);
  console.log('%c prevState', 'color: green', store.getState());
  const result = next(action);
  console.log('%c state', 'color: blue', store.getState());
  console.groupEnd(action.type)
  return result;
}

export default customLoggerMiddleware