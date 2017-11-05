export default (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.count
      }
    case 'DECREMENT':
      return {
        count: state.count - action.count
      }
    default:
      return state
  }
}