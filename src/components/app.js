import React, { Component } from 'react'
import Header from './header'

export default class App extends Component {
  static propTypes () {
    return {
      children: React.PropTypes.array
    }
  }

  render () {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    )
  }
}
