import React from 'react'
import { connect } from 'react-redux'

const Other = (props) => (
  <div>
    other: {props.counter.count}
  </div>
)

const mapStateToProps = (state) => ({counter: state.counter})

export default connect(mapStateToProps)(Other)