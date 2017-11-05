import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter'
import { Provider, connect } from 'react-redux'
import store from './store'
import { increment, decrement } from './actions/counter'

class AppComponent extends React.Component {
  
  render() {
    const { dispatch } = this.props
    return (
      <div>
        <Counter />
        <div>
          <button onClick={() => {
            return dispatch(increment())
          }}>+1</button>
          <button onClick={() => {
            return dispatch(decrement())
          }}>-1</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({counter: state.counter})

const App = connect(mapStateToProps)(AppComponent)

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))