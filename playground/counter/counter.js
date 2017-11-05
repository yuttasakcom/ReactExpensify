import React from 'react'
import Other from './other'
import { connect } from 'react-redux'

const Counter = (props) => (
  <div>
    {props.counter.count}
    <div><Other /></div>
  </div>
)

const mapStateToProps = (state) => ({counter: state.counter})

export default connect(mapStateToProps)(Counter)