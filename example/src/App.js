import React, { Component } from 'react'

import { TopBar } from 'playful-design'

export default class App extends Component {
  render () {
    return (
      <div>
        <TopBar text='Modern React component module'>
          The children come here
        </TopBar>
      </div>
    )
  }
}
